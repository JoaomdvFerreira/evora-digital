# Research Explorer — Design Foundations (Local Explorer v1)

**Status:** `APPROVED_FOUNDATION` document. Design-consolidation only — no production React/CSS changed, no prototypes implemented, no full Design System created.
**Scope:** the minimum stable design contract needed for a bounded Local Explorer v1 implementation.
**Inputs:** `research-explorer-consolidated-design-review.md` (REDUX findings), `research-explorer-prototype/prototype-rationale.md` (`OWNER_APPROVED_FOR_V1_DIRECTION`), the three `.dc.html` prototype artefacts, `research-explorer-development-contract.md` (invariants), and a read-only inspection of `apps/research-explorer/src/**` and `apps/research-explorer/src/index.css`.
**Consistent with:** `OWNER_APPROVED_FOR_V1_DIRECTION`. Does not reopen accepted architecture (development-contract invariants 1–14 remain unmodified and unchallenged).

Every foundation below is tagged:

- **`APPROVED_FOUNDATION`** — decided by Owner Validation; implementation must honor it.
- **`IMPLEMENTATION_DEFAULT`** — not itself owner-decided at the pixel/value level; this document picks the lowest-complexity default consistent with the approved direction and the existing app, so v1 has something concrete to build against. Revisable without reopening the approved direction.
- **`DEFERRED / NOT_YET_STANDARDIZED`** — explicitly out of scope for v1; do not implement.

---

## 1. Information hierarchy

`APPROVED_FOUNDATION` (REDUX-001/003, prototype rationale "Design direction" + "Approved"):

Canonical order for any record's meaning, top to bottom:

