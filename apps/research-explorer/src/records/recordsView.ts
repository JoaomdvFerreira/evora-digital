import {
  createTable,
  getCoreRowModel,
  getSortedRowModel,
  getPaginationRowModel,
  type SortingState,
  type PaginationState,
  type TableOptionsResolved,
} from "@tanstack/table-core";
import type { RecordSummary } from "../dataProvider/types";
import { recordColumns } from "./columns";
import { filterRecords, type RecordsFilterState } from "./recordIndex";

export interface RecordsViewInput extends RecordsFilterState {
  records: RecordSummary[];
  sorting: SortingState;
  pagination: PaginationState;
}

export interface RecordsViewResult {
  /** The current page's rows, in final sorted order. */
  rows: RecordSummary[];
  pageCount: number;
  /** Count after search/type filtering, before pagination. */
  filteredCount: number;
}

/**
 * Pure, framework-agnostic computation of "what should the Records table
 * show right now" — search/type filtering (recordIndex.ts) followed by
 * TanStack Table's own real sorting + pagination row models (not a
 * hand-rolled reimplementation), built on @tanstack/table-core directly so
 * this is testable without React or a DOM. RecordsTable.tsx uses
 * @tanstack/react-table's useReactTable, which wraps the exact same engine,
 * for the interactive version of this same computation.
 */
export function computeRecordsView(input: RecordsViewInput): RecordsViewResult {
  const filtered = filterRecords(input.records, input);

  const options: TableOptionsResolved<RecordSummary> = {
    data: filtered,
    columns: recordColumns,
    state: { sorting: input.sorting, pagination: input.pagination },
    onStateChange: () => {},
    renderFallbackValue: null,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  };

  const table = createTable(options);
  const rows = table.getRowModel().rows.map((row) => row.original);

  return {
    rows,
    pageCount: table.getPageCount(),
    filteredCount: filtered.length,
  };
}
