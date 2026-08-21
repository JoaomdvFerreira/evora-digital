import type { DataProvider } from "../dataProvider/types";
import { useRecordIndex } from "../records/useRecordIndex";
import { computeOverviewStats } from "./overviewStats";
import { formatPublicCount, publicEnumLabel, publicFieldCaption } from "../presentation";

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
export function Overview({ dataProvider }: { dataProvider: DataProvider }) {
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

  const stats = computeOverviewStats(indexState.records);

  return (
    <section aria-labelledby="overview-heading">
      <h2 id="overview-heading">Visão geral</h2>
      <p>{formatPublicCount(stats.totalRecords)} registos no total.</p>

      <h3>Registos por tipo</h3>
      <table>
        <thead>
          <tr>
            <th scope="col">Tipo</th>
            <th scope="col">Registos</th>
          </tr>
        </thead>
        <tbody>
          {stats.countsByType.map((row) => (
            <tr key={row.type}>
              <td>{row.type}</td>
              <td>{row.count}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {stats.distributions.length > 0 && (
        <>
          <h3>Distribuições</h3>
          {stats.distributions.map((dist) => (
            <div key={`${dist.type}-${dist.field}`}>
              <h4>
                {dist.type} — {publicFieldCaption(dist.field)}
              </h4>
              <table>
                <thead>
                  <tr>
                    <th scope="col">Valor</th>
                    <th scope="col">Registos</th>
                  </tr>
                </thead>
                <tbody>
                  {dist.values.map((v) => (
                    <tr key={v.value}>
                      <td>{publicEnumLabel(dist.field, v.value)}</td>
                      <td>{formatPublicCount(v.count)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </>
      )}
    </section>
  );
}
