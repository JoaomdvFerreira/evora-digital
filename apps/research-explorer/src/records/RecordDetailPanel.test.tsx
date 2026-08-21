import { describe, expect, it } from "vitest";
import { render, screen, within } from "@testing-library/react";
import { RecordDetailPanel } from "./RecordDetailPanel";
import type { DataProvider, RecordDetail, RecordSummary } from "../dataProvider/types";

/**
 * Slice 1 (docs/design/research-explorer-design-foundations.md): meaning
 * before metadata, compact provenance near the top, exhaustive technical
 * inspection closed-by-default but reachable, exact reference paths
 * preserved, no PRB context switcher on non-PRB records. EVD-000127 (the
 * REDUX-001/003 acceptance fixture named in the review) stands in for the
 * real corpus record of the same ID.
 */
const EVD_127_SUMMARY: RecordSummary = {
  id: "EVD-000127",
  type: "EVD-",
  label: "SASUE considera o processo atual de candidatura a alojamento em residência totalmente op...",
  file: "research/evidence/EVD-000127.yaml",
  summaryFields: { strength: "primary-authoritative", verification: "REPORTED" },
};

const EVD_127_DETAIL: RecordDetail = {
  id: "EVD-000127",
  type: "EVD-",
  file: "research/evidence/EVD-000127.yaml",
  record: {
    evidence_id: "EVD-000127",
    type: "stakeholder",
    observation: { summary: "SASUE considera o processo atual de candidatura a alojamento em residência totalmente operacional." },
    analysis: { contribution: "CONTRADICTS", related_problems: ["PRB-0006"] },
    personal_data: { present: false },
  },
  outgoingEdges: [{ field: "analysis.related_problems", ordinal: 0, to: "PRB-0006" }],
  incomingEdges: [],
};

const PRB_0006_SUMMARY: RecordSummary = {
  id: "PRB-0006",
  type: "PRB-",
  label: "Adequate and affordable housing is difficult to access for some population groups",
  file: "research/problems/PRB-0006.yaml",
  summaryFields: { status: "OPEN" },
};

const WID_0001_SUMMARY: RecordSummary = {
  id: "WID-0001",
  type: "WID-",
  label: "WID-0001",
  file: "research/widgets/WID-0001.yaml",
  summaryFields: {},
};

const WID_0001_DETAIL: RecordDetail = {
  id: "WID-0001",
  type: "WID-",
  file: "research/widgets/WID-0001.yaml",
  record: { widget_id: "WID-0001", nested: { flag: true } },
  outgoingEdges: [],
  // Deliberately connected to a PRB- record via a field name that is *not*
  // a canonical "related problem" reference, to prove connectivity alone
  // never triggers "Ver como Problema" (see the boundary test below).
  incomingEdges: [{ field: "widgets", ordinal: 0, from: "PRB-0006" }],
};

const ASM_0001_SUMMARY: RecordSummary = {
  id: "ASM-0001",
  type: "ASM-",
  label: "Avaliação de PRB-0006",
  file: "research/assessments/ASM-0001.yaml",
  summaryFields: { assessment_status: "CURRENT" },
};

const ASM_0001_DETAIL: RecordDetail = {
  id: "ASM-0001",
  type: "ASM-",
  file: "research/assessments/ASM-0001.yaml",
  record: { assessment_id: "ASM-0001", problem: "PRB-0006" },
  outgoingEdges: [{ field: "problem", ordinal: null, to: "PRB-0006" }],
  incomingEdges: [],
};

function buildLookup(...summaries: RecordSummary[]): Map<string, RecordSummary> {
  return new Map(summaries.map((s) => [s.id, s]));
}

function fakeProvider(details: Record<string, RecordDetail>): DataProvider {
  return {
    getManifest: () => Promise.reject(new Error("not used")),
    listRecords: () => Promise.reject(new Error("not used")),
    getRecord: (id: string) => (details[id] ? Promise.resolve(details[id]) : Promise.reject(new Error(`no fixture for ${id}`))),
    getEdges: () => Promise.reject(new Error("not used")),
  };
}

function noop() {}

