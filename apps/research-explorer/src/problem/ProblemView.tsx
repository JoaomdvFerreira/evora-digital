import type { DataProvider, RecordDetail, RecordSummary } from "../dataProvider/types";
import { useRecordIndex } from "../records/useRecordIndex";
import { useProblemProjection } from "./useProblemProjection";
import { RecordFieldTree } from "../records/RecordFieldTree";
import { formatTypedId } from "../typeGlossary";

const ERROR_TITLES: Record<string, string> = {
  missing: "Modelo de leitura gerado não encontrado",
  malformed: "Registo mal formado",
  incompatible: "Versão do modelo de leitura incompatível",
  network: "Falha ao carregar o Problema",
  not_found: "Problema não encontrado",
  invalid_id: "Identificador de Problema inválido",
};

const PROBLEM_STATE_FIELDS = ["status", "validation_status", "evidence_status", "digital_tractability", "existing_solutions"] as const;
const ASSESSMENT_SUMMARY_FIELDS = ["assessment_status", "triage", "structure_action", "digital_leverage"] as const;

function fieldValue(record: Record<string, unknown>, key: string): string | null {
  const value = record[key];
  return typeof value === "string" || typeof value === "number" ? String(value) : null;
}

function TypedLinkButton({ detail, onOpenGeneric, suffix }: { detail: RecordDetail; onOpenGeneric: (id: string) => void; suffix?: string }) {
  return (
    <button type="button" onClick={() => onOpenGeneric(detail.id)}>
      {formatTypedId(detail.type, detail.id)}
      {suffix ? ` — ${suffix}` : ""}
    </button>
  );
}

interface ProblemContentProps {
  dataProvider: DataProvider;
  lookup: Map<string, RecordSummary>;
  problemId: string;
  onOpenGeneric: (id: string) => void;
  onBackToRecords: () => void;
  onViewInGraph: (id: string) => void;
}

