# Research Explorer — Local v1 Product Acceptance (Slice 4)

**Mode:** Integrated product acceptance and bounded polish. No redesign, no scope expansion beyond the one concrete defect found and fixed below.
**Baseline accepted for review:** Slices 1–3 production implementation on `main` (typography/colour/spacing roles, generic Record Detail meaning-zone + provenance + technical disclosure, Problem View contribution chips + status glosses + PRB context switcher, narrow Records list).
**Canonical inputs:** `research-explorer-design-foundations.md`, `research-explorer-prototype/prototype-rationale.md`, `research-explorer-consolidated-design-review.md`, `research-explorer-development-contract.md`, `research-explorer-re06-scope.md`.

---

## 1. Findings implemented (accepted v1 scope)

Confirmed present and correctly behaving in the production build: **REDUX-001, REDUX-002, REDUX-003, REDUX-005, REDUX-007, REDUX-008.**

Confirmed **not** touched, as required: **REDUX-004** (full-corpus Graph legibility), **REDUX-009** (diagnostic-language polish), **REDUX-010** (Graph label convention) — all remain `POST_V1`.

## 2. Generic Detail acceptance — `EVD-000127`

All nine acceptance points confirmed in the real production build:

1. Meaning appears before schema mechanics — the "Significado" region (type badge, plain-language observation, role-field chips) renders above "Proveniência", which renders above the closed "Campos" disclosure.
2. Canonical meaning is rendered verbatim (`observation.summary`), not rewritten.
3. Compact provenance ("referenciado por 1 registo(s) · referencia 1 registo(s)") is visible immediately below the meaning zone.
4. The technical disclosure (`<details>`) defaults closed.
5. Opening it renders every canonical field, including nested `source`, `geography`, `analysis`, `personal_data`, `notes` — nothing is summarized out.
6. Exact incoming/outgoing relationships and `via <field>[index]` paths (`evidence[9]`, `analysis.related_problems[0]`) remain reachable at `#relacoes`.
7. "Ver como Problema (PRB-0006)" is driven only by the canonical `PROBLEM_REFERENCE_FIELDS` allowlist (`problem`, `analysis.related_problems`), not generic graph connectivity.
8. Graph navigation ("Ver no Grafo") correctly focuses the selected record (verified via the PRB-0006 case below; same code path).
9. Unknown/future fields render generically through `RecordFieldTree`'s recursive renderer — no per-type branch, no crash risk for an unrecognised schema.

## 3. Problem View acceptance — `PRB-0006`

All thirteen acceptance points confirmed:

1–2. Direct deep link (`?view=problem&id=PRB-0006`) renders a readable orientation immediately; section order is exactly Estado atual → Avaliação → Evidência → Incertezas e lacunas → Hipóteses.
3–5. Canonical status values (`OPEN`, `unvalidated`, `corroborated`, `not_assessed`) remain visible in monospace alongside safe glosses; `corroborated`'s gloss is bounded to the documented `DISCOVERED → CORROBORATED → …` lifecycle sequence and explicitly states the exact distinguishing criterion is undocumented — it does not claim independent-source corroboration.
6–9. All ten evidence items render canonical text + glyph chips (`✓ CONFIRMS`, `≈ REFINES`, `✕ CONTRADICTS`, `↻ CURRENT-STATE-UPDATE`, `◆ EXISTING-SOLUTION`); `EVD-000127`/CONTRADICTS is visually and structurally identical to every other item (same border, padding, background); CONTRADICTS carries no exceptional emphasis.
9. Multiple contributions per item render correctly (e.g. `EVD-000042`: CURRENT-STATE-UPDATE + EXISTING-SOLUTION; `EVD-000125`: three chips).
10. The occurrence summary explicitly reads "10 itens de evidência · 15 ocorrências de contribuição" with a caption stating occurrences ≠ item count and imply no strength/ranking.
11. The point-of-use help disclosure is collapsed by default and its "Ver a Orientação completa do Explorer →" link reaches the full Reading Guide — see the one defect and fix in §6.
12. The `Detalhe · Problema · Grafo` switcher is present below the breadcrumb, scoped to `PRB-0006` (`aria-label="Navegação de PRB-0006"`), with `aria-current="page"` on "Problema".
13. No duplicate standalone Graph affordance — the switcher's "Grafo" action is the only PRB-scoped graph entry point; the global nav's "Grafo" tab is a distinct, non-competing top-level view per REDUX-008's design.

