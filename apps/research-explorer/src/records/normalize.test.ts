import { describe, expect, it } from "vitest";
import { normalizeForSearch } from "./normalize";

describe("normalizeForSearch", () => {
  it("lowercases", () => {
    expect(normalizeForSearch("PRB-0005")).toBe("prb-0005");
  });

  it("strips diacritics so 'evora' matches 'Évora'", () => {
    expect(normalizeForSearch("Évora")).toBe("evora");
  });

  it("strips diacritics so 'acao' matches 'ação'", () => {
    expect(normalizeForSearch("ação")).toBe("acao");
  });

  it("is idempotent on already-plain ASCII", () => {
    expect(normalizeForSearch("mobility")).toBe("mobility");
  });
});
