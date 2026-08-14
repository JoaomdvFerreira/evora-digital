import { afterEach, describe, expect, it } from "vitest";
import { renderHook, act } from "@testing-library/react";
import { NARROW_BREAKPOINT_PX, useNarrowViewport } from "./useNarrowViewport";

function setInnerWidth(width: number) {
  Object.defineProperty(window, "innerWidth", { writable: true, configurable: true, value: width });
}

const ORIGINAL_WIDTH = window.innerWidth;

afterEach(() => {
  setInnerWidth(ORIGINAL_WIDTH);
});

describe("useNarrowViewport", () => {
  it("reports narrow at/below the existing breakpoint, and not narrow above it", () => {
    setInnerWidth(NARROW_BREAKPOINT_PX);
    const { result: atBreakpoint } = renderHook(() => useNarrowViewport());
    expect(atBreakpoint.current).toBe(true);

    setInnerWidth(NARROW_BREAKPOINT_PX + 1);
    const { result: aboveBreakpoint } = renderHook(() => useNarrowViewport());
    expect(aboveBreakpoint.current).toBe(false);
  });

  it("updates when the window is resized", () => {
    setInnerWidth(1200);
    const { result } = renderHook(() => useNarrowViewport());
    expect(result.current).toBe(false);

    act(() => {
      setInnerWidth(360);
      window.dispatchEvent(new Event("resize"));
    });
    expect(result.current).toBe(true);
  });
});
