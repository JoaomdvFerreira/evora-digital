import { useEffect, useMemo, useState } from "react";
import { DataLoadError, type DataProvider, type RecordEdge, type RecordSummary } from "../dataProvider/types";
import { buildRecordLookup } from "../records/recordIndex";
import { buildGraphModel, type ResearchGraph } from "./buildGraphModel";

export type GraphDataState =
  | { status: "loading" }
  | { status: "ready"; graph: ResearchGraph; lookup: Map<string, RecordSummary> }
  | { status: "error"; error: DataLoadError };

function asDataLoadError(error: unknown): DataLoadError {
  if (error instanceof DataLoadError) return error;
  return new DataLoadError(`Erro inesperado ao carregar o grafo: ${error instanceof Error ? error.message : String(error)}`, "network");
}

/**
 * Loads what the Graph view needs and nothing more: the record index
 * (already cached if Records/Overview/Problem ran first this session) and,
 * for the first time in the app, `edges.json` — fetched only because this
 * hook is only ever mounted from inside the Graph view (GraphExplorer),
 * never from application startup or any other view (RE-04 requirement).
 */
export function useGraphData(provider: DataProvider): GraphDataState {
  const [indexState, setIndexState] = useState<
    { status: "loading" } | { status: "ready"; records: RecordSummary[] } | { status: "error"; error: DataLoadError }
  >({ status: "loading" });
  const [edgesState, setEdgesState] = useState<
    { status: "loading" } | { status: "ready"; edges: RecordEdge[] } | { status: "error"; error: DataLoadError }
  >({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setIndexState({ status: "loading" });
    provider.listRecords().then(
      (records) => {
        if (!cancelled) setIndexState({ status: "ready", records });
      },
      (error: unknown) => {
        if (!cancelled) setIndexState({ status: "error", error: asDataLoadError(error) });
      }
    );
    return () => {
      cancelled = true;
    };
  }, [provider]);

  useEffect(() => {
    let cancelled = false;
    setEdgesState({ status: "loading" });
    provider.getEdges().then(
      (edges) => {
        if (!cancelled) setEdgesState({ status: "ready", edges });
      },
      (error: unknown) => {
        if (!cancelled) setEdgesState({ status: "error", error: asDataLoadError(error) });
      }
    );
    return () => {
      cancelled = true;
    };
  }, [provider]);

  return useMemo<GraphDataState>(() => {
    if (indexState.status === "error") return { status: "error", error: indexState.error };
    if (edgesState.status === "error") return { status: "error", error: edgesState.error };
    if (indexState.status === "loading" || edgesState.status === "loading") return { status: "loading" };
    return {
      status: "ready",
      graph: buildGraphModel(indexState.records, edgesState.edges),
      lookup: buildRecordLookup(indexState.records),
    };
  }, [indexState, edgesState]);
}