1. **Canonical human meaning first** — the record's plain-language content (an evidence observation, a problem statement, a source title) and its canonical role/classification, both visible without disclosure.
2. **Compact provenance second** — a short "how do we know this" summary (origin, retrieval date, relationship counts) immediately after meaning, not after the technical field list.
3. **Technical/schema inspection secondary** — the exhaustive field list, grouped by purpose, closed by default.
4. **Exhaustive canonical detail always reachable** — nothing currently rendered in generic detail may become unreachable; it may only become quieter until requested (development-contract invariant 7 and REDUX-001's constraint both require this).

**Meaning zone** — the approved pattern for the top of this order:

- Type/context marker (e.g. `EVD- Evidência`, sub-type where available).
- The record's plain-language canonical content (observation summary, problem statement, etc.), given visually distinct typographic weight from everything below it.
- Relevant canonical role/classification (e.g. `analysis.contribution`) shown as a chip (§6) immediately adjacent to the content it qualifies.

**Boundary:** the meaning zone is a presentation-layering pattern over already-canonical fields — it does not define, rename, reorder, or infer new record semantics (development-contract invariant 8, 11). It selects which already-existing field(s) render first and larger; it invents no new field.

## 2. Typography roles

`APPROVED_FOUNDATION`: the three-role split itself (serif = canonical human-readable content, sans = application chrome/controls, monospace = IDs/schema paths/field names/canonical technical vocabulary) is approved. This is the primary hierarchy device — a reader should be able to tell "what the record says" from "the record's technical shape" by typeface role alone.

`DEFERRED / NOT_YET_STANDARDIZED`: the prototypes' illustrative families (Source Serif 4 / Inter / IBM Plex Mono via Google Fonts) are explicitly **not** approved production dependencies (prototype-rationale, "Owner-approved status" and "Explicitly not yet approved as final foundations"). Development-contract invariant 10 also disfavors adding a dependency without measured need, and the task brief prohibits remote font delivery outright.

`IMPLEMENTATION_DEFAULT` — system font stacks, zero new dependencies:

| Role | Stack | Rationale |
|---|---|---|
| Sans (chrome/controls) | `system-ui, sans-serif` | Already in production today (`index.css:6`, `body { font-family: system-ui, sans-serif; }`) — no change needed for this role. |
| Serif (canonical human content) | `Georgia, 'Times New Roman', serif` | Every mainstream OS/browser ships a serif system font; `Georgia` in particular is designed for on-screen reading (tall x-height, open counters) and is what the prototypes themselves fall back to (`'Source Serif 4',Georgia,serif` — the fallback is already the honest answer). No `@font-face`, no remote request. |
| Monospace (IDs/schema/technical vocabulary) | `ui-monospace, 'SFMono-Regular', 'Cascadia Code', Consolas, monospace` | Standard system monospace stack; the app already relies on the browser's default monospace via bare `<code>` (`index.css:177-180`) — this stack makes that reliance explicit and consistent instead of accidental, without adding a dependency. |

This satisfies the brief's instruction directly: "if system font stacks adequately preserve the hierarchy, make them the default." A distinct serif/sans/mono stack is a real, visible role distinction even with system fonts — the hierarchy survives; only the specific letterforms are less curated than the prototype illustrations.

**Where each role applies**, mapped to existing markup:
- Serif: the meaning-zone plain-language text (observation summaries, problem statements) — currently unstyled prose inside `RecordDetailPanel.tsx` / `ProblemView.tsx`.
- Sans: nav, buttons, labels, section headings, form controls — already the global default.
- Monospace: everything currently wrapped in `<code>` (`RecordDetailPanel.tsx:77,81`, `ReadingGuide.tsx:36,52-53`, `ProblemView.tsx:127`, `GraphExplorer.tsx:274,391`) plus any new chip/tag glyphs (§6) and grouped technical-field values (§1.3).

## 3. Colour and surfaces

`APPROVED_FOUNDATION` (prototype rationale, "Design direction" + review §9): low-chroma research/paper feel, strong readability, one restrained interactive accent, no dashboard/SaaS visual language, contribution roles never encode ranking through colour.

`DEFERRED / NOT_YET_STANDARDIZED`: the prototypes' exact hex values (`#FAF8F3`, `#2B5D5A`, `#DDD8CC`, etc.) are explicitly not approved (prototype-rationale, "Explicitly not yet approved as final foundations": "exact palette values").

`IMPLEMENTATION_DEFAULT` — minimal evolution of the values already in production (`index.css`), not a new palette:

| Role | Value | Source |
|---|---|---|
| Page/background | `#fff` | Unchanged — `index.css:9`. |
| Primary text | `#111` | Unchanged — `index.css:8`. |
| Secondary/muted text | `#555` | Consolidates the two existing muted values (`#444` manifest-summary, `#777` field-empty) to one reusable role instead of two ad hoc greys. |
| Border/divider | `#ccc` | Unchanged — already used consistently for every panel/table/fieldset border in the app (7+ sites in `index.css`). |
| Secondary surface (meaning-zone panel, provenance panel, technical-disclosure background) | `#f7f6f3` | New, but minimal: a very low-chroma warm-grey one step off white — reads as "paper," stays inside the existing near-neutral palette (`#f2f2f2`/`#fafafa` already exist for `code`/graph-canvas), and requires no new naming beyond "secondary surface." |
| Interactive/accent | `#1a5fb4` | Reuse of the one accent value already in the app (currently focus + skip-link only, `index.css:30,183`). Extending it to be *the* interactive accent (links, active-state emphasis) rather than introducing a second accent colour keeps the palette to one restrained accent, as approved — it does not yet exist as a link/button colour today, so this is a defined role, not a renamed one. |
| Focus indication | `3px solid #1a5fb4`, `outline-offset: 1px` | Unchanged — `index.css:182-185`; already meets the accessibility carry-forward (§9) and is reused, not redefined, as the accent. |

This is deliberately not a token *scale* — it is the six roles the brief asks for (background, primary text, secondary text, border, secondary surface, interactive/focus), each pointing at one value, four of six already present in the codebase today.

**Contribution roles:** no colour is assigned per contribution value (CONFIRMS/REFINES/CONTRADICTS/etc.) — see §6. Ranking-by-colour is explicitly prohibited by the approved direction.

## 4. Spacing and density

`IMPLEMENTATION_DEFAULT` (no owner-level approval needed here — the brief asks only for implementation-sufficient minimums, not a token scale):

- **Readable content width:** meaning-zone prose (serif role) should sit inside a column narrower than the app's existing `main { max-width: 1400px }` workbench width — Prototype A/B use ~720–800px. Recommend constraining the meaning-zone/prose column to **~720px**, leaving the existing 1400px `main` untouched for table/workbench views (Records, Graph). This is a max-width applied only to prose-bearing containers, not a global change.
- **Section rhythm:** reuse the spacing values already in `index.css` (the `0.5rem`–`1.5rem` range) for spacing between meaning zone / provenance panel / technical disclosure — no new scale needed; existing ad hoc values are already inside a coherent range.
- **Dense technical inspection vs. readable prose:** technical field grids (§1.3) use a tighter, tabular row rhythm (`row-gap: 6px`–`8px`, per Prototype A's grouped-field grids) since they are for scanning/lookup, not reading; prose paragraphs use the existing looser line-height already implied by unstyled `<p>` rendering (browser default `line-height` is acceptable — no new value required unless testing shows otherwise).
- **Narrow spacing:** no new breakpoint value — reuse the existing single breakpoint, `@media (max-width: 900px)` (`index.css:67-76`), already used for `.records-explorer`/`.record-detail-panel` stacking. Do not introduce a second breakpoint without evidence it's needed.
- **Practical minimum interaction target:** **44px** minimum height for any tappable row/control introduced at narrow width (Records row, pagination buttons) — directly carried from Prototype C and the REDUX-005 constraint; not a new decision.

`DEFERRED / NOT_YET_STANDARDIZED`: a named spacing-token scale (e.g. `--space-1` … `--space-6`). Not needed for v1's bounded scope; the existing ad hoc rem values are sufficient and consistent enough to extend.

## 5. Meaning zone — generic Record Detail structure

`APPROVED_FOUNDATION` (REDUX-001/003, prototype rationale "Candidate design foundations" → "Meaning-zone + grouped technical disclosure"):

Generic structure for **any** record type's detail view, in order:

1. **Record type/context** — type prefix + label (e.g. `EVD- Evidência`, sub-type where the schema has one).
2. **Primary canonical human-readable content** — the record's plain-language field (serif role), unstyled/rewritten nowhere.
3. **Relevant canonical role/classification where available** — e.g. `analysis.contribution` for Evidência, rendered as a chip (§6) next to the content it qualifies. Record types without such a field simply omit this step — it is not invented for types that lack one.
4. **Compact provenance** — origin, retrieval/publication date, relationship counts, with an in-page anchor link to the exact reference paths (§7). Sits directly below the meaning zone, not after the technical field list.
5. **Technical disclosure** — the full field list, grouped by purpose (e.g. Identificação / Geografia / Natureza / Privacidade / Proveniência / Análise canónica / Notas for Evidência; groupings are schema-specific and should mirror each schema's own field families, not a fixed universal grouping). **Defaults CLOSED** (Owner Validation revision — explicitly overturned the earlier "defaults open" prototype state; see prototype-rationale §"Owner Validation revisions" item 1 and "Unresolved decisions").

`APPROVED_FOUNDATION`: nothing canonical may become unreachable — every field currently rendered by `RecordFieldTree.tsx` today must still be reachable inside the technical disclosure; the disclosure groups and subordinates, it never omits.

`DEFERRED / NOT_YET_STANDARDIZED`: a specialized "what is a [record type]" explanatory disclosure for every record type beyond Problem View. Prototype A only ships a one-sentence type gloss in its right rail for Evidência — whether that pattern needs to become a full disclosure for other types is explicitly left open by Owner Validation ("Unresolved decisions").

## 6. Contribution presentation

`APPROVED_FOUNDATION` (REDUX-002, prototype rationale — the most load-bearing approved pattern):

- Canonical label **always visible** as text (never icon-only, never color-only).
- Optional stable glyph may accompany the label (Prototype B's set: `✓ CONFIRMS`, `≈ REFINES`, `✕ CONTRADICTS`, `↻ CURRENT-STATE-UPDATE`, `◆ EXISTING-SOLUTION`, `◇ PLANNED-SOLUTION`, `✧ NEW-CANDIDATE`) — these seven glyphs are a reasonable illustrative set carried from the approved prototype, not independently re-derived here; treat them as `IMPLEMENTATION_DEFAULT` (glyph shapes specifically), since only the *pattern* (glyph + label, no ranking) was owner-approved, not the literal Unicode characters.
- **Uniform visual/structural weight across all seven values** — identical border weight, padding, background, font size for every contribution chip, including CONTRADICTS. Owner Validation explicitly removed an earlier exceptional emphasis on the CONTRADICTS/EVD-000127 card (revision item 2) — this reversal is binding, not illustrative.
- No positive/negative ranking, no confidence/strength implication, no colour-only distinction.
- Multiple contributions per evidence item are supported structurally (one evidence record may render more than one chip).
- Implementation must be **generic to the canonical enum** — a component driven by the schema's enum values, not a hardcoded switch over the five values that happen to appear in PRB-0006. All seven values must render correctly even though only five appear in the current PRB-0006 dataset.
- An aggregate occurrence legend (count of chip occurrences, not evidence-item count) is an approved optional pattern for Problem View's evidence section, explicitly labelled as occurrences (Prototype B's "13 ocorrências de contribuição" pattern) — not a required v1 element, but consistent with the approved direction if implemented.

`APPROVED_FOUNDATION` semantic constraint: do not invent missing prose definitions for CONFIRMS, REFINES, CURRENT-STATE-UPDATE, or NEW-CANDIDATE — no authoritative canonical definition exists for these four in the documents reviewed. The canonical label renders regardless; no gloss is manufactured for it. This gap is explicitly **not** a v1 blocker (prototype-rationale: "These semantic-definition gaps do NOT block the approved visual pattern or Local Explorer v1").

## 7. Provenance

`APPROVED_FOUNDATION` (REDUX-003):

- A **compact summary** near the meaning zone: origin, publication/retrieval date, relationship counts (e.g. "referenciado por 1 Problema · referencia 1 Problema").
- **Exact relationships/reference paths remain available** — every relationship the app renders today (`RecordDetailPanel.tsx`'s incoming/outgoing relationships section) stays fully present, one anchor-link away from the compact summary, not removed or summarized out.
- **Preserve directionality** — incoming (`←` / "referenciado via") vs. outgoing (`→` / "referencia via") must stay visually distinct, matching the existing app's Entradas/Saídas convention.
- **Preserve `via <field>` notation** exactly, including array index where present (e.g. `analysis.related_problems[0]`) — this is already how the app renders references and must not be softened into prose.
- **Never convert references into inferred semantics** — a reference is "record A points to record B via field F," never SUPPORTS/CONTRADICTS/CAUSES/etc. unless that semantic is itself an explicit canonical field (this restates development-contract invariant 8; the design layer must not violate it by, e.g., color-coding a reference by an inferred relationship type).

## 8. Canonical value + human gloss

`APPROVED_FOUNDATION`:

- The canonical value (e.g. `OPEN`, `unvalidated`, `corroborated`) always remains visible — never gloss-only.
- A human gloss may accompany the canonical value **only when canonically grounded** in a schema or model document (per prototype-rationale's grounding checks against `problem.schema.json`, `evidence.schema.json`, `docs/models/problem-model.md`, `docs/models/evidence-model.md`).
- Where no authoritative definition exists, the canonical value renders **unexplained** rather than an invented gloss — this document does not attempt to resolve those gaps (per the task brief: "Do not solve those semantic gaps here").

Carried-forward unresolved semantic definitions (from prototype-rationale, not re-litigated here):

- Exact `corroborated` vs. `discovered` distinction (`evidence_status`) — undocumented criterion.
- Authoritative prose for `CONFIRMS`, `REFINES`, `CURRENT-STATE-UPDATE`, `NEW-CANDIDATE` (`analysis.contribution`) — undocumented beyond the enum label itself.

Any v1 implementation of Problem View's "Estado atual" status row or the contribution vocabulary must reflect these gaps as-is (value with no gloss, or value with only the grounded portion of a gloss) rather than filling them in.

## 9. PRB contextual navigation

`APPROVED_FOUNDATION` (REDUX-008), narrowly scoped:

- Pattern: `Detalhe · Problema · Grafo`, rendered as a small persistent switcher below the breadcrumb, **scoped to a focused PRB record only**.
- Purpose: persistent orientation ("where am I, how do I reach the other views of this same record") for any entry path, including a direct deep link — not a fourth global navigation tab, and it must not compete with or duplicate the existing `Visão geral / Registos / Grafo` nav (`Explorer.tsx:48,51,54`).
- **No router or navigation architecture change** — the existing native-URL-state approach (development-contract invariant 10: no router library without evidenced need) must implement this switcher within that same model.

`DEFERRED / NOT_YET_STANDARDIZED`: generalizing this switcher to generic Record Detail or any non-PRB record type. Owner Validation explicitly left this open (prototype-rationale, "Unresolved decisions" + "Deferred": "generic Detail context switcher"). Non-PRB records continue using the existing contextual action links (e.g. "Ver como Problema," "Ver no Grafo") already present in `RecordDetailPanel.tsx`'s right-rail pattern — do not replace those with a switcher for v1.

## 10. Narrow Records

`APPROVED_FOUNDATION` (REDUX-005, Prototype C):

- **Desktop stays table-based** — no change to `RecordsTable.tsx`'s desktop presentation (search, type filter, sort all already work and are explicitly preserved, review §8).
- **Narrow (≲900px, matching the existing breakpoint) adapts to a single-column record-list treatment**: each row is a full-width tappable element, not a compressed multi-column table.
- Per row: **human-readable label primary** (larger, primary reading line); **type and technical ID remain visible** (type as a small prefix badge, ID as a secondary monospace line — never removed, only demoted); **file path deferred to Detail** (dropped from the scanning list, reachable one tap away).
- **Search/filter/pagination remain functionally equivalent** — same capabilities as desktop, just full-width controls instead of inline table controls. Prototype C's specific row count (5) and "Página 1 de 49" are illustrative placeholders only — **no change to production pagination or page-size** (prototype-rationale, "Prototype C clarification").
- **Practical targets ≥44px** per row.

`APPROVED_FOUNDATION` constraint: do not change pagination behavior — this is a layout adaptation of the existing paginated table, not a data/behavior change.

## 11. Accessibility

`APPROVED_FOUNDATION` — carried forward unchanged, all already present in the current implementation and must not regress:

- Visible keyboard focus — `:focus-visible { outline: 3px solid #1a5fb4; outline-offset: 1px; }` (`index.css:182-185`), reused as-is (§3).
- Semantic heading hierarchy — `<h1>`/`<h2>`/`<h3>` pattern already in place across `App.tsx`, `ProblemView.tsx`, `Overview.tsx`; any new meaning-zone/provenance/technical-disclosure sections must fit into the existing hierarchy, not introduce visual-weight-only headings.
- Accessible/native disclosure behavior — new technical disclosures (§5) and any status-gloss disclosure (§8/9 context) must use native `<details>/<summary>`, matching the one existing usage in `ReadingGuide.tsx:24-25`.
- No colour-only semantic distinction — binding for contribution chips (§6) and any status rendering (§8): glyph/text must carry the distinction, colour never alone.
- Adequate contrast — new secondary-surface and secondary-text values (§3) must be checked against the existing `#111`-on-`#fff` / `#ccc`-border baseline for contrast before implementation.
- Keyboard-operable navigation — the PRB context switcher (§9) and any new chip/link elements must be real focusable `<a>`/button elements, not `div`-with-click-handler, matching the app's existing convention (`Explorer.tsx` nav buttons, `RecordsTable.tsx` sortable headers).
- Practical narrow touch targets — 44px minimum (§4, §10).
- Visual simplification must not remove screen-reader-accessible technical information — the meaning zone and narrow-row treatments subordinate technical fields visually; they must remain in the DOM and reachable, matching the Graph view's existing precedent of a visual canvas paired with a full HTML list alternative (`GraphExplorer.tsx`, `GraphCanvas.tsx:106`).

---

## V1 implementation mapping

Implementation map only — no files listed below are modified by this document.

### Slice 1 — Shared visual foundations + generic Record Detail

**Scope:** typography roles (§2), colour/surface roles (§3), spacing minimums (§4), the generic meaning-zone + provenance + technical-disclosure structure (§5), provenance rendering (§7), canonical-value-plus-gloss pattern (§8) applied to generic detail.

**Likely files/components:**
- `apps/research-explorer/src/index.css` — add the serif/mono role rules, secondary-surface/accent colour roles, prose max-width container.
- `apps/research-explorer/src/records/RecordDetailPanel.tsx` — restructure to meaning-zone-first/provenance-second/technical-disclosure-third ordering.
- `apps/research-explorer/src/records/RecordFieldTree.tsx` — adapt to render inside a closed-by-default grouped `<details>` rather than a flat top-level field list; grouping is schema-driven.

**REDUX findings addressed:** REDUX-001, REDUX-003.

**Validation required:** `node tools/validate-research.js` unaffected (no canonical change); Explorer's existing test suite; manual check that every field previously visible in `RecordFieldTree` remains reachable; contrast check on new colour roles; keyboard/focus check on the new `<details>`.

**Dependencies:** none — this slice is the foundation the other three build on.

### Slice 2 — Problem View semantics/orientation

**Scope:** contribution chip component (§6), canonical-value-plus-gloss applied to Estado atual's four status fields (§8), PRB-scoped `Detalhe · Problema · Grafo` context switcher (§9), signposting for the existing Reading Guide (REDUX-007).

**Likely files/components:**
- `apps/research-explorer/src/problem/ProblemView.tsx` — add contribution chips to each evidence item, status glosses to Estado atual, the context switcher below the breadcrumb.
- A new small chip/tag rendering unit (no dedicated component exists yet, per inspection — likely a new file, e.g. `apps/research-explorer/src/records/ContributionChip.tsx`, generic over the schema enum) used by `ProblemView.tsx`.
- `apps/research-explorer/src/guide/ReadingGuide.tsx` — signposting adjustment only (visual distinction from a generic accordion); no content rewrite.
- `apps/research-explorer/src/Explorer.tsx` — only if the context switcher needs to read/write view state; no router change.

**REDUX findings addressed:** REDUX-002 (critical), REDUX-007, REDUX-008.

**Validation required:** confirm all seven canonical `analysis.contribution` enum values render correctly even though PRB-0006's dataset only exercises five; confirm CONTRADICTS carries no exceptional styling versus the other six; confirm switcher is keyboard-reachable and scoped only to PRB records; existing Explorer test suite plus a real-corpus regeneration check per development-contract invariant 13.

**Dependencies:** Slice 1's typography/colour roles and the generic detail meaning-zone pattern (Problem View reuses `RecordFieldTree` for its "unknowns" section).

### Slice 3 — Narrow Records

**Scope:** single-column record-list treatment at ≤900px (§10).

**Likely files/components:**
- `apps/research-explorer/src/records/RecordsTable.tsx` and/or `apps/research-explorer/src/records/RecordsExplorer.tsx` — narrow-width row rendering (label-primary/ID-secondary/path-deferred), replacing the current table-reflow behavior below the existing `900px` breakpoint.
- `apps/research-explorer/src/index.css` — extend the existing `@media (max-width: 900px)` block; no new breakpoint.

**REDUX findings addressed:** REDUX-005.

**Validation required:** confirm search/type-filter/pagination remain functionally identical at narrow width (no behavior change, only layout); confirm ≥44px row height; confirm file path is still reachable via Detail; manual narrow-viewport check (no automated narrow-viewport test currently exists per inspection).

**Dependencies:** Slice 1 (colour/spacing roles); independent of Slice 2.

### Slice 4 — Integrated validation/polish

**Scope:** cross-view consistency pass (confirm meaning-zone, provenance, and typography roles read the same way across Record Detail, Problem View, and Records narrow), accessibility sign-off (§11) across all changed views, confirm no regression to Graph (untouched by design), confirm Overview (untouched), confirm terminal error/retry state (untouched, review §8).

**Likely files/components:** no new files expected; touches only what Slices 1–3 already touched, plus `apps/research-explorer/src/index.css` for any final consistency fixes.

**REDUX findings addressed:** closes out the full v1 set (REDUX-001/002/003/005/007/008) with a consistency/regression pass; explicitly does not touch REDUX-004/009/010 (deferred).

**Validation required:** full validation ladder per development-contract invariant 13 — adapter tests, `node tools/validate-research.js`, real-corpus regeneration, typecheck, Explorer test suite; manual accessibility walkthrough (keyboard-only pass, screen-reader spot check on meaning zone + chips + narrow rows).

**Dependencies:** Slices 1–3 complete.

---

## Explicit non-goals (restated for implementers)

Out of scope for Local Explorer v1, regardless of how this document's patterns might tempt scope creep:

- REDUX-004 (full-corpus Graph redesign), REDUX-009 (diagnostic-language polish), REDUX-010 (Graph label normalization) — all `LIKELY_POST_V1`/`PREFERENCE_ONLY` in the consolidated review.
- A full Design System or component library.
- Router/state-management architecture changes.
- Schema changes or canonical semantic changes.
- Remote font dependencies of any kind.
- A generic (non-PRB) context switcher.
- Manufactured prose definitions for `CONFIRMS`/`REFINES`/`CURRENT-STATE-UPDATE`/`NEW-CANDIDATE`/`corroborated`.
- Any AIQT/D5/WU state change (development-contract invariant 14).

---

`RESEARCH_EXPLORER_FOUNDATIONS_READY_FOR_OWNER_REVIEW`
