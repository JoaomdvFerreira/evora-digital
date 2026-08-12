import { useMemo, useReducer } from "react";
import { flexRender, getCoreRowModel, getPaginationRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import type { RecordSummary } from "../dataProvider/types";
import { recordColumns } from "./columns";
import { ALL_TYPES, availableRecordTypes, filterRecords } from "./recordIndex";
import { initialRecordsControllerState, recordsControllerReducer } from "./recordsController";

interface RecordsTableProps {
  records: RecordSummary[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

/**
 * The generic Records table: universal ID/Type/Label/Ficheiro columns only —
 * no SRC-/EVD-/PRB-/ASM-/HYP- specific columns (see columns.ts) — search,
 * type filter, client-side sort/paginate via TanStack Table's own row
 * models. Owns only source state (query, typeFilter, sorting, pagination —
 * via recordsControllerReducer); filtered/sorted/paginated data is always
 * derived, never stored redundantly.
 */
export function RecordsTable({ records, selectedId, onSelect }: RecordsTableProps) {
  const [state, dispatch] = useReducer(recordsControllerReducer, initialRecordsControllerState);

  const types = useMemo(() => availableRecordTypes(records), [records]);
  const filtered = useMemo(
    () => filterRecords(records, { query: state.query, typeFilter: state.typeFilter }),
    [records, state.query, state.typeFilter]
  );

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
            value={state.query}
            onChange={(event) => dispatch({ type: "SET_QUERY", query: event.target.value })}
            placeholder="ID, tipo, rótulo…"
          />
        </div>
        <div>
          <label htmlFor="records-type-filter">Tipo</label>
          <select
            id="records-type-filter"
            value={state.typeFilter}
            onChange={(event) => dispatch({ type: "SET_TYPE_FILTER", typeFilter: event.target.value })}
          >
            <option value={ALL_TYPES}>Todos</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
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
            <span>
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
