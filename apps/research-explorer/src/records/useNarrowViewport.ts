import { useEffect, useState } from "react";

/**
 * The single existing narrow breakpoint (index.css's `@media (max-width:
 * 767px)`, already used for `.records-explorer`/`.record-detail-panel`
 * stacking) — reused here, not a new value, so a JS-driven presentation
 * switch (RecordsTable needs an actually different DOM structure, not just
 * CSS reflow, for its narrow row list) still tracks the one breakpoint the
 * rest of the app already uses. Canonical per design-system.md §1: compact
 * <=767px, desktop >=768px.
 */
export const NARROW_BREAKPOINT_PX = 767;

function computeIsNarrow(): boolean {
  return typeof window !== "undefined" && window.innerWidth <= NARROW_BREAKPOINT_PX;
}

/**
 * Tracks whether the viewport is at/below the existing narrow breakpoint.
 * Deliberately minimal — one value, one resize listener, no generalized
 * responsive framework — scoped to RecordsTable's one genuine need for a
 * JS-level presentation switch (a card/list row structure is not something
 * CSS alone can turn a `<table>` into).
 */
export function useNarrowViewport(): boolean {
  const [isNarrow, setIsNarrow] = useState(computeIsNarrow);

  useEffect(() => {
    const onResize = () => setIsNarrow(computeIsNarrow());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return isNarrow;
}
