import { describe, expect, it } from "vitest";
import { computeRecordsView } from "./recordsView";
import type { RecordSummary } from "../dataProvider/types";
import { ALL_TYPES } from "./recordIndex";

function summary(overrides: Partial<RecordSummary>): RecordSummary {
  return { id: "PRB-0001", type: "PRB-", label: "Fixture", file: "research/problems/PRB-0001.yaml", summaryFields: {}, ...overrides };
}

const FIXTURE: RecordSummary[] = [
  summary({ id: "PRB-0003", type: "PRB-", label: "Charlie" }),
  summary({ id: "PRB-0001", type: "PRB-", label: "Alpha" }),
  summary({ id: "EVD-000001", type: "EVD-", label: "Evidence one" }),
  summary({ id: "PRB-0002", type: "PRB-", label: "Bravo" }),
];

function baseInput(overrides: Partial<Parameters<typeof computeRecordsView>[0]> = {}) {
  return {
    records: FIXTURE,
    query: "",
    typeFilter: ALL_TYPES,
    sorting: [],
    pagination: { pageIndex: 0, pageSize: 25 },
    ...overrides,
  };
}

describe("computeRecordsView", () => {
  it("returns all records with no filter/query", () => {
    const result = computeRecordsView(baseInput());
    expect(result.filteredCount).toBe(4);
    expect(result.rows).toHaveLength(4);
  });

  it("sorts stably by a given column via TanStack's real sorting engine", () => {
    const result = computeRecordsView(baseInput({ sorting: [{ id: "id", desc: false }] }));
    expect(result.rows.map((r) => r.id)).toEqual(["EVD-000001", "PRB-0001", "PRB-0002", "PRB-0003"]);
  });

  it("paginates with a stable page size", () => {
    const result = computeRecordsView(baseInput({ pagination: { pageIndex: 0, pageSize: 2 } }));
    expect(result.rows).toHaveLength(2);
    expect(result.pageCount).toBe(2);
  });

  it("returns the second page correctly", () => {
    const result = computeRecordsView(
      baseInput({ sorting: [{ id: "id", desc: false }], pagination: { pageIndex: 1, pageSize: 2 } })
    );
    expect(result.rows.map((r) => r.id)).toEqual(["PRB-0002", "PRB-0003"]);
  });
});
