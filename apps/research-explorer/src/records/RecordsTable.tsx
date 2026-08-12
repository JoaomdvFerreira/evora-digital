import { useEffect, useMemo, useReducer } from "react";
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import type { RecordSummary } from "../dataProvider/types";
import { recordColumns } from "./columns";
import { ALL_TYPES, availableRecordTypes, filterRecords } from "./recordIndex";
import { initialRecordsControllerState, recordsControllerReducer } from "./recordsController";
import { describeType } from "../typeGlossary";

interface RecordsTableProps {
  records: RecordSummary[];
  selectedId: string | null;
  onSelect: (id: string) => void;
  query: string;
  onQueryChange: (query: string) => void;
  typeFilter: string;
  onTypeFilterChange: (typeFilter: string) => void;
}

/**
 * The generic Records table: universal ID/Type/Label/Ficheiro columns only —
 * no SRC-/EVD-/PRB-/ASM-/HYP- specific columns (see columns.ts) — search,
 * type filter, client-side sort/paginate via TanStack Table's own row
 * models. `query`/`typeFilter` are controlled by the caller (URL-synced,
 * RE-02C); sorting/pagination remain locally owned here (recordsController).
 * Filtered/sorted/paginated data is always derived, never stored
 * redundantly.
 */
export function RecordsTable({
  records,
  selectedId,
  onSelect,
  query,
  onQueryChange,
  typeFilter,
  onTypeFilterChange,
}: RecordsTableProps) {
  const [state, dispatch] = useReducer(recordsControllerReducer, initialRecordsControllerState);

  const types = useMemo(() => availableRecordTypes(records), [records]);
  // A type filter value that no longer exists in the loaded data (e.g. a
  // stale/invalid URL) degrades safely to "all", rather than filtering to an
  // empty set or leaving a <select> with no matching option.
  const effectiveTypeFilter = typeFilter === ALL_TYPES || types.includes(typeFilter) ? typeFilter : ALL_TYPES;

  const filtered = useMemo(
    () => filterRecords(records, { query, typeFilter: effectiveTypeFilter }),
    [records, query, effectiveTypeFilter]
  );

  // Query/type-filter changes alter set membership, so the current page
  // position is no longer meaningful.
  useEffect(() => {
    dispatch({ type: "RESET_PAGE" });
  }, [query, effectiveTypeFilter]);

  const table = useReactTable({
    data: filtered,
    columns: recordColumns,
    state: { sorting: state.sorting, pagination: state.pagination },
    onSortingChange: (updater) => {
      const next = typeof updater === "function" ? updater(state.sorting) : updater;
      dispatch({ type: "SET_SORTING", sorting: next });
    },
    onPaginationChange: (updater) => {
      const next = typeof updater === "function" ? updater(state.pagination) : updater;
      dispatch({ type: "SET_PAGE_INDEX", pageIndex: next.pageIndex });
    },
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  return (
    <section aria-labelledby="records-heading" className="records-table">
      <h2 id="records-heading">Registos</h2>

      <div className="records-controls">
        <div>
          <label htmlFor="records-search">Pesquisar</label>
          <input
            id="records-search"
            type="search"
            value={query}
            onChange={(event) => onQueryChange(event.target.value)}
            placeholder="ID, tipo, rótulo…"
          />
        </div>
        <div>
          <label htmlFor="records-type-filter">Tipo</label>
          <select id="records-type-filter" value={effectiveTypeFilter} onChange={(event) => onTypeFilterChange(event.target.value)}>
            <option value={ALL_TYPES}>Todos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type} — {describeType(type).label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <p aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "registo" : "registos"} encontrados.
      </p>

      {filtered.length === 0 ? (
        <p>Nenhum resultado.</p>
      ) : (
        <>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    const sortState = header.column.getIsSorted();
                    return (
                      <th key={header.id} scope="col" aria-sort={sortState === "asc" ? "ascending" : sortState === "desc" ? "descending" : "none"}>
                        <button type="button" onClick={header.column.getToggleSortingHandler()}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {sortState === "asc" ? " ▲" : sortState === "desc" ? " ▼" : ""}
                        </button>
                      </th>
                    );
                  })}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => {
                const isSelected = row.original.id === selectedId;
                return (
                  <tr key={row.id} aria-selected={isSelected}>
                    {row.getVisibleCells().map((cell) => {
                      if (cell.column.id === "id") {
                        return (
                          <td key={cell.id}>
                            <button type="button" aria-pressed={isSelected} onClick={() => onSelect(row.original.id)}>
                              {isSelected ? "● " : ""}
                              {String(cell.getValue())}
                            </button>
                          </td>
                        );
                      }
                      return <td key={cell.id}>{String(cell.getValue())}</td>;
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="records-pagination">
            <button type="button" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
              Anterior
            </button>
            <span aria-live="polite">
              Página {table.getState().pagination.pageIndex + 1} de {Math.max(table.getPageCount(), 1)}
            </span>
            <button type="button" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
              Seguinte
            </button>
          </div>
        </>
      )}
    </section>
  );
}
