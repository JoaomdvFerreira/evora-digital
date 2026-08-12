import type { DataProvider } from "../dataProvider/types";
import { useRecordIndex } from "./useRecordIndex";
import { RecordsTable } from "./RecordsTable";
import { RecordDetailPanel } from "./RecordDetailPanel";

const ERROR_TITLES: Record<string, string> = {
  missing: "Modelo de leitura gerado não encontrado",
  malformed: "Índice de registos mal formado",
  incompatible: "Versão do modelo de leitura incompatível",
  network: "Falha ao carregar os registos",
};

interface RecordsExplorerProps {
  dataProvider: DataProvider;
  selectedId: string | null;
  onSelect: (id: string) => void;
  query: string;
  onQueryChange: (query: string) => void;
  typeFilter: string;
  onTypeFilterChange: (typeFilter: string) => void;
}

/**
 * The RE-02B/RE-02C primary workflow: Registos (search/select, URL-synced)
 * -> lazy-loaded generic detail -> relationships -> navigation to a related
 * record — all through the DataProvider boundary, split-view (table +
 * persistent detail panel), no modal. Selection/query/type-filter are
 * controlled by the caller (useExplorerUrlState) so they are bookmarkable.
 */
export function RecordsExplorer({
  dataProvider,
  selectedId,
  onSelect,
  query,
  onQueryChange,
  typeFilter,
  onTypeFilterChange,
}: RecordsExplorerProps) {
  const indexState = useRecordIndex(dataProvider);

  if (indexState.status === "loading") {
    return (
      <p role="status" aria-live="polite">
        A carregar registos…
      </p>
    );
  }

  if (indexState.status === "error") {
    return (
      <div role="alert">
        <h2>{ERROR_TITLES[indexState.error.kind] ?? "Não foi possível carregar os registos"}</h2>
        <p>{indexState.error.message}</p>
      </div>
    );
  }

  return (
    <div className="records-explorer">
      <RecordsTable
        records={indexState.records}
        selectedId={selectedId}
        onSelect={onSelect}
        query={query}
        onQueryChange={onQueryChange}
        typeFilter={typeFilter}
        onTypeFilterChange={onTypeFilterChange}
      />
      <RecordDetailPanel dataProvider={dataProvider} lookup={indexState.lookup} selectedId={selectedId} onSelect={onSelect} />
    </div>
  );
}
