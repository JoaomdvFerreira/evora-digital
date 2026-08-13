import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GraphExplorer } from "./GraphExplorer";
import type { DataProvider, RecordEdge, RecordSummary } from "../dataProvider/types";

const INDEX: RecordSummary[] = [
  { id: "PRB-0005", type: "PRB-", label: "Parking pressure", file: "research/problems/PRB-0005.yaml", summaryFields: {} },
  { id: "EVD-0001", type: "EVD-", label: "Evidence one", file: "research/evidence/EVD-0001.yaml", summaryFields: {} },
  { id: "SRC-0001", type: "SRC-", label: "Source one", file: "research/sources/SRC-0001.yaml", summaryFields: {} },
  { id: "EVD-ISOLATED", type: "EVD-", label: "Isolated evidence", file: "research/evidence/EVD-ISOLATED.yaml", summaryFields: {} },
];

const EDGES: RecordEdge[] = [
  { id: "PRB-0005::evidence::0::EVD-0001", from: "PRB-0005", to: "EVD-0001", field: "evidence", ordinal: 0, required: false },
  {
    id: "EVD-0001::source.source_id::-::SRC-0001",
    from: "EVD-0001",
    to: "SRC-0001",
    field: "source.source_id",
    ordinal: null,
    required: true,
  },
];

function fakeProvider(): DataProvider {
  return {
    getManifest: () => Promise.reject(new Error("not used")),
    listRecords: () => Promise.resolve(INDEX),
    getRecord: () => Promise.reject(new Error("not used")),
    getEdges: () => Promise.resolve(EDGES),
  };
}

// jsdom has no WebGL context, so Sigma's own canvas cannot render in this
// suite — GraphCanvas is expected to degrade to an inline alert rather than
// crash (see GraphCanvas.tsx). These tests exercise everything around it:
// the neighbourhood computation, filters, and the HTML node/edge lists that
// remain the keyboard/screen-reader-accessible source of the same
// information (RE-04 accessibility requirement).

describe("GraphExplorer", () => {
  it("prompts for a record to focus before rendering any neighbourhood", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId={null}
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );
    await screen.findByText(/Procure e selecione um registo/);
  });

  it("keeps a valid focused record with zero relationships as a one-node graph", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="EVD-ISOLATED"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    expect(await screen.findByText(/1 nó visível · 0 relações visíveis/)).toBeTruthy();
  });

  it("shows an actionable invalid-focus error rather than a successful empty graph", async () => {
    const onClearFocus = vi.fn();
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-STALE"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={onClearFocus}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const alert = await screen.findByRole("alert");
    expect(within(alert).getByRole("heading", { name: "Registo focado não encontrado" })).toBeTruthy();
    expect(screen.queryByText(/0 nós visíveis/)).toBeNull();
    const user = userEvent.setup();
    await user.click(within(alert).getByRole("button", { name: /Limpar seleção/ }));
    expect(onClearFocus).toHaveBeenCalledTimes(1);
  });

  it("treats a malformed focus ID as invalid and recoverable", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="not/a/record"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    expect(await screen.findByRole("alert")).toBeTruthy();
  });

  it("shows the 1-hop neighbourhood (nodes and relations) for a focused record, and offers 2-hop expansion", async () => {
    const onDepthChange = vi.fn();
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={onDepthChange}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const nodesHeading = await screen.findByRole("heading", { name: "Nós visíveis" });
    const nodesList = nodesHeading.parentElement as HTMLElement;
    expect(within(nodesList).getByText(/EVD-0001/)).toBeTruthy();
    // SRC-0001 is 2 hops away — not visible at depth 1.
    expect(within(nodesList).queryByText(/SRC-0001/)).toBeNull();

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /Expandir/ }));
    expect(onDepthChange).toHaveBeenCalledWith(2);
  });

  it("reveals the second hop (Evidence -> Source) when depth is 2", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={2}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const nodesHeading = await screen.findByRole("heading", { name: "Nós visíveis" });
    const nodesList = nodesHeading.parentElement as HTMLElement;
    await within(nodesList).findByText(/SRC-0001/);
  });

  it("shows the canonical reference path for a visible relationship", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={2}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const edgesHeading = await screen.findByRole("heading", { name: "Relações visíveis" });
    const edgesSection = edgesHeading.parentElement as HTMLElement;
    await within(edgesSection).findByText((_, node) => node?.textContent === "via source.source_id");
  });

  it("filtering out a type hides its nodes from the visible list", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={2}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const nodesHeading = await screen.findByRole("heading", { name: "Nós visíveis" });
    const nodesList = nodesHeading.parentElement as HTMLElement;
    await within(nodesList).findByText(/SRC-0001/);

    const user = userEvent.setup();
    const srcCheckbox = screen.getByLabelText(/SRC-\s*—/);
    await user.click(srcCheckbox);

    expect(within(nodesList).queryByText(/SRC-0001/)).toBeNull();
  });

  it("offers 'Ver como Problema' only for a PRB- focus, and 'Ver detalhe' always", async () => {
    const onOpenGeneric = vi.fn();
    const onViewAsProblem = vi.fn();
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={onOpenGeneric}
        onViewAsProblem={onViewAsProblem}
      />
    );

    const user = userEvent.setup();
    await user.click(await screen.findByRole("button", { name: "Ver detalhe do registo" }));
    expect(onOpenGeneric).toHaveBeenCalledWith("PRB-0005");

    await user.click(screen.getByRole("button", { name: /Ver como Problema/ }));
    expect(onViewAsProblem).toHaveBeenCalledWith("PRB-0005");
  });

  it("clicking a neighbour node refocuses on it", async () => {
    const onFocusChange = vi.fn();
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={1}
        onFocusChange={onFocusChange}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );

    const nodesHeading = await screen.findByRole("heading", { name: "Nós visíveis" });
    const nodesList = nodesHeading.parentElement as HTMLElement;
    const user = userEvent.setup();
    await user.click(within(nodesList).getByRole("button", { name: /EVD-0001/ }));
    expect(onFocusChange).toHaveBeenCalledWith("EVD-0001");
  });

  it("degrades the canvas gracefully (inline message, no crash) when WebGL is unavailable", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={1}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );
    const alert = await screen.findByRole("alert");
    expect(alert.textContent).toMatch(/Registos e a vista de Problema continuam disponíveis/);
  });

  it("does not infer SUPPORTS/CONTRADICTS/CAUSES semantics anywhere in the rendered output", async () => {
    render(
      <GraphExplorer
        dataProvider={fakeProvider()}
        focusId="PRB-0005"
        depth={2}
        onFocusChange={vi.fn()}
        onClearFocus={vi.fn()}
        onDepthChange={vi.fn()}
        onOpenGeneric={vi.fn()}
        onViewAsProblem={vi.fn()}
      />
    );
    await screen.findByRole("heading", { name: "Nós visíveis" });
    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(/SUPPORTS|CONTRADICTS|CAUSES/);
  });
});
