import { describe, expect, it } from "vitest";
import { summarizeContributions } from "./contributionSummary";
import type { EvidenceWithSources } from "./problemProjection";
import type { RecordDetail } from "../dataProvider/types";

function evidenceItem(id: string, contribution: unknown): EvidenceWithSources {
  const detail: RecordDetail = {
    id,
    type: "EVD-",
    file: `research/evidence/${id}.yaml`,
    record: contribution === undefined ? {} : { analysis: { contribution } },
    outgoingEdges: [],
    incomingEdges: [],
  };
  return { detail, sources: [] };
}

describe("summarizeContributions", () => {
  it("tallies occurrences, not evidence-item count, when one item carries multiple contributions", () => {
    const summary = summarizeContributions([evidenceItem("EVD-0001", ["CONFIRMS", "REFINES"])]);
    expect(summary.itemCount).toBe(1);
    expect(summary.occurrenceCount).toBe(2);
    expect(summary.occurrences).toEqual([
      { value: "CONFIRMS", count: 1 },
      { value: "REFINES", count: 1 },
    ]);
  });

  it("orders known canonical values by schema order regardless of input order", () => {
    const summary = summarizeContributions([evidenceItem("EVD-0001", ["CONTRADICTS", "CONFIRMS"])]);
    expect(summary.occurrences.map((o) => o.value)).toEqual(["CONFIRMS", "CONTRADICTS"]);
  });

  it("appends an unrecognised future value after known canonical values, without crashing", () => {
    const summary = summarizeContributions([evidenceItem("EVD-0001", ["CONFIRMS", "COVERAGE-GAP"])]);
    expect(summary.occurrences.map((o) => o.value)).toEqual(["CONFIRMS", "COVERAGE-GAP"]);
  });

  it("returns an empty summary for evidence with no recorded contributions", () => {
    const summary = summarizeContributions([evidenceItem("EVD-0001", undefined)]);
    expect(summary.itemCount).toBe(1);
    expect(summary.occurrenceCount).toBe(0);
    expect(summary.occurrences).toEqual([]);
  });

  it("counts across multiple evidence items", () => {
    const summary = summarizeContributions([
      evidenceItem("EVD-0001", ["CONFIRMS"]),
      evidenceItem("EVD-0002", ["CONFIRMS", "CONTRADICTS"]),
    ]);
    expect(summary.itemCount).toBe(2);
    expect(summary.occurrenceCount).toBe(3);
    expect(summary.occurrences).toEqual([
      { value: "CONFIRMS", count: 2 },
      { value: "CONTRADICTS", count: 1 },
    ]);
  });
});
