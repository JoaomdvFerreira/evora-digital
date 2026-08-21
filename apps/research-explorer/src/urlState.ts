import { ALL_TYPES } from "./records/recordIndex";
import { MIN_DEPTH, clampDepth, type GraphDepth } from "./graph/neighbourhood";

/**
 * Pure URL <-> application-state mapping (RE-02C). Native URLSearchParams
 * only — no React Router: two views and four flat query params don't need
 * path matching/nested routing, and this keeps the base-path portability
 * (ADR-001 D9 follow-on) trivial since nothing here assumes a route prefix.
 *
 * Record-ID safety note: `selectedId` parsed here is NOT validated against
 * the generated index — it is handed to the existing DataProvider path
 * (StaticDataProvider.getRecord -> isSyntacticallySafeId + index-membership
 * check) exactly like any other selection, so a malformed or stale URL
 * degrades to the same "invalid_id"/"not_found" error state a bad click
 * would, never a bypassed fetch. See StaticDataProvider.ts.
 */

export type ExplorerView = "overview" | "records" | "problem" | "graph";
export const DEFAULT_VIEW: ExplorerView = "overview";
export const DEFAULT_GRAPH_DEPTH: GraphDepth = MIN_DEPTH;

export interface ExplorerUrlState {
  view: ExplorerView;
  selectedId: string | null;
  query: string;
  typeFilter: string;
  /** RE-04: hops around the focused record shown in the Graph view (ADR-001 D7). Irrelevant to every other view. */
  graphDepth: GraphDepth;
}

export const DEFAULT_URL_STATE: ExplorerUrlState = {
  view: DEFAULT_VIEW,
  selectedId: null,
  query: "",
  typeFilter: ALL_TYPES,
  graphDepth: DEFAULT_GRAPH_DEPTH,
};

function isExplorerView(value: string | null): value is ExplorerView {
  return value === "overview" || value === "records" || value === "problem" || value === "graph";
}

export function parseUrlState(search: string): ExplorerUrlState {
  const params = new URLSearchParams(search);
  const view = params.get("view");
  const id = params.get("id");
  const depthParam = Number(params.get("d"));
  return {
    view: isExplorerView(view) ? view : DEFAULT_VIEW,
    selectedId: id !== null && id.trim() !== "" ? id : null,
    query: params.get("q") ?? "",
    typeFilter: params.get("type") ?? ALL_TYPES,
    graphDepth: Number.isFinite(depthParam) && depthParam > 0 ? clampDepth(depthParam) : DEFAULT_GRAPH_DEPTH,
  };
}

/** Only non-default values are serialized, so a default state round-trips to "" (bare path). */
export function serializeUrlState(state: ExplorerUrlState): string {
  const params = new URLSearchParams();
  if (state.view !== DEFAULT_VIEW) params.set("view", state.view);
  if (state.selectedId) params.set("id", state.selectedId);
  if (state.query.trim() !== "") params.set("q", state.query);
  if (state.typeFilter !== ALL_TYPES) params.set("type", state.typeFilter);
  if (state.graphDepth !== DEFAULT_GRAPH_DEPTH) params.set("d", String(state.graphDepth));
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
