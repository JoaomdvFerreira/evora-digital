import type { DataProvider } from "./dataProvider/types";
import { useExplorerUrlState } from "./useExplorerUrlState";
import { Overview } from "./overview/Overview";
import { RecordsExplorer } from "./records/RecordsExplorer";

/**
 * Top-level view switcher (RE-02C). Owns URL-synced state (view, selected
 * record, search query, type filter) via useExplorerUrlState and passes it
 * down as controlled props — Overview/RecordsExplorer/RecordsTable/
 * RecordDetailPanel own no competing copy of this state.
 */
export function Explorer({ dataProvider }: { dataProvider: DataProvider }) {
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
        />
      )}
    </>
  );
}
