import { describe, expect, it } from "vitest";
import type { RecordEdge, RecordSummary } from "../dataProvider/types";
import { buildGraphModel } from "./buildGraphModel";
import { buildRenderGraph } from "./renderGraph";
import { FOCUS_NODE_COLOR, typeVisual } from "./typeVisuals";

const RECORDS: RecordSummary[] = [
  { id: "PRB-0005", type: "PRB-", label: "Parking pressure", file: "research/problems/PRB-0005.yaml", summaryFields: {} },
  { id: "EVD-0001", type: "EVD-", label: "Evidence one", file: "research/evidence/EVD-0001.yaml", summaryFields: {} },
];

const EDGES: RecordEdge[] = [
  { id: "PRB-0005::evidence::0::EVD-0001", from: "PRB-0005", to: "EVD-0001", field: "evidence", ordinal: 0, required: false },
];

const graph = buildGraphModel(RECORDS, EDGES);
const positions = new Map([
  ["PRB-0005", { x: 0, y: 0 }],
  ["EVD-0001", { x: 5, y: 0 }],
]);

describe("buildRenderGraph", () => {
  it("labels every node with its own record ID (never hidden behind hover-only text)", () => {
    const render = buildRenderGraph(graph, ["PRB-0005", "EVD-0001"], ["PRB-0005::evidence::0::EVD-0001"], positions, "PRB-0005");
    expect(render.getNodeAttribute("PRB-0005", "label")).toBe("PRB-0005");
    expect(render.getNodeAttribute("EVD-0001", "label")).toBe("EVD-0001");
  });

  it("gives the focus node a distinct colour/size from same-type non-focus nodes", () => {
    const render = buildRenderGraph(graph, ["PRB-0005", "EVD-0001"], [], positions, "PRB-0005");
    expect(render.getNodeAttribute("PRB-0005", "color")).toBe(FOCUS_NODE_COLOR);
    expect(render.getNodeAttribute("EVD-0001", "color")).toBe(typeVisual("EVD-").color);
    expect(render.getNodeAttribute("PRB-0005", "size")).toBeGreaterThan(render.getNodeAttribute("EVD-0001", "size"));
  });

  it("renders every edge with an arrow type, preserving canonical reference direction", () => {
    const render = buildRenderGraph(graph, ["PRB-0005", "EVD-0001"], ["PRB-0005::evidence::0::EVD-0001"], positions, "PRB-0005");
    expect(render.getEdgeAttribute("PRB-0005::evidence::0::EVD-0001", "type")).toBe("arrow");
    expect(render.source("PRB-0005::evidence::0::EVD-0001")).toBe("PRB-0005");
    expect(render.target("PRB-0005::evidence::0::EVD-0001")).toBe("EVD-0001");
  });

  it("with no focus (e.g. full-corpus view), no node gets the focus colour", () => {
    const render = buildRenderGraph(graph, ["PRB-0005", "EVD-0001"], [], positions, null);
    expect(render.getNodeAttribute("PRB-0005", "color")).not.toBe(FOCUS_NODE_COLOR);
  });
});
