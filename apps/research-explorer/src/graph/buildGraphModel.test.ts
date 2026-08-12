import { describe, expect, it } from "vitest";
import type { RecordEdge, RecordSummary } from "../dataProvider/types";
import { buildGraphModel } from "./buildGraphModel";

const RECORDS: RecordSummary[] = [
  { id: "PRB-0005", type: "PRB-", label: "Parking pressure", file: "research/problems/PRB-0005.yaml", summaryFields: {} },
  { id: "EVD-0001", type: "EVD-", label: "Evidence one", file: "research/evidence/EVD-0001.yaml", summaryFields: {} },
  { id: "SRC-0001", type: "SRC-", label: "Source one", file: "research/sources/SRC-0001.yaml", summaryFields: {} },
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

describe("buildGraphModel", () => {
  it("adds one node per record, carrying only domain attributes (no colour/shape/position)", () => {
    const graph = buildGraphModel(RECORDS, []);
    expect(graph.order).toBe(3);
    expect(graph.getNodeAttributes("PRB-0005")).toEqual({ recordType: "PRB-", recordLabel: "Parking pressure" });
  });

  it("adds one edge per resolved reference, keyed by the edge's own id, preserving field/ordinal/required", () => {
    const graph = buildGraphModel(RECORDS, EDGES);
    expect(graph.size).toBe(2);
    expect(graph.hasEdge("PRB-0005::evidence::0::EVD-0001")).toBe(true);
    expect(graph.getEdgeAttributes("PRB-0005::evidence::0::EVD-0001")).toEqual({ field: "evidence", ordinal: 0, required: false });
    expect(graph.source("PRB-0005::evidence::0::EVD-0001")).toBe("PRB-0005");
    expect(graph.target("PRB-0005::evidence::0::EVD-0001")).toBe("EVD-0001");
  });

  it("supports two distinct edges between the same pair of records (different field/ordinal) without collapsing them", () => {
    const extra: RecordEdge = {
      id: "PRB-0005::related::0::EVD-0001",
      from: "PRB-0005",
      to: "EVD-0001",
      field: "related",
      ordinal: 0,
      required: false,
    };
    const graph = buildGraphModel(RECORDS, [...EDGES, extra]);
    expect(graph.edges("PRB-0005", "EVD-0001")).toHaveLength(2);
  });

  it("skips an edge whose endpoint is absent from the record set rather than throwing", () => {
    const dangling: RecordEdge = { id: "EVD-0001::x::-::MISSING-0001", from: "EVD-0001", to: "MISSING-0001", field: "x", ordinal: null, required: false };
    const graph = buildGraphModel(RECORDS, [dangling]);
    expect(graph.size).toBe(0);
  });

  it("accepts a self-referencing edge (from === to) without throwing", () => {
    const selfLoop: RecordEdge = { id: "PRB-0005::related::0::PRB-0005", from: "PRB-0005", to: "PRB-0005", field: "related", ordinal: 0, required: false };
    const graph = buildGraphModel(RECORDS, [selfLoop]);
    expect(graph.hasEdge("PRB-0005::related::0::PRB-0005")).toBe(true);
    expect(graph.source("PRB-0005::related::0::PRB-0005")).toBe("PRB-0005");
    expect(graph.target("PRB-0005::related::0::PRB-0005")).toBe("PRB-0005");
  });

  it("represents an unknown future record type as an ordinary node, no special-casing required", () => {
    const withFuture: RecordSummary[] = [
      ...RECORDS,
      { id: "WID-0001", type: "WID-", label: "Future widget", file: "research/widgets/WID-0001.yaml", summaryFields: {} },
    ];
    const graph = buildGraphModel(withFuture, []);
    expect(graph.getNodeAttribute("WID-0001", "recordType")).toBe("WID-");
  });
});