function ProblemContent({ dataProvider, lookup, problemId, onOpenGeneric, onBackToRecords, onViewInGraph }: ProblemContentProps) {
  const state = useProblemProjection(dataProvider, lookup, problemId);

  if (state.status === "idle") return null;

  if (state.status === "loading") {
    return (
      <p role="status" aria-live="polite">
        A carregar Problema {state.id}…
      </p>
    );
  }

  if (state.status === "error") {
    return (
      <div role="alert">
        <h2>{ERROR_TITLES[state.error.kind] ?? "Não foi possível carregar o Problema"}</h2>
        <p>{state.error.message}</p>
      </div>
    );
  }

  const { problem, assessments, evidence, hypotheses } = state.projection;
  const record = problem.record as Record<string, unknown>;
  const title = fieldValue(record, "title") ?? problem.id;

  const unknownsSections = assessments
    .map((assessment) => {
      const asmRecord = assessment.record as Record<string, unknown>;
      const picked: Record<string, unknown> = {};
      if (asmRecord.remaining_gap !== undefined) picked.remaining_gap = asmRecord.remaining_gap;
      if (asmRecord.critical_unknowns !== undefined) picked.critical_unknowns = asmRecord.critical_unknowns;
      return Object.keys(picked).length > 0 ? { assessment, picked } : null;
    })
    .filter((x): x is { assessment: RecordDetail; picked: Record<string, unknown> } => x !== null);

  return (
    <article aria-labelledby="problem-heading">
      <p>
        <button type="button" onClick={onBackToRecords}>
          ← Voltar aos Registos
        </button>{" "}
        <button type="button" onClick={() => onViewInGraph(problem.id)}>
          Ver no Grafo
        </button>
      </p>

      <h2 id="problem-heading">{title}</h2>
      <p>
        <code>{problem.id}</code> · <code>{problem.file}</code>
      </p>

      <section aria-label="Estado atual">
        <h3>Estado atual</h3>
        <dl>
          {PROBLEM_STATE_FIELDS.map((key) => {
            const value = fieldValue(record, key);
            return value === null ? null : (
              <div key={key}>
                <dt>{key}</dt>
                <dd>{value}</dd>
              </div>
            );
          })}
        </dl>
        {fieldValue(record, "problem_statement") && <p>{fieldValue(record, "problem_statement")}</p>}
      </section>

      <section aria-label="Avaliação">
        <h3>Avaliação</h3>
        {assessments.length === 0 ? (
          <p>Nenhuma avaliação associada.</p>
        ) : (
          <ul>
            {assessments.map((assessment) => {
              const asmRecord = assessment.record as Record<string, unknown>;
              return (
                <li key={assessment.id}>
                  <TypedLinkButton detail={assessment} onOpenGeneric={onOpenGeneric} />
                  <dl>
                    {ASSESSMENT_SUMMARY_FIELDS.map((key) => {
                      const value = fieldValue(asmRecord, key);
                      return value === null ? null : (
                        <div key={key}>
                          <dt>{key}</dt>
                          <dd>{value}</dd>
                        </div>
                      );
                    })}
                  </dl>
                </li>
              );
            })}
          </ul>
        )}
      </section>

      <section aria-label="Evidência">
        <h3>Evidência ({evidence.length})</h3>
        {evidence.length === 0 ? (
          <p>Nenhuma evidência associada.</p>
        ) : (
          <ul>
            {evidence.map(({ detail, sources }) => (
              <li key={detail.id}>
                <TypedLinkButton
                  detail={detail}
                  onOpenGeneric={onOpenGeneric}
                  suffix={fieldValue(detail.record as Record<string, unknown>, "type") ?? undefined}
                />
                {sources.length > 0 && (
                  <ul>
                    {sources.map((source) => (
                      <li key={source.id}>
                        <TypedLinkButton
                          detail={source}
                          onOpenGeneric={onOpenGeneric}
                          suffix={fieldValue(source.record as Record<string, unknown>, "publisher") ?? undefined}
                        />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <section aria-label="Incertezas e lacunas">
        <h3>Incertezas e lacunas conhecidas</h3>
        {unknownsSections.length === 0 ? (
          <p>Nenhuma registada nas avaliações associadas.</p>
        ) : (
          unknownsSections.map(({ assessment, picked }) => (
            <div key={assessment.id}>
              <h4>{formatTypedId(assessment.type, assessment.id)}</h4>
              <RecordFieldTree data={picked} />
            </div>
          ))
        )}
      </section>

      <section aria-label="Hipóteses">
        <h3>Hipóteses</h3>
        {hypotheses.length === 0 ? (
          <p>Nenhuma hipótese associada.</p>
        ) : (
          <ul>
            {hypotheses.map((hypothesis) => (
              <li key={hypothesis.id}>
                <TypedLinkButton detail={hypothesis} onOpenGeneric={onOpenGeneric} />
              </li>
            ))}
          </ul>
        )}
      </section>
    </article>
  );
}

interface ProblemViewProps {
  dataProvider: DataProvider;
  problemId: string | null;
  onOpenGeneric: (id: string) => void;
  onBackToRecords: () => void;
  onViewInGraph: (id: string) => void;
}

/**
 * The RE-03 specialised Problem view: "what do we currently know about this
 * problem, why do we believe it, and what remains uncertain?" — a
 * presentation projection over the existing generic DataProvider (see
 * problemProjection.ts), not a new persistence model. Any future/unknown
 * record type reached from here (assessment, evidence, source, hypothesis)
 * still opens through the same generic detail renderer via onOpenGeneric.
 */
export function ProblemView({ dataProvider, problemId, onOpenGeneric, onBackToRecords, onViewInGraph }: ProblemViewProps) {
  const indexState = useRecordIndex(dataProvider);

  if (indexState.status === "loading") {
    return (
      <p role="status" aria-live="polite">
        A carregar…
      </p>
    );
  }

  if (indexState.status === "error") {
    return (
      <div role="alert">
        <h2>Não foi possível carregar os registos</h2>
        <p>{indexState.error.message}</p>
      </div>
    );
  }

  if (problemId === null) {
    return (
      <div>
        <p>Nenhum Problema selecionado.</p>
        <button type="button" onClick={onBackToRecords}>
          Procurar um Problema em Registos
        </button>
      </div>
    );
  }

  const summary = indexState.lookup.get(problemId);
  if (summary && summary.type !== "PRB-") {
    return (
      <div role="alert">
        <h2>Este registo não é um Problema</h2>
        <p>{formatTypedId(summary.type, problemId)} não pode ser aberto como vista de Problema.</p>
        <button type="button" onClick={() => onOpenGeneric(problemId)}>
          Ver detalhe genérico
        </button>
      </div>
    );
  }

  return (
    <ProblemContent
      dataProvider={dataProvider}
      lookup={indexState.lookup}
      problemId={problemId}
      onOpenGeneric={onOpenGeneric}
      onBackToRecords={onBackToRecords}
      onViewInGraph={onViewInGraph}
    />
  );
}
