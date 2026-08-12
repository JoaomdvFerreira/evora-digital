import { useEffect, useState } from "react";
import { DataLoadError, type DataProvider, type RecordSummary } from "../dataProvider/types";
import { buildRecordLookup } from "./recordIndex";

export type RecordIndexState =
  | { status: "loading" }
  | { status: "ready"; records: RecordSummary[]; lookup: Map<string, RecordSummary> }
  | { status: "error"; error: DataLoadError };

function asDataLoadError(error: unknown): DataLoadError {
  if (error instanceof DataLoadError) return error;
  return new DataLoadError(`Erro inesperado ao carregar os registos: ${error instanceof Error ? error.message : String(error)}`, "network");
}

/**
 * Loads index.json through the provider exactly once per provider instance
 * (not on every render) and derives the one stable ID -> summary lookup used
 * throughout the Records view. Never loads edges.json or any record-detail
 * file.
 */
export function useRecordIndex(provider: DataProvider): RecordIndexState {
  const [state, setState] = useState<RecordIndexState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    provider.listRecords().then(
      (records) => {
        if (cancelled) return;
        setState({ status: "ready", records, lookup: buildRecordLookup(records) });
      },
      (error: unknown) => {
        if (cancelled) return;
        setState({ status: "error", error: asDataLoadError(error) });
      }
    );
    return () => {
      cancelled = true;
    };
  }, [provider]);

  return state;
}
