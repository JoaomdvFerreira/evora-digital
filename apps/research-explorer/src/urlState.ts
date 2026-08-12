import { ALL_TYPES } from "./records/recordIndex";

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

export type ExplorerView = "overview" | "records" | "problem";
export const DEFAULT_VIEW: ExplorerView = "records";

export interface ExplorerUrlState {
  view: ExplorerView;
  selectedId: string | null;
  query: string;
  typeFilter: string;
}

export const DEFAULT_URL_STATE: ExplorerUrlState = {
  view: DEFAULT_VIEW,
  selectedId: null,
  query: "",
  typeFilter: ALL_TYPES,
};

function isExplorerView(value: string | null): value is ExplorerView {
  return value === "overview" || value === "records" || value === "problem";
}

export function parseUrlState(search: string): ExplorerUrlState {
  const params = new URLSearchParams(search);
  const view = params.get("view");
  const id = params.get("id");
  return {
    view: isExplorerView(view) ? view : DEFAULT_VIEW,
    selectedId: id !== null && id.trim() !== "" ? id : null,
    query: params.get("q") ?? "",
    typeFilter: params.get("type") ?? ALL_TYPES,
  };
}

/** Only non-default values are serialized, so a default state round-trips to "" (bare path). */
export function serializeUrlState(state: ExplorerUrlState): string {
  const params = new URLSearchParams();
  if (state.view !== DEFAULT_VIEW) params.set("view", state.view);
  if (state.selectedId) params.set("id", state.selectedId);
  if (state.query.trim() !== "") params.set("q", state.query);
  if (state.typeFilter !== ALL_TYPES) params.set("type", state.typeFilter);
  const qs = params.toString();
  return qs ? `?${qs}` : "";
}
