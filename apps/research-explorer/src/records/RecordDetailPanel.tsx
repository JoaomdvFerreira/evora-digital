import { useEffect, useRef } from "react";
import type { DataProvider, RecordDetail, RecordEdgeRef, RecordSummary } from "../dataProvider/types";
import { useRecordDetail } from "./useRecordDetail";
import { RecordFieldTree } from "./RecordFieldTree";
import { describeType, formatTypedId } from "../typeGlossary";

const ERROR_TITLES: Record<string, string> = {
  missing: "Modelo de leitura gerado não encontrado",
  malformed: "Registo mal formado",
  incompatible: "Versão do modelo de leitura incompatível",
  network: "Falha ao carregar o registo",
  not_found: "Registo desconhecido",
  invalid_id: "Identificador de registo inválido",
};

interface RelationshipListProps {
  title: string;
  edges: RecordEdgeRef[];
  lookup: Map<string, RecordSummary>;
  direction: "incoming" | "outgoing";
  onSelect: (id: string) => void;
}

function RelationshipList({ title, edges, lookup, direction, onSelect }: RelationshipListProps) {
  return (
    <section aria-label={title}>
      <h4>{title}</h4>
      {edges.length === 0 ? (
        <p>Nenhuma.</p>
      ) : (
        <ul>
          {edges.map((edge, index) => {
            const relatedId = direction === "outgoing" ? edge.to! : edge.from!;
            const related = lookup.get(relatedId);
            const arrow = direction === "outgoing" ? "→" : "←";
            const relation = direction === "outgoing" ? "referencia via" : "referenciado via";
            const ordinalSuffix = edge.ordinal !== null ? `[${edge.ordinal}]` : "";
            return (
              <li key={`${direction}-${edge.field}-${edge.ordinal}-${relatedId}-${index}`}>
                <button type="button" onClick={() => onSelect(relatedId)}>
                  {arrow} {related ? `${formatTypedId(related.type, related.id)} — ${related.label}` : relatedId}
                </button>{" "}
                <span>
                  — {relation} <code>{edge.field}</code>
                  {ordinalSuffix}
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}

function RecordDetailContent({
  detail,
  lookup,
  onSelect,
  onViewAsProblem,
  onViewInGraph,
}: {
  detail: RecordDetail;
  lookup: Map<string, RecordSummary>;
  onSelect: (id: string) => void;
  onViewAsProblem: (id: string) => void;
  onViewInGraph: (id: string) => void;
}) {
  return (
    <>
      <section aria-label="Identidade">
        <dl>
          <dt>ID</dt>
          <dd>{detail.id}</dd>
          <dt>Tipo</dt>
          <dd>
            <code>{detail.type}</code> — {describeType(detail.type).label}
          </dd>
          <dt>Ficheiro</dt>
          <dd>
            <code>{detail.file}</code>
          </dd>
        </dl>
        <p>
          {detail.type === "PRB-" && (
            <>
              <button type="button" onClick={() => onViewAsProblem(detail.id)}>
                Ver como Problema (contexto completo)
              </button>{" "}
            </>
          )}
          <button type="button" onClick={() => onViewInGraph(detail.id)}>
            Ver no Grafo
          </button>
        </p>
      </section>

      <section aria-label="Campos do registo">
        <h3>Campos</h3>
        <RecordFieldTree data={detail.record} />
      </section>

      <section aria-label="Relações">
        <h3>Relações</h3>
        <RelationshipList title="Entradas" edges={detail.incomingEdges} lookup={lookup} direction="incoming" onSelect={onSelect} />
        <RelationshipList title="Saídas" edges={detail.outgoingEdges} lookup={lookup} direction="outgoing" onSelect={onSelect} />
      </section>
    </>
  );
}

interface RecordDetailPanelProps {
  dataProvider: DataProvider;
  lookup: Map<string, RecordSummary>;
  selectedId: string | null;
  onSelect: (id: string) => void;
  onViewAsProblem: (id: string) => void;
  onViewInGraph: (id: string) => void;
}

/**
 * A failure loading one record's detail is isolated here (useRecordDetail's
 * own state) and never affects the already-loaded Records table/index.
 */
export function RecordDetailPanel({ dataProvider, lookup, selectedId, onSelect, onViewAsProblem, onViewInGraph }: RecordDetailPanelProps) {
  const state = useRecordDetail(dataProvider, selectedId);
  const contentRef = useRef<HTMLDivElement>(null);
  const readyId = state.status === "ready" ? state.detail.id : null;

  // Move focus onto the freshly-loaded detail content whenever the selected
  // record actually changes (table-row click, relationship navigation, or a
  // URL/back-forward-driven selection) — so keyboard/AT users land on the
  // new content instead of it silently appearing off-screen from their
  // current focus position.
  useEffect(() => {
    if (readyId !== null) {
      contentRef.current?.focus();
    }
  }, [readyId]);

  return (
    <section aria-labelledby="detail-heading" className="record-detail-panel">
      <h2 id="detail-heading">Detalhes</h2>

      {selectedId === null && <p>Nenhum registo selecionado.</p>}

      {state.status === "loading" && (
        <p role="status" aria-live="polite">
          A carregar detalhes de {state.id}…
        </p>
      )}

      {state.status === "error" && (
        <div role="alert">
          <h3>{ERROR_TITLES[state.error.kind] ?? "Não foi possível carregar o registo"}</h3>
          <p>{state.error.message}</p>
        </div>
      )}

      {state.status === "ready" && (
        <div ref={contentRef} tabIndex={-1} aria-label={`Detalhe de ${state.detail.id}`}>
          <RecordDetailContent
            detail={state.detail}
            lookup={lookup}
            onSelect={onSelect}
            onViewAsProblem={onViewAsProblem}
            onViewInGraph={onViewInGraph}
          />
        </div>
      )}
    </section>
  );
}
