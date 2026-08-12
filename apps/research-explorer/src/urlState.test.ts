import { describe, expect, it } from "vitest";
import { DEFAULT_URL_STATE, parseUrlState, serializeUrlState } from "./urlState";
import { ALL_TYPES } from "./records/recordIndex";

describe("parseUrlState", () => {
  it("returns defaults for an empty search string", () => {
    expect(parseUrlState("")).toEqual(DEFAULT_URL_STATE);
  });

  it("parses view, id, q, and type", () => {
    expect(parseUrlState("?view=overview&id=PRB-0005&q=parking&type=PRB-")).toEqual({
      view: "overview",
      selectedId: "PRB-0005",
      query: "parking",
      typeFilter: "PRB-",
    });
  });

  it("degrades an invalid view to the default rather than crashing", () => {
    expect(parseUrlState("?view=not-a-real-view").view).toBe("records");
  });

  it("recognizes the RE-03 'problem' view", () => {
    expect(parseUrlState("?view=problem&id=PRB-0005")).toEqual({
      view: "problem",
      selectedId: "PRB-0005",
      query: "",
      typeFilter: ALL_TYPES,
    });
  });

  it("treats an empty id param as no selection", () => {
    expect(parseUrlState("?id=").selectedId).toBeNull();
  });

  it("does not validate selectedId syntax/existence here — that is the DataProvider's job", () => {
    // Deliberately a value that would fail StaticDataProvider's safety check
    // (contains a path separator) — parseUrlState must still return it
    // as-is; StaticDataProvider.getRecord() is what rejects it safely.
    expect(parseUrlState("?id=../secret").selectedId).toBe("../secret");
  });
});

describe("serializeUrlState", () => {
  it("serializes to an empty string for the default state", () => {
    expect(serializeUrlState(DEFAULT_URL_STATE)).toBe("");
  });

  it("only includes non-default fields", () => {
    const qs = serializeUrlState({ ...DEFAULT_URL_STATE, query: "evora" });
    expect(qs).toBe("?q=evora");
  });

  it("round-trips a full state", () => {
    const state = { view: "overview" as const, selectedId: "EVD-000105", query: "via verde", typeFilter: "EVD-" };
    expect(parseUrlState(serializeUrlState(state))).toEqual(state);
  });

  it("omits typeFilter when it equals ALL_TYPES", () => {
    const qs = serializeUrlState({ ...DEFAULT_URL_STATE, typeFilter: ALL_TYPES });
    expect(qs).not.toContain("type=");
  });
});