## 4. Cross-view navigation — Journeys 1–3

- **Journey 1** (Records → search `EVD-000127` → Detail → related `PRB-0006` → Problem → `EVD-000127` → Detail): executed end to end in the real browser. Record identity and canonical content (observation text, provenance, relationships) were byte-identical before and after the round trip.
- **Journey 2** (direct `PRB-0006` deep link → Detalhe → Problema → Grafo → Back/Forward): executed end to end. Each switcher action produced a distinct history entry; Back/Forward walked Grafo → Problema → Detalhe coherently, with no duplicate or skipped entries.
- **Journey 3** (Graph focus on `PRB-0006`/`EVD-000127`): confirmed the Graph opens correctly focused (12 nodes/21 relations at 1-hop, matching PRB-0006's own evidence list), and 1-hop → 2-hop expansion via "Expandir (+1 salto)" correctly updates the URL (`d=2`) and neighbourhood. Full-corpus Graph was not evaluated beyond confirming it remains the existing opt-in secondary mode, per scope.

## 5. Records desktop and narrow acceptance

**Desktop (1400px):** ID/Tipo/Rótulo/Ficheiro table intact; column sort (ID ascending confirmed via header click); search (`EVD-000127` → 1 match); type filter (`PRB-` → URL updates to `?type=PRB-`); pagination shows "Página 1 de 10" for the full 244-record corpus (25/page contract preserved); opening Detail from a row works.

**Narrow (360px):** single-column adapted list confirmed — label primary, type prefix + ID secondary, no file path in scanning rows; `document.documentElement.scrollWidth === clientWidth` (no horizontal overflow) confirmed on Records, generic Detail, and Problem View; search/filter/pagination remain usable; record selection works.

**Breakpoint boundary:** confirmed exactly at the documented 900px value — 900px renders the narrow list, 901px renders the desktop table.

## 6. Accessibility acceptance

Confirmed in the real browser: skip-link is the first Tab stop and moves focus to `#main-content` on activation; visible `:focus-visible` outline (`#1a5fb4`, solid) on interactive elements; logical Tab progression (skip link → global nav, with `aria-current="page"` on the active view); native `<details>/<summary>` keyboard/click behavior on all disclosures; contribution semantics carry both a decorative glyph (`aria-hidden`) and a always-visible text label, never colour alone; `aria-current="page"` present on the PRB switcher's active entry; narrow record rows expose useful accessible names (type + label/ID); no duplicate interactive controls found (the PRB switcher's "Grafo" and the global nav's "Grafo" tab are intentionally distinct, non-competing entry points per REDUX-008); heading hierarchy is sensible on both Records/Detail and Problem View, with no skipped levels; no keyboard trap — no focus-trap mechanism is used anywhere in the codebase, and content-focus containers (`tabIndex={-1}`) are single-target reveals, not traps.

## 7. Visual-foundation consistency

Verified in both the rendered browser (screenshots) and the implementation CSS: canonical meaning renders in `Georgia, 'Times New Roman', serif`; application chrome stays on the existing `system-ui` sans stack; IDs/schema/technical vocabulary use the `ui-monospace` stack — the three-role split is applied deliberately, not globally. Provenance renders on the `#f7f6f3` secondary surface immediately after the meaning zone. Technical disclosure is visually subordinate (closed `<details>`, smaller/tabular field grid). Contribution chips carry uniform structural weight across all rendered values, including CONTRADICTS. Records/Problem/Detail share the same typography, colour, and spacing roles — read as one environment. Narrow Records is a genuine list adaptation, not a compressed table. No dashboard/SaaS styling (cards, gradients, left-border accents) was introduced anywhere in Slices 1–3.

## 8. Corpus, build, and test validation

| Check | Result |
|---|---|
| `node tools/validate-research.js` | `Validated 244 record(s): OK.` |
| `npm run build-data` (apps/research-explorer) | `244 records, 376 edges, 0 dangling.` — matches expected baseline exactly |
| `npm run typecheck` | clean, no errors |
| `npm run test` (Explorer suite) | 222 passed, 1 skipped (was 221/1 before the regression test added in this slice) |
| `npm run build` (production) | succeeds; `dist/` output unchanged in shape (index, CSS, lazy Graph chunk, Sigma chunk) |

## 9. Concrete defect found and corrected

**Defect:** Problem View's point-of-use help disclosure links to `#reading-guide` ("Ver a Orientação completa do Explorer →"). `#reading-guide` targets the Reading Guide's `<details>` element itself, not content nested inside it. The browser's native fragment-reveal algorithm only auto-opens an *ancestor* `<details>` when the link's target is hidden content inside it — it does not open a `<details>` that is itself the direct target. The result: clicking the link navigated the URL to `#reading-guide` but left the guide visibly collapsed, so the acceptance requirement "reaches the full Reading Guide" (B.11) was not actually met — a user had to notice and click a second time.

**Classification:** incorrect URL target (bounded remediation category explicitly permitted by the acceptance brief).

**Scope check:** caused by Slice 2's implementation of the point-of-use disclosure link (REDUX-007), directly affects Local v1 acceptance criterion B.11. In scope for remediation.

**Fix (smallest change):** `apps/research-explorer/src/guide/ReadingGuide.tsx` now opens its own `<details>` explicitly whenever `window.location.hash === "#reading-guide"`, both on mount (covers a direct deep link landing mid-hash) and on `hashchange` (covers the in-page link click). No other component, route, or behavior changed.

**Regression test:** `apps/research-explorer/src/Explorer.test.tsx` — new test "Problem View's 'Ver a Orientação completa' link actually opens the collapsed reading guide, not just navigates to its anchor" asserts the guide's `open` property becomes `true` after the click.

**Re-verified:** confirmed fixed in the real production-build browser (`document.getElementById('reading-guide').open === true` after clicking the link) — see evidence screenshot 7.

No other concrete defect was found during this acceptance pass.

## 10. Deferred findings — confirmed unchanged

REDUX-004 (full-corpus Graph legibility), REDUX-009 (diagnostic-language polish), REDUX-010 (Graph label convention) remain untouched and unassessed beyond confirming the full-corpus Graph still functions as the existing opt-in secondary mode. No code path for any of these three was modified.

## 11. Remaining non-blocking limitations

- Full-corpus Graph legibility (REDUX-004) remains a known, deliberately deferred limitation.
- Diagnostic-language mixing in the terminal error state (REDUX-009) remains, by design, unaddressed.
- Graph label verbosity inconsistency across hop depth (REDUX-010) remains, by design, unaddressed.
- `evidence_status: corroborated`'s exact distinguishing criterion, and authoritative prose for `CONFIRMS`/`REFINES`/`CURRENT-STATE-UPDATE`/`NEW-CANDIDATE`, remain canonically undocumented — the implementation correctly renders the canonical value without a manufactured gloss, per the approved semantic constraint.
- "244 registos encontrados." / "1 registo encontrados." — a pre-existing minor PT pluralization rough edge in Records' result count, not part of any REDUX finding or this slice's acceptance criteria; noted but not corrected here as out of bounded scope.

## 12. Final acceptance recommendation

Based on this integrated acceptance pass — full validation ladder green, all six A–F acceptance areas confirmed, one concrete defect found and fixed with a regression test, no scope expansion — this implementation is **recommended as ready for owner review** against the `LOCAL EXPLORER v1 CLOSED` criteria in `research-explorer-re06-scope.md` §7. Closure itself remains an owner decision, not made by this document.

---

`RESEARCH_EXPLORER_V1_PRODUCT_ACCEPTANCE_READY_FOR_OWNER_REVIEW`
