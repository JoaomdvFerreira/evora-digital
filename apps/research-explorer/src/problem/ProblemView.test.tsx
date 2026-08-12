import { describe, expect, it, vi } from "vitest";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProblemView } from "./ProblemView";
import type { DataProvider, RecordDetail, RecordSummary } from "../dataProvider/types";

const INDEX: RecordSummary[] = [
  { id: "PRB-0005", type: "PRB-", label: "Parking pressure", file: "research/problems/PRB-0005.yaml", summaryFields: {} },
  { id: "ASM-0005", type: "ASM-", label: "ASM-0005", file: "research/assessments/ASM-0005.yaml", summaryFields: {} },
  { id: "EVD-0001", type: "EVD-", label: "Evidence one", file: "research/evidence/EVD-0001.yaml", summaryFields: {} },
  { id: "SRC-0001", type: "SRC-", label: "Source one", file: "research/sources/SRC-0001.yaml", summaryFields: {} },
  { id: "WID-0001", type: "WID-", label: "Future widget", file: "research/widgets/WID-0001.yaml", summaryFields: {} },
];

const DETAILS: Record<string, RecordDetail> = {
  "PRB-0005": {
    id: "PRB-0005",
    type: "PRB-",
    file: "research/problems/PRB-0005.yaml",
    record: { title: "Parking pressure", status: "OPEN", problem_statement: "Traffic and parking conflict with pedestrian space." },
    outgoingEdges: [{ field: "evidence", ordinal: 0, to: "EVD-0001" }],
    incomingEdges: [{ field: "problem", ordinal: null, from: "ASM-0005" }],
  },
  "ASM-0005": {
    id: "ASM-0005",
    type: "ASM-",
    file: "research/assessments/ASM-0005.yaml",
    record: {
      assessment_id: "ASM-0005",
      problem: "PRB-0005",
      triage: "DEEPEN",
      assessment_status: "CURRENT",
      remaining_gap: "PARTIAL",
      critical_unknowns: { U1: { question: "Is search friction material?", decision_impact: "HIGH", target_phase: "D5" } },
    },
    outgoingEdges: [{ field: "problem", ordinal: null, to: "PRB-0005" }],
    incomingEdges: [],
  },
  "EVD-0001": {
    id: "EVD-0001",
    type: "EVD-",
    file: "research/evidence/EVD-0001.yaml",
    record: { evidence_id: "EVD-0001", type: "institutional" },
    outgoingEdges: [
      { field: "source.source_id", ordinal: null, to: "SRC-0001" },
      { field: "additional_sources", ordinal: 0, to: "WID-0001" },
    ],
    incomingEdges: [{ field: "evidence", ordinal: 0, from: "PRB-0005" }],
  },
  "SRC-0001": {
    id: "SRC-0001",
    type: "SRC-",
    file: "research/sources/SRC-0001.yaml",
    record: { source_id: "SRC-0001", publisher: "Fixture Publisher" },
    outgoingEdges: [],
    incomingEdges: [{ field: "source.source_id", ordinal: null, from: "EVD-0001" }],
  },
  "WID-0001": {
    id: "WID-0001",
    type: "WID-",
    file: "research/widgets/WID-0001.yaml",
    record: { widget_id: "WID-0001" },
    outgoingEdges: [],
    incomingEdges: [{ field: "additional_sources", ordinal: 0, from: "EVD-0001" }],
  },
};

function fakeProvider(): DataProvider {
  return {
    getManifest: () => Promise.reject(new Error("not used")),
    listRecords: () => Promise.resolve(INDEX),
    getRecord: (id: string) => {
      const detail = DETAILS[id];
      return detail ? Promise.resolve(detail) : Promise.reject(new Error(`no fixture detail for ${id}`));
    },
  };
}

