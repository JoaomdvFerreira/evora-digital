/**
 * Deterministic, dependency-free text normalisation for case- and
 * diacritic-insensitive search ("evora" must match "Évora"; "acao" must
 * match "ação"). Uses only built-in Unicode normalisation (NFD splits base
 * letters from combining diacritical marks, which are then stripped) - no
 * fuzzy-search library.
 */
export function normalizeForSearch(value: string): string {
  const COMBINING_DIACRITICAL_MARKS = /[\u0300-\u036f]/g;
  return value.normalize("NFD").replace(COMBINING_DIACRITICAL_MARKS, "").toLowerCase();
}
