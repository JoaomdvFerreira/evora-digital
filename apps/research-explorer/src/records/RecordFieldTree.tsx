import type { ReactNode } from "react";

/**
 * Generic, recursive renderer for canonical record content — string, number,
 * boolean, null, arrays, and nested objects, all rendered as readable
 * hierarchical markup (never a raw JSON.stringify() dump). Reinterprets no
 * field semantics: a field's meaning is whatever the canonical data itself
 * states, nothing inferred.
 */
function renderValue(value: unknown, keyPrefix: string): ReactNode {
  if (value === null || value === undefined) {
    return <span className="field-empty">—</span>;
  }
  if (typeof value === "boolean") {
    return <span>{value ? "Sim" : "Não"}</span>;
  }
  if (typeof value === "string" || typeof value === "number") {
    return <span>{String(value)}</span>;
  }
  if (Array.isArray(value)) {
    if (value.length === 0) return <span className="field-empty">(lista vazia)</span>;
    return (
      <ul>
        {value.map((item, index) => (
          <li key={`${keyPrefix}-${index}`}>{renderValue(item, `${keyPrefix}-${index}`)}</li>
        ))}
      </ul>
    );
  }
  if (typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (entries.length === 0) return <span className="field-empty">(objeto vazio)</span>;
    return (
      <dl>
        {entries.map(([key, entryValue]) => (
          <div key={`${keyPrefix}-${key}`}>
            <dt>{key}</dt>
            <dd>{renderValue(entryValue, `${keyPrefix}-${key}`)}</dd>
          </div>
        ))}
      </dl>
    );
  }
  return <span>{String(value)}</span>;
}

export function RecordFieldTree({ data }: { data: Record<string, unknown> }) {
  return <>{renderValue(data, "root")}</>;
}
