# Open Évora Research Explorer — Consolidated Design/UX Review

**Mode:** Review only. No application changes made. No Design System created.
**Reviewed baseline:** `main`, RE-06 ENGINEERING COMPLETE (244 canonical records, 376 explicit relationships, 0 dangling references).
**Evidence base:** 14 production-build screenshots in `docs/design/research-explorer-review/` + `manifest.md`, plus `research-explorer-development-contract.md`, `-roadmap.md`, `-integral-quality-review.md`, `-re06-scope.md`.

---

## 1. Executive assessment

The Explorer is architecturally sound and functionally complete: RE-01 through RE-06 delivered a correct, read-only, DataProvider-bound application over the canonical corpus, and the pre-RE-06 engineering fixes (REIQ-001, -004, -005, -006) already put the canonically explicit `CONTRADICTS` contribution on screen in Problem View. What remains is a **presentation and hierarchy problem, not a data or correctness problem.** Every view currently reads schema-outward rather than meaning-outward: the same typographic weight, spacing, and monospace treatment is given to a record's canonical file path, its 20+ raw field names, and the one or two sentences that actually explain what the record says. The product is functionally a faithful, well-structured data browser; it does not yet feel like a research reading tool.

The narrow experience is not broken — it reflows into a single stacked column and remains keyboard/table-semantic underneath — but it is a compression of the desktop information architecture, not an adapted one. The dense multi-column Records table in particular does not survive compression to ~360px legibly.

The Graph is faithful to canonical references (no invented semantics observed) and reads well at 1-hop and 2-hop. The full-corpus view is the one place where the evidence shows a real usability failure: a 244-node concentric-ring layout with illegible overlapping labels, degrading the promise that Graph "reduces cognitive overload."

## 2. Audience/context assessment

The evidence supports the stated priority order (researcher/maintainer → institutions → citizens) reasonably well for the primary workflow (Records → Problem → Evidence → Source) but not yet for a first-time arrival. Nothing in the 14 screenshots indicates the interface adapts its own presentation based on audience — the same undifferentiated field-dump is what every audience sees. This is consistent with the brief's framing: the fix is hierarchy and progressive disclosure, not two separate UIs, and not removing depth.

## 3. Finding register

### REDUX-001 — Generic Record Detail presents schema before meaning
**Area:** Record Detail (`04-record-detail.png`, `07-evidence-provenance.png`, `12-narrow-record-detail.png`)
**Severity:** HIGH
**Observed problem:** The detail panel for EVD-000127 opens with `ID` (`EVD-000127`), `Tipo`, and a raw file path (`research/evidence/EVD-000127.yaml`) in monospace, then a flat, alphabetically-ordered-looking `Campos` list of ~24 fields (`evidence_id`, `type`, `source.publisher`, `geography.level`, `population`, `domain`, `observation.summary`, `evidence_nature`, `strength`, `personal_data.present`, `analysis.contribution`, `lineage_id`, `representativeness`, `verification`, `temporal_relevance`…) all at identical size/weight. The one sentence that says what the evidence actually claims (`observation.summary`) sits roughly a third of the way down, with no more visual prominence than `personal_data.retained: Não`.
**Evidence:** `04-record-detail.png`, `07-evidence-provenance.png` (identical capture, see REDUX-006).
**User impact:** Primary researcher can still find everything (nothing is missing), but scanning cost is high — every field competes equally for attention. First-time/institutional users have no cue about which of ~24 fields matter.
**Design principle:** Information hierarchy; scanning.
**Recommended direction:** Establish a small fixed "meaning" zone at the top of every record type (title/summary/observation + contribution, sized and weighted distinctly) before the exhaustive field list. Keep the full field list — do not remove it — but subordinate it visually (smaller type, tabular/muted treatment) and let it follow, not precede, meaning.
**Constraints:** Must not rewrite or reorder canonical field values; this is presentation layering only, and field completeness must remain.
**Disposition:** LIKELY_V1_VALUABLE

