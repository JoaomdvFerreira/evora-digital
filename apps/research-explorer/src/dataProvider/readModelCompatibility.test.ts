import { describe, expect, it } from "vitest";
import { SUPPORTED_READ_MODEL_MAJOR, isReadModelVersionCompatible, parseMajorVersion } from "./readModelCompatibility";

describe("readModelCompatibility", () => {
  it("parses a well-formed semver-shaped version", () => {
    expect(parseMajorVersion("1.0.0")).toBe(1);
    expect(parseMajorVersion("1.4.2")).toBe(1);
    expect(parseMajorVersion("2.0.0")).toBe(2);
  });

  it("returns null for a malformed version string", () => {
    expect(parseMajorVersion("not-a-version")).toBeNull();
    expect(parseMajorVersion("1.0")).toBeNull();
    expect(parseMajorVersion("")).toBeNull();
  });

  it("accepts the currently supported major version regardless of minor/patch", () => {
    expect(isReadModelVersionCompatible(`${SUPPORTED_READ_MODEL_MAJOR}.0.0`)).toBe(true);
    expect(isReadModelVersionCompatible(`${SUPPORTED_READ_MODEL_MAJOR}.9.9`)).toBe(true);
  });

  it("rejects a different major version", () => {
    expect(isReadModelVersionCompatible(`${SUPPORTED_READ_MODEL_MAJOR + 1}.0.0`)).toBe(false);
  });

  it("rejects a malformed version string outright", () => {
    expect(isReadModelVersionCompatible("garbage")).toBe(false);
  });
});