describe("RecordDetailPanel — meaning-first hierarchy (REDUX-001/003)", () => {
  it("renders meaning before technical inspection, and provenance before the exhaustive field list, for EVD-000127", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;

    // The plain-language observation itself is on screen in the meaning
    // zone specifically — not just present somewhere in the raw field dump
    // (the same text also appears, correctly, inside the technical
    // disclosure below, so this assertion is scoped to the meaning zone).
    const meaningZone = await within(panel).findByLabelText("Significado");
    const meaning = within(meaningZone).getByText(/totalmente operacional/);

    const provenance = within(panel).getByText(/referencia 1 registo\(s\)/).closest("section")!;
    const technicalSummary = within(panel).getByText("Inspeção técnica completa — todos os campos canónicos");
    const relacoes = within(panel).getByLabelText("Relações");

    // DOM order encodes reading order: meaning zone, then provenance, then
    // the technical disclosure, then full relationship detail.
    const order = meaning.compareDocumentPosition(provenance);
    expect(order & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(provenance.compareDocumentPosition(technicalSummary) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(technicalSummary.compareDocumentPosition(relacoes) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it("defaults the technical field disclosure to closed", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    await within(panel).findByText("Inspeção técnica completa — todos os campos canónicos");
    const details = panel.querySelector(".technical-disclosure") as HTMLDetailsElement;
    expect(details.open).toBe(false);
  });

  it("keeps every canonical field reachable inside the technical disclosure, including nested/private fields", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    await within(panel).findByText("evidence_id");
    // Nested field names/values are still rendered, unmodified.
    expect(within(panel).getByText("analysis")).toBeTruthy();
    expect(within(panel).getByText("contribution")).toBeTruthy();
    expect(within(panel).getByText("CONTRADICTS")).toBeTruthy();
    expect(within(panel).getByText("present")).toBeTruthy();
    expect(within(panel).getByText("Não")).toBeTruthy();
  });

  it("shows compact provenance (relationship counts) without requiring the technical disclosure to be opened", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    await within(panel).findByText(/referenciado por 0 registo\(s\)/);
    expect(within(panel).getByText(/referencia 1 registo\(s\)/)).toBeTruthy();
  });

  it("preserves exact outgoing reference-path notation (via <field>[ordinal]) in Relações", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    const relacoes = within(panel).getByLabelText("Relações");
    const saidas = within(relacoes).getByLabelText("Saídas");
    expect(saidas.textContent).toContain("referencia através de");
    expect(saidas.textContent).toContain("analysis.related_problems");
    expect(saidas.textContent).toContain("[0]");
    expect(saidas.textContent).toContain("PRB-0006");
  });

  it("offers a 'Ver como Problema' action for a related PRB without implying it is a view of the EVD itself", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    expect(await within(panel).findByRole("button", { name: "Ver como Problema (PRB-0006)" })).toBeTruthy();
  });

  it("does not render the PRB Detalhe/Problema/Grafo context switcher on non-PRB Detail", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    await within(panel).findByText("Inspeção técnica completa — todos os campos canónicos");
    expect(within(panel).queryByRole("button", { name: "Ver como Problema (contexto completo)" })).toBeNull();
    expect(within(panel).queryByText("Detalhe · Problema · Grafo")).toBeNull();
  });

  it("renders a future/unknown schema-shaped record generically, with no meaning-zone crash, and no fabricated meaning text", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "WID-0001": WID_0001_DETAIL })}
        lookup={buildLookup(WID_0001_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="WID-0001"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    // No title/name/hypothesis/problem_statement/observation.summary field
    // exists on this fixture — the meaning zone must fall back honestly
    // (its own ID + an explicit "no meaning field" note) rather than
    // inventing content.
    await within(panel).findByText(/sem campo de significado canónico identificado/);
    // The generic technical field tree still renders the record correctly.
    expect(within(panel).getByText("widget_id")).toBeTruthy();
    expect(within(panel).getByText("flag")).toBeTruthy();
    expect(within(panel).getByText("Sim")).toBeTruthy();
  });

  it("does NOT offer 'Ver como Problema' merely because an edge happens to resolve to a PRB- record via a non-canonical field", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "WID-0001": WID_0001_DETAIL })}
        lookup={buildLookup(WID_0001_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="WID-0001"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    await within(panel).findByText("widget_id");
    // WID-0001 has an incoming edge from PRB-0006, but via field "widgets" —
    // not a canonical "related problem" reference — so generic connectivity
    // must not be inferred as "this is the record's Problem".
    expect(within(panel).queryByRole("button", { name: /Ver como Problema/ })).toBeNull();
  });

  it("offers 'Ver como Problema' for a non-EVD record via its own schema's canonical `problem` reference field", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "ASM-0001": ASM_0001_DETAIL })}
        lookup={buildLookup(ASM_0001_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="ASM-0001"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const panel = (await screen.findByText("Detalhes")).closest("section") as HTMLElement;
    expect(await within(panel).findByRole("button", { name: "Ver como Problema (PRB-0006)" })).toBeTruthy();
  });

  it("moves focus onto the freshly-loaded detail content (no regression to existing focus behavior)", async () => {
    render(
      <RecordDetailPanel
        dataProvider={fakeProvider({ "EVD-000127": EVD_127_DETAIL })}
        lookup={buildLookup(EVD_127_SUMMARY, PRB_0006_SUMMARY)}
        selectedId="EVD-000127"
        onSelect={noop}
        onViewAsProblem={noop}
        onViewInGraph={noop}
      />
    );

    const content = await screen.findByLabelText("Detalhe de EVD-000127");
    expect(document.activeElement).toBe(content);
  });
});