describe("ProblemView", () => {
  it("shows a prompt when no problem is selected", async () => {
    render(<ProblemView dataProvider={fakeProvider()} problemId={null} onOpenGeneric={vi.fn()} onBackToRecords={vi.fn()} />);
    await screen.findByText("Nenhum Problema selecionado.");
  });

  it("shows a redirect message when the selected record is not a Problem", async () => {
    const onOpenGeneric = vi.fn();
    render(<ProblemView dataProvider={fakeProvider()} problemId="EVD-0001" onOpenGeneric={onOpenGeneric} onBackToRecords={vi.fn()} />);

    const alert = await screen.findByRole("alert");
    expect(within(alert).getByText(/não pode ser aberto/)).toBeTruthy();
    const user = userEvent.setup();
    await user.click(within(alert).getByRole("button", { name: "Ver detalhe genérico" }));
    expect(onOpenGeneric).toHaveBeenCalledWith("EVD-0001");
  });

  it("surfaces identity, current state, assessment, evidence, sources, unknowns, and (absent) hypotheses for a real problem shape", async () => {
    render(<ProblemView dataProvider={fakeProvider()} problemId="PRB-0005" onOpenGeneric={vi.fn()} onBackToRecords={vi.fn()} />);

    await screen.findByRole("heading", { name: "Parking pressure" });
    expect(screen.getByText(/Traffic and parking conflict/)).toBeTruthy();

    const assessmentSection = screen.getByLabelText("Avaliação");
    expect(within(assessmentSection).getByText(/ASM-0005/)).toBeTruthy();
    expect(within(assessmentSection).getByText("DEEPEN")).toBeTruthy();

    const evidenceSection = screen.getByLabelText("Evidência");
    expect(within(evidenceSection).getByText(/EVD-0001/)).toBeTruthy();
    expect(within(evidenceSection).getByText(/SRC-0001/)).toBeTruthy();

    const unknownsSection = screen.getByLabelText("Incertezas e lacunas");
    expect(within(unknownsSection).getByText("remaining_gap")).toBeTruthy();
    expect(within(unknownsSection).getByText("critical_unknowns")).toBeTruthy();
    expect(within(unknownsSection).getByText(/Is search friction material/)).toBeTruthy();

    const hypothesesSection = screen.getByLabelText("Hipóteses");
    expect(within(hypothesesSection).getByText("Nenhuma hipótese associada.")).toBeTruthy();
  });

  it("only surfaces SRC- typed targets as Sources, and does not crash when evidence links a non-source future type", async () => {
    // EVD-0001 links WID-0001 (a future type) via `additional_sources` too;
    // the Sources section is specifically about SRC- provenance, so a
    // non-SRC- target is correctly excluded from it rather than mislabelled
    // as a "source" — and its presence must not crash the projection or the
    // render.
    render(<ProblemView dataProvider={fakeProvider()} problemId="PRB-0005" onOpenGeneric={vi.fn()} onBackToRecords={vi.fn()} />);
    const evidenceSection = await screen.findByLabelText("Evidência");
    await within(evidenceSection).findByText(/EVD-0001/);
    expect(within(evidenceSection).getByText(/SRC-0001/)).toBeTruthy();
    expect(within(evidenceSection).queryByText(/WID-0001/)).toBeNull();
  });

  it("clicking an evidence or source ID calls onOpenGeneric with that ID", async () => {
    const onOpenGeneric = vi.fn();
    const user = userEvent.setup();
    render(<ProblemView dataProvider={fakeProvider()} problemId="PRB-0005" onOpenGeneric={onOpenGeneric} onBackToRecords={vi.fn()} />);

    const sourceButton = await screen.findByRole("button", { name: /SRC-0001/ });
    await user.click(sourceButton);
    expect(onOpenGeneric).toHaveBeenCalledWith("SRC-0001");
  });

  it("does not infer SUPPORTS/CONTRADICTS/CAUSES semantics anywhere in the rendered output", async () => {
    render(<ProblemView dataProvider={fakeProvider()} problemId="PRB-0005" onOpenGeneric={vi.fn()} onBackToRecords={vi.fn()} />);
    await screen.findByRole("heading", { name: "Parking pressure" });
    const body = document.body.textContent ?? "";
    expect(body).not.toMatch(/SUPPORTS|CONTRADICTS|CAUSES/);
  });
});
