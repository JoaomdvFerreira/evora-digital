import type { PaginationState, SortingState } from "@tanstack/table-core";
import { ALL_TYPES } from "./recordIndex";

export const DEFAULT_PAGE_SIZE = 25;

/**
 * The only "source" state RE-02B owns for the Records view — query, type
 * filter, sorting, and pagination. Filtered/sorted/paginated *data* is
 * always derived (recordIndex.filterRecords + TanStack's own row models),
 * never stored redundantly alongside this.
 */
export interface RecordsControllerState {
  query: string;
  typeFilter: string;
  sorting: SortingState;
  pagination: PaginationState;
}

export type RecordsControllerAction =
  | { type: "SET_QUERY"; query: string }
  | { type: "SET_TYPE_FILTER"; typeFilter: string }
  | { type: "SET_SORTING"; sorting: SortingState }
  | { type: "SET_PAGE_INDEX"; pageIndex: number };

export const initialRecordsControllerState: RecordsControllerState = {
  query: "",
  typeFilter: ALL_TYPES,
  sorting: [],
  pagination: { pageIndex: 0, pageSize: DEFAULT_PAGE_SIZE },
};

/**
 * A query or type-filter change alters set membership, so the current page
 * position is no longer meaningful — reset to the first page. Sorting only
 * reorders the existing result set, so it never needs a page reset.
 */
export function recordsControllerReducer(
  state: RecordsControllerState,
  action: RecordsControllerAction
): RecordsControllerState {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.query, pagination: { ...state.pagination, pageIndex: 0 } };
    case "SET_TYPE_FILTER":
      return { ...state, typeFilter: action.typeFilter, pagination: { ...state.pagination, pageIndex: 0 } };
    case "SET_SORTING":
      return { ...state, sorting: action.sorting };
    case "SET_PAGE_INDEX":
      return { ...state, pagination: { ...state.pagination, pageIndex: action.pageIndex } };
    default:
      return state;
  }
}
