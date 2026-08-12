import { useState } from "react";
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

/**
 * The RE-02B primary workflow: Registos (search/select) -> lazy-loaded
 * generic detail -> relationships -> navigation to a related record — all
 * through the DataProvider boundary, split-view (table + persistent detail
 * panel), no modal.
 */
export function RecordsExplorer({ dataProvider }: { dataProvider: DataProvider }) {
  const indexState = useRecordIndex(dataProvider);
  const [selectedId, setSelectedId] = useState<string | null>(null);

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
      <RecordsTable records={indexState.records} selectedId={selectedId} onSelect={setSelectedId} />
      <RecordDetailPanel dataProvider={dataProvider} lookup={indexState.lookup} selectedId={selectedId} onSelect={setSelectedId} />
    </div>
  );
}
