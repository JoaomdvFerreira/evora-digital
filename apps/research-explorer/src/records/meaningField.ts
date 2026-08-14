/**
 * Client-side counterpart to the RE-01 adapter's `labelFor()`
 * (apps/research-explorer/scripts/read-model.js): both share the same
 * ordered, schema-agnostic field-path candidate list from
 * ../../shared/meaning-field-candidates.json — one neutral source of truth,
 * read by the Node build script (`require()`) and this browser module
 * (`import`) alike, so the two can never drift apart. Unlike `labelFor()`,
 * this returns the *untruncated* value — the adapter's `label` is
 * deliberately clipped to 80 chars for table/summary display, but the
 * Record Detail meaning zone needs the full canonical sentence.
 *
 * Reuses the existing convention rather than inventing new per-record-type
 * knowledge: a future schema-conforming record type with none of these
 * fields renders no meaning-zone sentence (falls back to its own ID in the
 * caller), exactly as it already falls back to its ID for `label`.
 */
import MEANING_FIELD_CANDIDATES from "../../shared/meaning-field-candidates.json";

function getPath(record: Record<string, unknown>, dotted: string): unknown {
  const parts = dotted.split(".");
  let cur: unknown = record;
  for (const part of parts) {
    if (cur === null || typeof cur !== "object" || !(part in (cur as Record<string, unknown>))) {
      return undefined;
    }
    cur = (cur as Record<string, unknown>)[part];
  }
  return cur;
}

export interface MeaningField {
  /** The canonical dotted field path the value was found at, e.g. "observation.summary". */
  field: string;
  value: string;
}

export function findMeaningField(record: Record<string, unknown>): MeaningField | null {
  for (const field of MEANING_FIELD_CANDIDATES) {
    const value = getPath(record, field);
    if (typeof value === "string" && value.trim() !== "") {
      return { field, value };
    }
  }
  return null;
}
