import { useEffect, useState } from "react";
import type { DataProvider, ReadModelManifest } from "./dataProvider/types";
import { StaticDataProvider } from "./dataProvider/StaticDataProvider";
import { loadExplorerStartupState, type ExplorerStartupState } from "./startup";

const defaultProvider: DataProvider = new StaticDataProvider();

const ERROR_TITLES: Record<string, string> = {
  missing: "Generated read model not found",
  malformed: "Generated read model is malformed",
  incompatible: "Generated read model version is incompatible",
  network: "Could not load the generated read model",
  not_found: "Record not found",
  invalid_id: "Invalid record ID",
};

interface AppProps {
  dataProvider?: DataProvider;
}

export function App({ dataProvider = defaultProvider }: AppProps) {
  const [state, setState] = useState<ExplorerStartupState | { status: "loading" }>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    setState({ status: "loading" });
    loadExplorerStartupState(dataProvider).then((result) => {
      if (!cancelled) setState(result);
    });
    return () => {
      cancelled = true;
    };
  }, [dataProvider]);

  return (
    <main>
      <h1>Open Évora Research Explorer</h1>
      {state.status === "loading" && (
        <p role="status" aria-live="polite">
          Loading generated read model…
        </p>
      )}
      {state.status === "error" && (
        <div role="alert">
          <h2>{ERROR_TITLES[state.error.kind] ?? "Could not load the Explorer"}</h2>
          <p>{state.error.message}</p>
        </div>
      )}
      {state.status === "ready" && <ReadyPanel manifest={state.manifest} />}
    </main>
  );
}

function ReadyPanel({ manifest }: { manifest: ReadModelManifest }) {
  return (
    <section aria-labelledby="read-model-status-heading">
      <h2 id="read-model-status-heading">Read model loaded</h2>
      <dl>
        <dt>Read model version</dt>
        <dd>{manifest.readModelVersion}</dd>

        <dt>Generated at</dt>
        <dd>
          <time dateTime={manifest.generatedAt}>{manifest.generatedAt}</time>
        </dd>

        <dt>Corpus fingerprint</dt>
        <dd>
          <code>{manifest.corpusFingerprint}</code>
        </dd>

        <dt>Source revision</dt>
        <dd>{manifest.sourceCommit ? <code>{manifest.sourceCommit}</code> : "(unavailable)"}</dd>

        <dt>Total records</dt>
        <dd>{manifest.totalRecords}</dd>
      </dl>

      <h3>Record counts by type</h3>
      <ul>
        {manifest.schemaPrefixes.map((prefix) => (
          <li key={prefix}>
            {prefix} {manifest.counts[prefix] ?? 0}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default App;
