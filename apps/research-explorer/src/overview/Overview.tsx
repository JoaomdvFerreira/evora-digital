import type { DataProvider } from "../dataProvider/types";
import { useRecordIndex } from "../records/useRecordIndex";
import { computePublicOverviewData, formatEvidenceCount, formatProblemCount } from "./overviewStats";
import { formatPublicCount, publicEnumLabel } from "../presentation";

const ERROR_TITLES: Record<string, string> = {
  missing: "Modelo de leitura gerado não encontrado",
  malformed: "Índice de registos mal formado",
  incompatible: "Versão do modelo de leitura incompatível",
  network: "Falha ao carregar a visão geral",
};

/**
 * Lightweight corpus-orientation view built only from the already-loaded
 * index.json (via the same DataProvider.listRecords(), cached — this does
 * not trigger a second network fetch alongside Records). No charting
 * dependency; plain counts/tables only.
 */
export function Overview({ dataProvider, onExploreProblem }: { dataProvider: DataProvider; onExploreProblem: (id: string) => void }) {
  const indexState = useRecordIndex(dataProvider);

  if (indexState.status === "loading") {
    return (
      <p role="status" aria-live="polite">
        A carregar visão geral…
      </p>
    );
  }

  if (indexState.status === "error") {
    return (
      <div role="alert">
        <h2>{ERROR_TITLES[indexState.error.kind] ?? "Não foi possível carregar a visão geral"}</h2>
        <p>{indexState.error.message}</p>
      </div>
    );
  }

  const overview = computePublicOverviewData(indexState.records);
  const unvalidatedLabel = publicEnumLabel("validation_status", "unvalidated");
  const corroboratedLabel = publicEnumLabel("evidence_status", "corroborated");

  return (
    <section aria-labelledby="overview-heading" className="public-overview">
      <h2 id="overview-heading">Visão geral</h2>
      <p className="overview-introduction">Open Évora é um projeto de investigação cívica independente sobre problemas práticos que afetam Évora e onde podem existir oportunidades de intervenção úteis.</p>
      <p>Este Explorador de Investigação dá acesso público às evidências, avaliações e incertezas que sustentam essa investigação.</p>

      <p className="overview-independence"><strong>Projeto independente.</strong> Não representa a Câmara Municipal de Évora nem qualquer entidade oficial; não é um serviço ou plataforma municipal oficial.</p>
      <p><a href="#overview-problemas">Explorar problemas ↓</a></p>

      <section className="overview-concepts" aria-label="O que contém o Explorador">
        <div>
          <h3>Problemas</h3>
          <p>Fricções cívicas identificadas a partir de evidência — com o que já se sabe e o que ainda não se sabe.</p>
        </div>
        <div>
          <h3>Evidência</h3>
          <p>Registos individuais — institucionais, públicos, comunitários e de intervenientes — que sustentam, contestam ou atualizam cada leitura.</p>
        </div>
        <div>
          <h3>Proveniência e incerteza</h3>
          <p>Cada registo mantém a sua origem. O que ainda não sabemos é registado explicitamente, não escondido.</p>
        </div>
      </section>

      <p className="overview-trust"><strong>Base explícita.</strong> Cada leitura remete para registos identificáveis e para a evidência que a sustenta, refina, contesta ou atualiza. A proveniência é preservada e rastreável, sem implicar que toda a evidência tenha a mesma força.</p>

      <details className="overview-status-explanation">
        <summary>Os problemas abaixo estão confirmados? O que significam os estados?</summary>
        <p>Nenhum problema listado é uma conclusão fechada. <strong>{unvalidatedLabel}</strong> significa que a validação formal ainda está pendente — não que o problema seja falso. <strong>{corroboratedLabel}</strong> descreve o estado atual da evidência reunida; não torna o problema uma conclusão encerrada. A ordem abaixo não é uma classificação.</p>
      </details>

      <section id="overview-problemas" aria-labelledby="overview-problemas-heading">
        <div className="overview-problems-heading">
          <h3 id="overview-problemas-heading">Problemas em investigação ({formatPublicCount(overview.problemCount)})</h3>
          <p>ordenados por identificador, não por relevância</p>
        </div>
        <ul className="overview-problem-list">
          {overview.problems.map((problem) => (
            <li key={problem.id}>
              <div>
                <code>{problem.id}</code>
                <h4>{problem.title}</h4>
              </div>
              <div className="overview-problem-action">
                <p className="overview-statuses">
                  {problem.validationStatus !== null && <span>Estado de validação: {publicEnumLabel("validation_status", problem.validationStatus)}</span>}
                  {problem.evidenceStatus !== null && <span>Estado da evidência: {publicEnumLabel("evidence_status", problem.evidenceStatus)}</span>}
                </p>
                <button type="button" onClick={() => onExploreProblem(problem.id)}>Explorar</button>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <p className="overview-corpus-context">{formatProblemCount(overview.problemCount)} · {formatEvidenceCount(overview.evidenceCount)} · investigação em atualização contínua</p>
    </section>
  );
}
