import { useEffect, useState } from "react";
import { DataLoadError, type DataProvider, type RecordDetail } from "../dataProvider/types";

export type RecordDetailState =
  | { status: "idle" }
  | { status: "loading"; id: string }
  | { status: "ready"; detail: RecordDetail }
  | { status: "error"; id: string; error: DataLoadError };

function asDataLoadError(error: unknown): DataLoadError {
  if (error instanceof DataLoadError) return error;
  return new DataLoadError(`Erro inesperado ao carregar o registo: ${error instanceof Error ? error.message : String(error)}`, "network");
}

/**
 * Lazy-loads exactly one record detail through the provider whenever
 * `selectedId` changes — never eagerly, never for every table row. A
 * failure here is fully isolated from the already-loaded Records index: it
 * only ever affects this hook's own state, not useRecordIndex's.
 */
export function useRecordDetail(provider: DataProvider, selectedId: string | null): RecordDetailState {
  const [state, setState] = useState<RecordDetailState>({ status: "idle" });

  useEffect(() => {
    if (selectedId === null) {
      setState({ status: "idle" });
      return;
    }
    let cancelled = false;
    setState({ status: "loading", id: selectedId });
    provider.getRecord(selectedId).then(
      (detail) => {
        if (!cancelled) setState({ status: "ready", detail });
      },
      (error: unknown) => {
        if (!cancelled) setState({ status: "error", id: selectedId, error: asDataLoadError(error) });
      }
    );
    return () => {
      cancelled = true;
    };
  }, [provider, selectedId]);

  return state;
}