### REDUX-002 — Evidence contribution roles are textually present but visually undifferentiated
**Area:** Problem View (`05-problem-prb-0006.png`, `06-problem-contradicts.png`)
**Severity:** HIGH
**Observed problem:** All 10 evidence items under "Evidência (10)" for PRB-0006 are rendered as identical bullet blocks: `[Evidência] EVD-xxxxxx — type`, then `Contribuição canónica: X.` in the same bold weight regardless of whether X is CONFIRMS, REFINES, EXISTING-SOLUTION, CURRENT-STATE-UPDATE, or CONTRADICTS. The single CONTRADICTS item (EVD-000127) is textually present (satisfying REIQ-001) but requires reading each of the 10 "Contribuição canónica" lines in sequence to notice it — nothing distinguishes it as the one item that challenges the problem's framing.
**Evidence:** `06-problem-contradicts.png` (labelled specifically to show this, but pixel-identical to `05-problem-prb-0006.png` — see REDUX-006).
**User impact:** A researcher scanning quickly, and especially an institutional/general reader, can walk away from PRB-0006 without registering that one canonical source disputes the "fully operational" framing implied by the other nine items — precisely the risk the development contract and RE-06 pre-fix were meant to close functionally, not yet visually.
**Design principle:** Evidence roles must survive visual simplification; provenance transparency.
**Recommended direction:** Give the small, closed, canonical set of contribution values (CONFIRMS/REFINES/CONTRADICTS/CURRENT-STATE-UPDATE/EXISTING-SOLUTION) a distinct, consistent label treatment (e.g., a text-based tag, not an invented color-coded "confidence" meter) so a reader can tell items apart without reading every sentence. This is presentation of already-explicit canonical metadata, not inference.
**Constraints:** Must not invent strength/confidence gradients between contribution types not present in canonical data; must not visually rank CONTRADICTS as "worse" than CONFIRMS — only as different.
**Disposition:** LIKELY_V1_CRITICAL

