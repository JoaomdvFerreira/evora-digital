import { describe, expect, it } from "vitest";
import { readFileSync } from "node:fs";
import path from "node:path";

/**
 * Structural regression for the V2 Record Detail desktop centering defect:
 * `.record-detail-columns` (and, once discovered, its sibling
 * `.detail-breadcrumb`) capped their width at 980px (design-system.md §1)
 * but never centered that capped box within the wider `main` container, so
 * the whole composition — including the breadcrumb sitting above it — sat
 * flush against the left edge on desktop instead of being centered like
 * `.problem-view` (Problem View) is. This test parses the actual rule bodies
 * out of the production stylesheet and asserts each centers itself whenever
 * it also caps its width, rather than asserting any pixel position (which
 * the implementation contract explicitly asks unit tests not to do).
 */
const CSS_PATH = path.join(__dirname, "index.css");

function ruleBodiesFor(css: string, selector: string): string[] {
  const bodies: string[] = [];
  const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const pattern = new RegExp(`${escaped}\\s*\\{([^}]*)\\}`, "g");
  for (const match of css.matchAll(pattern)) {
    bodies.push(match[1]);
  }
  return bodies;
}

function hasAutoInlineCentering(body: string): boolean {
  if (/margin\s*:\s*[^;]*\bauto\b/.test(body)) return true;
  if (/margin-inline\s*:\s*auto/.test(body)) return true;
  if (/margin-left\s*:\s*auto/.test(body) && /margin-right\s*:\s*auto/.test(body)) return true;
  return false;
}

function expectCenteredWheneverCapped(css: string, selector: string) {
  const bodies = ruleBodiesFor(css, selector);
  expect(bodies.length).toBeGreaterThan(0);
  for (const body of bodies) {
    const maxWidth = body.match(/max-width\s*:\s*([^;]+);/);
    if (maxWidth && maxWidth[1].trim() !== "100%") {
      expect(hasAutoInlineCentering(body)).toBe(true);
    }
  }
}

describe("record-detail layout (desktop centering regression)", () => {
  it("centers .record-detail-columns wherever it also caps its max-width", () => {
    const css = readFileSync(CSS_PATH, "utf-8");
    expectCenteredWheneverCapped(css, ".record-detail-columns");
  });

  it("centers .detail-breadcrumb wherever it also caps its max-width, so it stays aligned with the columns below it", () => {
    const css = readFileSync(CSS_PATH, "utf-8");
    expectCenteredWheneverCapped(css, ".detail-breadcrumb");
  });
});
