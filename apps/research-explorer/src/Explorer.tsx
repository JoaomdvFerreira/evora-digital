import type { DataProvider } from "./dataProvider/types";
import { useExplorerUrlState } from "./useExplorerUrlState";
import { Overview } from "./overview/Overview";
import { RecordsExplorer } from "./records/RecordsExplorer";
import { ProblemView } from "./problem/ProblemView";
import { ReadingGuide } from "./guide/ReadingGuide";

interface ExplorerProps {
  dataProvider: DataProvider;
  /** manifest.schemaPrefixes — passed down so the reading guide's type list is data-driven, not hardcoded. */
  schemaPrefixes?: string[];
}

/**
 * Top-level view switcher (RE-02C: Overview/Registos; RE-03 adds Problema).
 * Owns URL-synced state (view, selected record, search query, type filter)
 * via useExplorerUrlState and passes it down as controlled props —
 * Overview/RecordsExplorer/ProblemView own no competing copy of this state.
 */
export function Explorer({ dataProvider, schemaPrefixes }: ExplorerProps) {
  const url = useExplorerUrlState();

  return (
    <>
      <nav aria-label="Vistas do Explorer">
        <button type="button" aria-current={url.state.view === "overview" ? "page" : undefined} onClick={() => url.setView("overview")}>
          Visão geral
        </button>
        <button type="button" aria-current={url.state.view === "records" ? "page" : undefined} onClick={() => url.setView("records")}>
          Registos
        </button>
      </nav>

      <ReadingGuide schemaPrefixes={schemaPrefixes} />

      {url.state.view === "overview" && <Overview dataProvider={dataProvider} />}

      {url.state.view === "records" && (
        <RecordsExplorer
          dataProvider={dataProvider}
          selectedId={url.state.selectedId}
          onSelect={url.setSelectedId}
          query={url.state.query}
          onQueryChange={url.setQuery}
          typeFilter={url.state.typeFilter}
          onTypeFilterChange={url.setTypeFilter}
          onViewAsProblem={(id) => url.setViewAndSelection("problem", id)}
        />
      )}

      {url.state.view === "problem" && (
        <ProblemView
          dataProvider={dataProvider}
          problemId={url.state.selectedId}
          onOpenGeneric={(id) => url.setViewAndSelection("records", id)}
          onBackToRecords={() => url.setView("records")}
        />
      )}
    </>
  );
}
