import { useEffect, useRef } from "react";
import type { DataProvider, RecordDetail, RecordEdgeRef, RecordSummary } from "../dataProvider/types";
import { useRecordDetail } from "./useRecordDetail";
import { RecordFieldTree } from "./RecordFieldTree";
import { describeType, formatTypedId } from "../typeGlossary";
import { findMeaningField } from "./meaningField";

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

/**
 * The only edge field names any current schema declares specifically to
 * relate a record to the Problem it is about (research/schemas/{evidence,
 * assessment,hypothesis}.schema.json's own `references` entries — each
 * declares `targetPrefix: "PRB-"` for exactly this field). Deliberately an
 * explicit allowlist, not a suffix/regex heuristic: an edge whose field is
 * *not* one of these never counts, even if it happens to resolve to a PRB-
 * record for some unrelated reason.
 */
const PROBLEM_REFERENCE_FIELDS = ["problem", "analysis.related_problems"];

/**
 * Finds a related Problem to offer a "Ver como Problema" action for — but
 * only via one of `PROBLEM_REFERENCE_FIELDS`, never merely because *some*
 * incoming/outgoing edge happens to resolve to a PRB- record. Generic
 * graph connectivity is not semantic equivalence: a reference is "record A
 * points to record B via field F," nothing more (development-contract
 * invariant 8), so this must not imply a Problem is another representation
 * of, say, an Evidence record just because an edge connects them. Records
 * that are themselves PRB- already get their own self action (see
 * `RecordDetailContent`) so are excluded here to avoid a redundant second
 * button.
 */
function findRelatedProblemId(detail: RecordDetail, lookup: Map<string, RecordSummary>): string | null {
  if (detail.type === "PRB-") return null;
  const candidateIds = [
    ...detail.outgoingEdges.filter((edge) => PROBLEM_REFERENCE_FIELDS.includes(edge.field)).map((edge) => edge.to!),
    ...detail.incomingEdges.filter((edge) => PROBLEM_REFERENCE_FIELDS.includes(edge.field)).map((edge) => edge.from!),
  ];
  for (const id of candidateIds) {
    if (lookup.get(id)?.type === "PRB-") return id;
  }
  return null;
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
  const meaning = findMeaningField(detail.record);
  const typeInfo = describeType(detail.type);
  const relatedProblemId = findRelatedProblemId(detail, lookup);
  // Already-explicit, schema-driven classification/status fields (RE-01's
  // `buildSummaryFields()` — every enum-constrained field the record's own
  // schema declares), reused here rather than singling out any one
  // record-type-specific field (e.g. `analysis.contribution`) for special
  // presentation.
  const roleFields = Object.entries(lookup.get(detail.id)?.summaryFields ?? {});

  return (
    <>
      <section aria-label="Significado" className="record-meaning-zone">
        <p className="record-type-context">
          <code>{detail.type}</code> {typeInfo.label}
        </p>
        {meaning ? (
          <p className="record-meaning">{meaning.value}</p>
        ) : (
          <p className="record-meaning field-empty">{detail.id} — sem campo de significado canónico identificado para este tipo de registo.</p>
        )}
        {roleFields.length > 0 && (
          <p className="record-role-fields">
            {roleFields.map(([field, value]) => (
              <span key={field} className="record-role-chip">
                <code>{field}</code>: {String(value)}
              </span>
            ))}
          </p>
        )}
      </section>

      <section aria-label="Proveniência" className="record-provenance">
        <h3>Proveniência</h3>
        <dl>
          <dt>ID</dt>
          <dd>{detail.id}</dd>
          <dt>Ficheiro</dt>
          <dd>
            <code>{detail.file}</code>
          </dd>
          <dt>Relações</dt>
          <dd>
            referenciado por {detail.incomingEdges.length} registo(s) · referencia {detail.outgoingEdges.length} registo(s) —{" "}
            <a href="#relacoes">ver caminhos exatos ↓</a>
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
          {relatedProblemId && (
            <>
              <button type="button" onClick={() => onViewAsProblem(relatedProblemId)}>
                Ver como Problema ({relatedProblemId})
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
        <details className="technical-disclosure">
          <summary>Inspeção técnica completa — todos os campos canónicos</summary>
          <RecordFieldTree data={detail.record} />
        </details>
      </section>

      <section aria-label="Relações" id="relacoes">
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
          <button type="button" onClick={state.retry}>
            Tentar novamente
          </button>
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