### REDUX-003 — Provenance and relationships are the last thing on the page
**Area:** Record Detail (`04-record-detail.png`, `07-evidence-provenance.png`)
**Severity:** MEDIUM
**Observed problem:** "Relações" (Entradas/Saídas — the record's actual provenance/reference graph) appears only after the full ~24-field technical dump, requiring a long scroll. On EVD-000127 this means learning that PRB-0006 references this evidence happens after nine other technical fields.
**Evidence:** `04-record-detail.png`, `07-evidence-provenance.png`.
**User impact:** Provenance is one of the three stated pillars (comprehension, evidence, provenance) but is currently the most buried of the three in generic detail.
**Design principle:** Progressive disclosure; provenance remains one step away, not many.
**Recommended direction:** Promote a compact provenance summary (who references this, what it references) nearer the top, alongside or just below the meaning zone from REDUX-001, while keeping full relationship detail (with exact reference-path notation) available below.
**Constraints:** Keep the existing "referencia via `<field>`" language and direction — do not soften into inferred semantics.
**Disposition:** LIKELY_V1_VALUABLE

### REDUX-004 — Full-corpus Graph is not legible at any useful zoom level
**Area:** Graph (`10-graph-full-corpus.png`)
**Severity:** HIGH
**Observed problem:** The opt-in full-corpus view renders all 244 nodes as a dense multi-ring radial layout with overlapping labels illegible even at full screenshot resolution. It is followed by a full HTML enumeration of "Nós visíveis"/"Relações visíveis" spanning what is evidently hundreds of rows.
**Evidence:** `10-graph-full-corpus.png`.
**User impact:** The one Graph mode explicitly meant to show the whole picture is the one mode that fails at its own job; a researcher opting into it gets a visual that communicates "there is a lot of data" and little else.
**Design principle:** Cognitive overload; Graph remains supplementary, not a replacement for reading.
**Recommended direction:** This may be a case where the honest answer is not "improve the full-corpus canvas" but "make the full-corpus canvas explicitly a scale/shape overview only" (e.g., minimal/no labels by default, rely on the neighbourhood mode for anything actionable), while keeping the HTML alternative as the real full-corpus reading path with better internal structure (grouping/sorting) than a flat sequential list.
**Constraints:** Do not invent clustering, edge weighting, or hierarchy not present in canonical relationships merely to make the layout "look" organized.
**Disposition:** LIKELY_POST_V1 (neighbourhood-first Graph already covers the validated primary workflow; full-corpus is explicitly opt-in and secondary)

### REDUX-005 — Records table does not survive narrow compression
**Area:** Records, narrow (`12-narrow-record-detail.png` shows the Records table stacked above Detalhes at narrow width)
**Severity:** MEDIUM
**Observed problem:** The 4-column desktop table (ID/Tipo/Rótulo/Ficheiro) is preserved structurally at narrow width rather than adapted; the `Ficheiro` column's full repository paths (`research/assessments/ASM-0001.yaml`) wrap across multiple lines inside a still-multi-column table, producing a cramped, hard-to-scan list.
**Evidence:** `12-narrow-record-detail.png`.
**User impact:** Institutional/general users on a phone attempting the Records workflow face a technically-functional but effortful table; this is "reflows without breaking," which the brief explicitly says is not sufficient.
**Design principle:** Responsive adaptation, not just reflow.
**Recommended direction:** At narrow widths, consider a card/list treatment per record (ID + type badge + label as primary; file path demoted/hidden behind detail) rather than a compressed table. This is a layout decision, not a data-removal one — every field the table has remains one tap away in Detalhes.
**Constraints:** Keep table semantics for the desktop primary workflow; narrow is a secondary experience by design brief.
**Disposition:** LIKELY_V1_VALUABLE

### REDUX-006 — Evidence-pack screenshots do not actually show what the manifest claims
**Area:** Cross-cutting / review-process
**Severity:** LOW (process finding, not a product defect)
**Observed problem:** `05-problem-prb-0006.png` and `06-problem-contradicts.png` are byte-identical, despite the manifest describing 06 as specifically demonstrating the CONTRADICTS contribution "visible." Likewise `04-record-detail.png` and `07-evidence-provenance.png` are identical. This means any distinct UI state the pack intended to prove (e.g., a highlight/scroll-to-anchor for the contradicting evidence item, or an evidence-focused sub-state of Record Detail) cannot be verified from this evidence.
**Evidence:** Manifest hashes / identical pixel content for the two screenshot pairs.
**User impact:** None directly — flags a gap in reviewable evidence rather than a product problem.
**Design principle:** N/A (evidence discipline).
**Recommended direction:** If a distinct "jump to contradicting evidence" or evidence-focused state exists or is planned, capture it separately in the next evidence pack.
**Constraints:** None.
**Disposition:** PREFERENCE_ONLY

### REDUX-007 — "Como ler o Explorer" has no visual signal that it is the onboarding entry point
**Area:** Global shell, all views
**Severity:** MEDIUM
**Observed problem:** The reading guide is a plain collapsed disclosure (`▶ Como ler o Explorer`) styled identically to a generic accordion, positioned identically on every view. Nothing distinguishes it from a settings/help toggle a user might skip. It appears collapsed on every captured deep-link view, including the direct PRB-0006 problem link.
**Evidence:** Present, always collapsed, in `01`, `02`, `03`, `05/06`, `08/09/10`, and narrow equivalents.
**User impact:** A first-time user landing on `PRB-0006` per the brief's stated scenario has no reason to notice, let alone open, the one affordance meant to explain PRB/EVD/ASM/SRC and CONFIRMS/REFINES/CONTRADICTS before reading further.
**Design principle:** Orientation; first-use comprehension.
**Recommended direction:** Distinguish the guide affordance from ordinary disclosure controls (position, framing, or default-open-once-per-session on a first deep link) without turning it into a forced modal/tour. Its actual explanatory content could not be assessed from the evidence pack (always shown collapsed) — see Section 11.
**Constraints:** Must not become a gate blocking use; must not pre-explain the entire research methodology per the brief.
**Disposition:** LIKELY_V1_VALUABLE

### REDUX-008 — Problem View is not represented in the primary navigation
**Area:** Global navigation / Problem View
**Severity:** MEDIUM
**Observed problem:** The top nav shows exactly three tabs — Visão geral, Registos, Grafo. Problem View, reached via a direct URL or a "Ver como Problema" action, has no corresponding tab and no tab is shown as active while in it; wayfinding back is a single "← Voltar aos Registos" link.
**Evidence:** `05-problem-prb-0006.png`, `06-problem-contradicts.png`, `13-narrow-problem.png`.
**User impact:** A user arriving directly on a Problem deep link (the brief's explicit scenario) has one visible cue that they are in a specialised view (the bordered title treatment) but no persistent indication of *where this view sits* relative to Overview/Records/Graph — increasing the "several connected screens" feeling the brief asks to test for.
**Design principle:** Navigation hierarchy; orientation.
**Recommended direction:** Give Problem View a persistent place in the same navigation system as the other three views (even if entered contextually rather than always listed), so global position is always visible regardless of entry path.
**Constraints:** No router replacement — this is achievable within the existing native-URL-state navigation.
**Disposition:** LIKELY_V1_VALUABLE

### REDUX-009 — Terminal error state is appropriately minimal but mixes languages
**Area:** Error/retry state (`11-terminal-error-retry.png`)
**Severity:** LOW
**Observed problem:** The Portuguese UI ("Não foi possível carregar o modelo de leitura gerado", "Tentar novamente") surrounds a raw English technical exception string ("Network error while loading the Explorer manifest: Failed to fetch").
**Evidence:** `11-terminal-error-retry.png`.
**User impact:** Minor inconsistency; does not block recovery (the Retry button works structurally).
**Design principle:** Consistency between application UI language and technical/diagnostic content.
**Recommended direction:** This state's *structure* (title, one-line cause, single retry action, nothing else) should be preserved — see Section 8. Only consider whether the technical cause line needs a PT wrapper sentence around the raw error, not a rewrite of the error itself.
**Constraints:** Do not fabricate a friendlier message that hides real diagnostic content from a maintainer.
**Disposition:** PREFERENCE_ONLY

### REDUX-010 — Graph node/source labels are inconsistently verbose across hops
**Area:** Graph (`08-graph-1-hop.png` vs `09-graph-2-hop.png`)
**Severity:** LOW
**Observed problem:** At 1-hop, all visible nodes are short IDs (`EVD-000033`). At 2-hop, newly revealed SRC nodes carry long descriptive labels in the sidebar list (`[Fonte] SRC-0029 — PUE Sector Report: Habitação e Mercado Imobiliário`) while EVD/PRB entries stay ID-first. This is a real difference in the underlying `summaryFields`/label data, not a bug, but it reads as an inconsistent labelling convention as the graph grows.
**Evidence:** `08-graph-1-hop.png`, `09-graph-2-hop.png`.
**User impact:** Minor scanning friction as neighbourhoods expand.
**Design principle:** Consistency.
**Recommended direction:** Decide one label convention (ID-first with truncated description, always) applied uniformly regardless of node type or hop depth.
**Constraints:** None significant.
**Disposition:** LIKELY_POST_V1

## 4. Core design principles for the next phase

1. **Meaning before metadata.** Every record type gets a small, fixed "what does this say" zone above its exhaustive field list — never the reverse.
2. **Evidence roles must survive visual simplification.** CONFIRMS/REFINES/CONTRADICTS/CURRENT-STATE-UPDATE/EXISTING-SOLUTION must be tell-apart-able at a glance, using only the canonical value already recorded — no invented strength or color-coded confidence.
3. **Provenance stays one step away, never zero and never buried.** A compact "how do we know this" summary belongs near the top; full lineage detail belongs one click/scroll further, not ten fields further.
4. **Technical IDs and schema fields remain complete and available, but always secondary.** Prefixes, file paths, and raw field names are for inspection, not first reading.
5. **Progressive disclosure is layering, not hiding.** Nothing currently visible in generic detail may become unreachable — it may only become quieter until requested.
6. **Graph is for relationships, not for reading records.** Any Graph state that stops being scannable (see full-corpus) has failed its own purpose regardless of how faithfully it encodes canonical edges.
7. **One research environment, not four screens.** Every view — including ones reached only by deep link or contextual action — needs a persistent, visible answer to "where am I."

## 5. Direction by major area

- **Global shell/navigation:** Keep the native-URL-state, no-router approach; extend the same visible-position idea to Problem View entry points, wherever they're triggered from.
- **Overview:** Structurally fine as a corpus-level summary; consider whether the long flat sequence of per-field distribution tables (ASM causal_understanding, EVD evidence_nature, etc.) needs its own internal grouping/priority once more record types exist — not urgent at 5 types.
- **Records:** Preserve the table for desktop (it works: search, type filter, sort are all present and legible in `02`/`03`). Treat narrow as a distinct card-based presentation, not a compressed table.
- **Record Detail:** The single highest-leverage target — apply the meaning-zone/provenance-promotion pattern from REDUX-001/003 here first, since Record Detail is the shared foundation Problem View and Graph both link back into.
- **Problem View:** Structurally close to right (Estado atual → Avaliação → Evidência → Incertezas → Hipóteses is a sound comprehension order). The gap is contribution differentiation (REDUX-002) inside an already-good structure.
- **Evidence/provenance:** Apply REDUX-001/003 patterns; this is the same underlying generic detail component as Record Detail.
- **Graph:** Preserve neighbourhood-first behavior at 1/2-hop (it currently works). Treat full-corpus as a distinct, more constrained design problem rather than "more of the same layout, zoomed out."
- **Narrow/mobile:** Keep Problem View's narrow behavior (it degrades acceptably — see `13-narrow-problem.png`, which reads fine as stacked prose). Redesign Records' narrow presentation specifically; Graph narrow is acceptable at 1-hop only (2-hop/full-corpus narrow states are unverified — see Section 11).

## 6. First-time-user assessment

**Can a person who knows nothing about Open Évora land directly on PRB-0006 and build an accurate mental model of what they are seeing?**

Partially, and with effort disproportionate to what the content requires. The bordered problem title and the "Estado atual" section give an immediate, readable anchor ("Adequate and affordable housing is difficult to access for some population groups" — plain English, no jargon). But immediately below it the reader meets `status: OPEN`, `validation_status: unvalidated`, `evidence_status: corroborated`, `digital_tractability: not_assessed` as bare technical enum values with no inline gloss, before reaching the plain-language summary paragraph. Ten evidence items follow, each requiring the reader to already know that "Contribuição canónica: CONTRADICTS" means something different from "CONFIRMS" — the guide that would explain this exists but is collapsed and not signposted (REDUX-007/008). The smallest concrete gaps blocking an accurate first read: (1) no inline explanation of the four `Estado atual` status enums, (2) no visual differentiation of evidence contribution roles, (3) no visible cue that a reading guide exists and matters *before* reading the evidence list.

## 7. Responsive assessment

Narrow states are real single-column stacking (confirmed via `12`/`13`/`14`), not merely a shrunk desktop screenshot — Detalhes drops below the Records list, the Problem sections stack as vertical prose blocks, and Graph controls stack above the canvas. Problem View narrows well. Records' table does not (REDUX-005). Graph narrow is only evidenced at 1-hop; 2-hop and full-corpus narrow states were not captured (Section 11).

## 8. Areas to preserve

- **Problem View's section order** (Estado atual → Avaliação → Evidência → Incertezas e lacunas → Hipóteses) — already meaning-before-metadata in its bones; don't restructure, refine.
- **The terminal error/retry state's minimalism** (`11-terminal-error-retry.png`) — one heading, one cause line, one action. Resist adding decoration or multiple recovery paths here; this is a case where plain is already correct.
- **Graph's 1-hop and 2-hop neighbourhood behavior** — legible, faithful to canonical direction/labels, appropriately supplementary. Do not add semantic color-coding or edge weighting to "improve" it.
- **Records' desktop table** (search + type filter + sort, `02`/`03`) — functionally clear; no card redesign needed at desktop width.

## 9. Complexity traps

- **Do not build a second, mobile-specific interaction model for Graph.** The brief and the evidence agree: neighbourhood mode already works narrow; the problem is full-corpus at any width, not narrow-specific.
- **Do not solve REDUX-002 with a color-coded "confidence" or "strength" visualization.** The canonical model has no strength dimension for contribution type; a color scale would invent one. A plain, consistent text-tag treatment is sufficient and stays faithful.
- **Do not turn "Como ler o Explorer" into a mandatory onboarding modal/tour.** The brief explicitly says the interface doesn't need to teach the full methodology upfront; a forced walkthrough would overcorrect past the actual gap (signposting, not mandatory instruction).
- **Do not attempt to make the full-corpus Graph canvas legible by adding clustering or hierarchy.** That would cross directly into inventing semantic clusters the brief prohibits. The honest fix is scope reduction (treat it as a shape/scale overview) or reliance on the HTML alternative, not a smarter layout algorithm.

## 10. Prototype-phase recommendation

Minimum representative set to validate the direction without prototyping the whole application:

1. **Record Detail** (generic, using EVD-000127) — validates REDUX-001/003, the meaning-zone + provenance-promotion pattern, since Problem View and Graph both depend on the same underlying detail rendering.
2. **Problem View** (PRB-0006) — validates REDUX-002 (contribution differentiation) inside the already-sound section structure, and validates REDUX-007/008 (guide signposting, view-position orientation) on the exact page the brief's first-time scenario names.
3. **Records, narrow only** — validates REDUX-005's card-vs-table direction; desktop Records needs no prototype (already sound).
4. **One Graph state** — the 1-hop/2-hop neighbourhood view (already good) is lower priority to prototype than deciding what full-corpus should actually show; if only one Graph state is prototyped, make it the full-corpus decision (REDUX-004), since that's the only unresolved Graph question.

Questions the prototype must answer before any reusable pattern is extracted: does a lightweight contribution-tag treatment stay legible and non-hierarchical across all five contribution values; does promoting provenance above the full field list still leave technical completeness undiminished for the maintainer audience; does a card-based narrow Records view retain the same filter/search capability as the table; and what, concretely, should full-corpus Graph communicate if not the individual relationships (scale only? type distribution only?).

Do not prototype Overview or the terminal error/retry state — both are already validated as sound by this review (Section 8).

## 11. Insufficient-evidence items

`INSUFFICIENT_DESIGN_EVIDENCE`:
- The actual content/quality of "Como ler o Explorer" could not be assessed — it is collapsed in all 14 screenshots. Would need at least one screenshot of its expanded state.
- Whether `06-problem-contradicts.png` was meant to show a distinct highlighted/scrolled state for EVD-000127 could not be confirmed — it is pixel-identical to `05-problem-prb-0006.png` (REDUX-006).
- Narrow Graph behavior at 2-hop and full-corpus scale was not captured (only narrow 1-hop, `14-narrow-graph.png`); the full-corpus legibility problem (REDUX-004) may be materially worse at ~360px, but this is not directly evidenced.
- No screenshot shows Overview's `Registos por tipo`/distribution tables at narrow width; narrow Overview behavior is unassessed.

## 12. Recommended next decision

Route this register to owner triage next. On current evidence, the disposition split leans toward: REDUX-002 (LIKELY_V1_CRITICAL) as the one item that should not wait, REDUX-001/003/005/007/008 as strong v1 candidates that share a small number of underlying patterns (meaning zone, provenance promotion, guide signposting, view-position orientation, narrow Records treatment), and REDUX-004/010 as legitimately deferrable given Graph's primary neighbourhood workflow already works. Proceed to the representative prototype set in Section 10 before extracting any reusable pattern language.

---

`DESIGN_REVIEW_READY_FOR_OWNER_TRIAGE`
