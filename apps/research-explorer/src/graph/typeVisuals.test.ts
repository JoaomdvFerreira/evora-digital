import { describe, expect, it } from "vitest";
import { GENERIC_TYPE_VISUAL, knownVisualPrefixes, typeVisual } from "./typeVisuals";

describe("typeVisual", () => {
  it("returns a distinct colour for each of the five current known types", () => {
    const prefixes = knownVisualPrefixes();
    const colors = new Set(prefixes.map((p) => typeVisual(p).color));
    expect(colors.size).toBe(prefixes.length);
  });

  it("falls back to the generic visual for an unknown/future record type", () => {
    expect(typeVisual("WID-")).toEqual(GENERIC_TYPE_VISUAL);
  });
});
