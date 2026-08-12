# RS-02A — HIGH-priority Focused Desk Research — Progress

**Type:** Research Support activity (independent of the AIQT milestone/work-unit sequence)
**As of:** 2026-08-12
**Scope:** the two HIGH-priority desk-research questions from `docs/discovery/rs-01-evidence-gap-review.md` §3 (queue items 1–2). No broad new research pass was performed; all cited public sources were directly fetched and verified before canonicalization.

This is a compact addendum, not a rewrite of RS-01. RS-01's findings, classifications and remaining queue (items 3–7) stand unchanged.

## What was integrated

**PRB-0008 (Gap 17 — hard-to-fill occupations):**
- `SRC-0099` (EURES Portugal labour-market page) — new. Verified by direct fetch: names a regional Alentejo shortage-occupation list.
- `SRC-0100` (IEFP Centros de Emprego, abril 2025) — new. Verified by direct PDF text extraction: confirms CTEF Évora's catchment spans 14 municípios, not Évora alone.
- `EVD-000115`, `EVD-000116` — new, both `REFINES`, linked to `PRB-0008`.
- `PRB-0008`/`ASM-0008` updated: `possible_root_causes` narrative entry added; `critical_unknowns.U1` narrowed to name the regional list explicitly while keeping the Évora-specific gap open; `next_action`/`notes` updated. **No `decision_gates`, `evidence_confidence`, or `civic_importance` value changed** — the new evidence is regional, not municipal, so it narrows but does not resolve U1.

**PRB-0001 (Gap 1 — TREVO temporal service gaps):**
- `SRC-0101` (2022 annual transport-authority report), `SRC-0102` (2023 annual transport-authority report) — new. Verified by direct PDF text extraction: both contain wording identical to the already-canonical 2026 report (`SRC-0018`) on reduced night/weekend/holiday response.
- `EVD-000117` — new, `CONFIRMS`, `temporal_relevance: HISTORICAL`, linked to `PRB-0001`.
- `PRB-0001`/`ASM-0001` updated: `possible_root_causes` narrative entry added; `civic_importance.persistence` revised `MEDIUM → HIGH` (now documented across 3 annual editions, 2022–2026); `critical_unknowns.U1` narrowed to the line/corridor-level severity question; `next_action`/`notes` updated. **`journey_understood` stays `PARTIAL`** — no line-level current-state comparison was performed; this is historical persistence corroboration only.

**Deliberately not canonicalized** (evidence-discipline boundaries applied):
- TREVO's `network-and-schedules` page — inspected, but returned only a client-rendered shell with no extractable schedule detail; `SRC-0021` stands unchanged, no new EVD.
- Évora's flexible/taxi-based transport initiative — reviewed only as further context for the already-canonical `EVD-000024`; not treated as evidence about a specific TREVO route/frequency deficit.
- IEFP's regional employment-centre activity figures — not treated as proof of occupational shortage (they measure centre activity, not shortage).
- 2022/2023 per-line frequency tables — present in the source PDFs but not canonicalized as current-state data; they describe 2022/2023 conditions, not August 2026.

## Institutional routes — unchanged

Neither WU022 route was closed by this desk research, per instruction:
- **TREVO (D5-OP-001)** stays `SENT`/pending — still the route for the operational-cause half of U2 and can further resolve U1's line-level severity question.
- **NERE (D5-OP-006)** stays `SENT`/pending — still the route for confirming which occupations (named or otherwise) are actually hard-to-fill in Évora specifically.

## Validation

- `node tools/validate-research.js` → `Validated 230 record(s): OK.` (223 baseline + 4 new `SRC-*` + 3 new `EVD-*`).
- Research Explorer read model rebuilt (`apps/research-explorer`, `npm run build-data`): 230 records, 347 edges, 0 dangling. New evidence and graph edges (`EVD-000115`/`EVD-000116` → `PRB-0008`; `EVD-000117` → `PRB-0001`) appear automatically via `analysis.related_problems`, with no Explorer application-code change.
- `.aiqt/state.json` unchanged; no AIQT milestone/WU state modified; WU023 not started.

## Recommendation for the remaining MEDIUM queue (RS-01 §3, items 3–7)

Proceed unchanged. None of the four MEDIUM items (PRB-0004 cycling topology, PRB-0005 Parking Buddy coverage, PRB-0007 caregiver-needs comparison, PRB-0002 stop-level audit) were touched by this HIGH-priority batch, and nothing found here changes their priority, framing, or institutional-route relationship — each still sits alongside an open WU022 route it does not duplicate.
