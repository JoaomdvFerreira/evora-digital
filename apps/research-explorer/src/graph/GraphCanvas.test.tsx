import { MultiDirectedGraph } from "graphology";
import { render, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import type { RenderEdgeAttributes, RenderGraph, RenderNodeAttributes } from "./renderGraph";

const sigmaState = vi.hoisted(() => {
  let resolveImport: ((module: { default: typeof FakeSigma }) => void) | undefined;
  const pendingImport = new Promise<{ default: typeof FakeSigma }>((resolve) => {
    resolveImport = resolve;
  });
  const instances: FakeSigma[] = [];

  class FakeSigma {
    setGraph = vi.fn();
    on = vi.fn();
    kill = vi.fn();
    getCamera = () => ({ animatedReset: vi.fn() });

    constructor(readonly graph: RenderGraph) {
      instances.push(this);
    }
  }

  return { FakeSigma, instances, pendingImport, resolveImport: () => resolveImport?.({ default: FakeSigma }) };
});

vi.mock("sigma", () => sigmaState.pendingImport);

import { GraphCanvas } from "./GraphCanvas";

function renderGraph(id: string): RenderGraph {
  const graph = new MultiDirectedGraph<RenderNodeAttributes, RenderEdgeAttributes>();
  graph.addNode(id, { recordType: "PRB-", x: 0, y: 0, size: 6, color: "#000", label: id, type: "circle" });
  return graph;
}

describe("GraphCanvas", () => {
  it("constructs Sigma with the latest graph after a delayed import and synchronizes later updates", async () => {
    const graphA = renderGraph("PRB-A");
    const graphB = renderGraph("PRB-B");
    const graphC = renderGraph("PRB-C");
    const { rerender } = render(<GraphCanvas graph={graphA} onNodeClick={vi.fn()} />);

    rerender(<GraphCanvas graph={graphB} onNodeClick={vi.fn()} />);
    sigmaState.resolveImport();

    await waitFor(() => expect(sigmaState.instances).toHaveLength(1));
    expect(sigmaState.instances[0].graph).toBe(graphB);

    rerender(<GraphCanvas graph={graphC} onNodeClick={vi.fn()} />);
    await waitFor(() => expect(sigmaState.instances[0].setGraph).toHaveBeenCalledWith(graphC));
  });
});
