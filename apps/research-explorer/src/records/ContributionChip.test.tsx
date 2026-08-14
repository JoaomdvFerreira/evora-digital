import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import { CANONICAL_CONTRIBUTION_ORDER, ContributionChip } from "./ContributionChip";

const CANONICAL_VALUES = [
  "CONFIRMS",
  "REFINES",
  "CONTRADICTS",
  "CURRENT-STATE-UPDATE",
  "EXISTING-SOLUTION",
  "PLANNED-SOLUTION",
  "NEW-CANDIDATE",
];

describe("ContributionChip", () => {
  it("exposes the current canonical enum in schema order", () => {
    expect(CANONICAL_CONTRIBUTION_ORDER).toEqual(CANONICAL_VALUES);
  });

  it.each(CANONICAL_VALUES)("renders the canonical text label for %s", (value) => {
    render(<ContributionChip value={value} />);
    expect(screen.getByText(value)).toBeTruthy();
  });

  it("renders an unrecognised future value's text without crashing and without a glyph", () => {
    render(<ContributionChip value="COVERAGE-GAP" />);
    expect(screen.getByText("COVERAGE-GAP")).toBeTruthy();
  });

  it("gives every canonical value, including CONTRADICTS, identical structural class treatment", () => {
    const { container: contradictsContainer } = render(<ContributionChip value="CONTRADICTS" />);
    const { container: confirmsContainer } = render(<ContributionChip value="CONFIRMS" />);
    const contradictsChip = contradictsContainer.querySelector(".contribution-chip")!;
    const confirmsChip = confirmsContainer.querySelector(".contribution-chip")!;
    expect(contradictsChip.className).toBe(confirmsChip.className);
  });
});
