# Research Explorer — Representative Prototype Rationale

**Mode:** Prototype only. No production React/CSS modified. No Design System created.
**Scope:** three representative screens (Prototype A, B, C) resolving the MUST_FIX / SHOULD_FIX findings from Owner Triage. POST_V1 findings (REDUX-004, -009, -010) were deliberately not prototyped.
**Revision:** updated per Owner Validation decision `APPROVE_WITH_REVISIONS` — see "Owner Validation revisions" section below for exactly what changed and why.

## Design direction

The Explorer's subject is analytical reading over provenance-bearing records, not a transactional dashboard. The prototypes use a "paper and apparatus" direction: a warm, low-chroma paper background, a serif reading role reserved for the actual canonical content a human is meant to read (titles, observation summaries, problem statements), a plain sans role for interface chrome, and a monospace role reserved exclusively for technical vocabulary — IDs, file paths, field names, canonical enum values. This three-role split is itself the primary hierarchy device: readers can tell "this is what the record says" from "this is the record's technical shape" by typeface role alone, before reading a word. One quiet accent marks interactive/navigational elements only. No gradients, no card-with-left-border pattern, no dashboard chrome.

**Owner-approved status:** the serif/sans/mono *role* concept is an approved design direction. The specific families used to illustrate it in these files (Source Serif 4 / Inter / IBM Plex Mono, delivered via Google Fonts) are **not** approved production dependencies — they are placeholders chosen only to make the role split legible for review, per Owner Validation. Exact font families, palette values, and spacing remain open implementation/foundation decisions. Each prototype file now carries an inline note to this effect.

## Relationship to approved findings

- **REDUX-001** (schema before meaning) → Prototype A: a "meaning zone" (type badge, plain-language observation, contribution) sits above the fold; the full ~24-field schema moves into a single `<details>` disclosure, grouped by purpose (Identificação / Geografia / Natureza / Privacidade / Proveniência / Análise canónica / Notas) instead of one flat alphabetical list. Nothing is removed — the disclosure defaults open in this prototype to make the full inventory inspectable in one view; whether it should default open or closed is left as an open decision (see Unresolved).
- **REDUX-002** (contribution roles undifferentiated) → Prototype B: the full canonical seven-value `analysis.contribution` enum (`CONFIRMS`, `REFINES`, `CONTRADICTS`, `CURRENT-STATE-UPDATE`, `EXISTING-SOLUTION`, `PLANNED-SOLUTION`, `NEW-CANDIDATE` — confirmed against `research/schemas/evidence.schema.json`) each gets a fixed glyph + label chip, identical in border weight, size, and background across all seven — differentiated only by glyph shape and text, never by color, border weight, or emphasis, so no value reads as "better," "worse," or more important. PRB-0006's evidence only exercises five of the seven; the other two (`PLANNED-SOLUTION` ◇, `NEW-CANDIDATE` ✧) are shown in the legend precisely to demonstrate the pattern is not hardcoded to the five values visible in this one problem. A legend strip at the top of the Evidência section reports contribution *occurrences* already present on each item (no invented scoring), explicitly labelled as occurrences rather than an evidence-item count, since one evidence record may legitimately carry more than one contribution value.
- **REDUX-003** (provenance buried) → Prototype A: a compact "Proveniência" panel (origin, retrieval date, relationship counts) sits immediately after the meaning zone, with a same-page anchor link down to the exact `via <field>[index]` reference paths for anyone who needs them.
- **REDUX-007** (first-use vocabulary) → Prototype B: a single collapsed `<details>` disclosure directly under the breadcrumb explains "what is a Problem" plus the four status/lifecycle fields visible in Estado atual, each paired with its canonical value. Every gloss was checked against `research/schemas/problem.schema.json`, `docs/models/problem-model.md`, and `docs/models/evidence-model.md` before wording; where those sources gave an authoritative definition it is paraphrased (OPEN, unvalidated); where they did not, the gloss says so explicitly rather than inventing one (see "Glosses that could not be canonically grounded" below). Estado atual itself shows a plain-language gloss alongside (not instead of) each canonical enum.
- **REDUX-008** (Problem View has no persistent orientation) → Prototype B: a per-record context switcher (Detalhe · Problema · Grafo) below the breadcrumb replaces the idea of a global fourth tab. It travels with whatever record is focused, so orientation ("where am I, and how do I reach the other views of this same record") is answered the same way regardless of entry path — including a direct PRB-0006 deep link.
- **REDUX-005** (narrow Records compresses) → Prototype C: the four-column table becomes a single-column list of rows; each row leads with the human-readable label (primary), keeps the technical ID as a small secondary line (never removed), and drops the file path from the scanning list (it remains one tap away in Detail). Search and type filter remain full-width, immediately visible controls. Every row is ≥44px tall.

## Owner Validation revisions

Decision: `APPROVE_WITH_REVISIONS`. Changes made in this pass:

1. **Prototype A** — the full-field technical disclosure now defaults **closed** (was open). No audience/referrer-conditional disclosure behavior was added (none had been implemented; the earlier "Unresolved decisions" entry speculating about this is removed below). An inline note now states that the illustrated fonts/palette are not approved production dependencies.
2. **Prototype B, emphasis** — removed the exceptional 2px border, bold weight, and tinted background previously applied to the EVD-000127/CONTRADICTS card. All ten evidence items, including EVD-000127, now share identical structural weight (1px border, same padding, same background). CONTRADICTS remains distinguishable only through its glyph (✕) and text label, matching every other contribution chip's styling exactly.
3. **Prototype B, glosses** — rewrote the "what is a Problem" disclosure's status definitions against the actual schema/model documents (see "Glosses that could not be canonically grounded" below). The `corroborated` gloss no longer claims independent-source corroboration; it states only its position in the two-value `evidence_status` enum and flags that its precise criterion is undocumented in the models consulted.
4. **Prototype B, contribution genericity** — the legend now shows all seven canonical `analysis.contribution` values (adding `PLANNED-SOLUTION` ◇ and `NEW-CANDIDATE` ✧, confirmed against the evidence schema), with an explicit note that PRB-0006 only exercises five of them and the pattern is not assumed to stop there.
5. **Prototype B, counts** — the legend header now reads "10 itens de evidência · 13 ocorrências de contribuição" with an explicit note that occurrences do not sum to the evidence-item count, since one evidence record can carry more than one contribution value.
6. **Prototype B, context switcher** — left unchanged: it was already scoped only to Problem View / PRB-0006 and was never generalized to a global or generic-record-type pattern. Prototype A's right rail continues to use plain contextual action links ("Ver como Problema," "Ver no Grafo"), not a switcher, for non-PRB records — this is unchanged and is the intended non-generalized behavior.
7. **Prototype C** — no design changes (approved as-is). Rationale clarified below that its sample row count and "Página 1 de 49" figure are illustrative placeholders, not a proposed change to production pagination or page-size.

### Glosses that could not be canonically grounded

- **`corroborated`** (`evidence_status`) — the schema (`research/schemas/problem.schema.json`) only lists the two-value enum `discovered | corroborated` with no prose definition of what distinguishes them, and no model document defines a specific criterion (e.g., independent-source count) for `corroborated`. The prototype gloss now states only its ordinal position and flags that the exact criterion requires a canonical definition — it does **not** claim independent sourcing.
- **`CONFIRMS`, `REFINES`, `CURRENT-STATE-UPDATE`, `NEW-CANDIDATE`** (`analysis.contribution`) — `docs/models/evidence-model.md` and the D3 execution protocol give authoritative prose definitions for `CONTRADICTS`, `EXISTING-SOLUTION`, and `PLANNED-SOLUTION` only. The other four values appear only as enum members and as a general statement that "these are analytical labels, not prevalence measures" (`docs/discovery/d2-execution-protocol.md`). The prototype does not invent individual definitions for these four beyond their literal label; a production reading guide would need the project owner or `docs/discovery/d3-execution-protocol.md` §4 (not fully reviewed in this pass) to supply or confirm precise wording before publishing per-value glosses for them.
- **`OPEN`** (`status`) — no prose definition exists beyond the enum list; the gloss used here (defined only negatively, as "not yet one of the five terminal outcomes") is a direct, minimal paraphrase of the schema's own enum structure, not an invented interpretation.

## Decisions made

- Contribution and status vocabulary are always shown as canonical-value-plus-gloss pairs, never gloss-only and never canonical-only — satisfies "technical completeness without technical dominance" without hiding the source vocabulary a maintainer needs.
- The record-context switcher (Detalhe/Problema/Grafo) is scoped to a focused record, not a permanent global nav item — it does not compete with Visão geral/Registos/Grafo, it nests under whichever of those a record was reached through.
- The evidence contribution legend counts are computed from data already present on each evidence item (a tally, not an inference) — no new semantics introduced.
- Grouped technical fields in Prototype A use the same field names and values as the current generic detail — presentation grouping only, no renaming, no canonical restructuring.

## Unresolved decisions

- Owner Validation settled the full-field `<details>` default to **closed** for v1; no adaptive/referrer-based behavior is proposed.
- Whether the per-record context switcher should also appear on generic Record Detail (not just Problem View), or whether Detail's existing "Ver como Problema"/"Ver no Grafo" links already serve the same purpose there, remains open — per Owner Validation, the switcher stays PRB-scoped only for now, so this question is deliberately deferred rather than resolved by generalizing.
- The exact wording/scope of the single "what is a Problem" disclosure for other record types (e.g., an equivalent for generic Evidência/Fonte detail) was not designed — Prototype A instead uses a smaller single-sentence type gloss in its right rail; whether that is sufficient or needs the same disclosure treatment as Problem View is untested.
- Authoritative one-line definitions for `CONFIRMS`, `REFINES`, `CURRENT-STATE-UPDATE`, and `NEW-CANDIDATE` do not yet exist in the documents reviewed — needed before any production reading-guide copy is finalized for these four values.
- The precise distinguishing criterion for `evidence_status: corroborated` vs `discovered` is undocumented — needed before that gloss can say anything beyond ordinal position.

## Candidate design foundations / patterns

`CANDIDATE_DESIGN_FOUNDATIONS`
- Three-typeface hierarchy convention: serif = canonical human content, sans = interface chrome, monospace = technical/schema vocabulary.
- Paper/ink neutral palette with one restrained interactive accent color.

`CANDIDATE_REUSABLE_PATTERN`
- **Meaning-zone + grouped technical disclosure** — applicable to any record type's detail view, not just Evidência.
- **Contribution/role chip** (glyph + label, uniform weight, no color ranking, generic to all 7 canonical values) — applicable anywhere canonical closed-vocabulary values need to be scannable without implying quality (also usable for future record-type-specific vocabularies).
- **Per-record context switcher** (Detalhe · Problema · Grafo, scoped to focused record) — a candidate answer to "where am I" that could generalize beyond Problem View.
- **Inline canonical-value-plus-gloss pairing** — a general convention for presenting any enum field (status, validation, contribution) without hiding the source vocabulary.
- **Narrow record row** (label-primary, ID-secondary, path-deferred, ≥44px) — applicable to any record list at narrow width, not just Records.

None of the above is a final token, API, or component spec — each needs owner validation before formalization.

## Accessibility considerations

- Chip/tag distinctions rely on glyph shape + always-visible text label, never color alone.
- The "what is a Problem" and per-field-group disclosures use native `<details>/<summary>`, which is keyboard-operable and screen-reader-exposed without custom JS.
- The context switcher and evidence links are real focusable `<a>`/interactive elements, not `div`-with-click-handler.
- Narrow row targets are sized ≥44px per the stated touch-target minimum.
- Headings retain a plain hierarchy (`h1` problem title, section labels as visually-styled labels above grouped content) rather than relying on visual weight alone to convey structure — a full implementation would confirm this with real heading levels, which a static prototype file cannot fully verify.

## Prototype C clarification

The five sample rows and the "Página 1 de 49" footer shown are illustrative placeholders to demonstrate the adapted row layout at a plausible scale — they are not a proposal to change production pagination, page size, or the 244-record corpus's actual page count. No change to Records' pagination/page-size contract is proposed by this prototype.

## What deliberately remains unchanged

- Problem View's section order (Estado atual → Avaliação → Evidência → Incertezas e lacunas → Hipóteses) — carried over unmodified per the brief.
- The existing Reading Guide's conceptual content (ASM/EVD/HYP/PRB/SRC, Entradas/Saídas, `via` reference-path notation, "a reference alone implies nothing," Graph direction/type semantics) — treated as the deeper reference, linked to, not duplicated.
- Records' desktop table — not touched; only the narrow (~360px) presentation was redesigned, per SHOULD_FIX_FOR_V1 scope.
- Graph is not redesigned in any state; full-corpus legibility (REDUX-004) is explicitly out of scope for this phase.
- No canonical field, value, or relationship was renamed, summarized, or reordered in meaning — only regrouped/re-weighted visually.

## Validation-question results

- **Record Detail:** Yes — the plain-language observation and contribution sit above the fold, before any schema/file-path mechanics are visible.
- **Provenance:** Yes — exact reference paths (`via analysis.related_problems[0]`) remain fully reachable one anchor-link away; nothing is summarized out.
- **Problem comprehension:** Yes, with a caveat — EVD-000127's CONTRADICTS chip is now styled identically to every other item's chip (per Owner Validation, no exceptional emphasis), so distinguishability relies solely on the glyph/label and the aggregate occurrence legend at the top of the section, not on card-level emphasis. This was not tested with real first-time users, so the "zero-context" claim is a design judgment, not measured.
- **Contribution semantics:** Yes — all seven canonical values (five shown as active in PRB-0006, two shown in the legend only) share identical chip styling (border, size, background); only glyph and label differ, none is color-coded by "positivity," and EVD-000127/CONTRADICTS now carries no exceptional card emphasis relative to the other nine items.
- **Orientation:** Partially — the breadcrumb and context switcher answer "where am I" and "how do I reach Records/Graph for this same record" for a PRB-0006 deep link. Whether this reads as clearly as a persistent top-level tab would, for a genuinely first-time visitor, is unresolved without user testing.
- **Reading Guide:** Yes for the specific gaps named in triage (contribution vocabulary, status vocabulary) — both now have inline gloss/disclosure at point of use; the full guide remains the deeper reference and is not duplicated.
- **Narrow Records:** Yes — label-first, ID-secondary, path-deferred, ≥44px rows meaningfully change what a reader scans first, rather than shrinking the same four columns.

## Owner validation

### Overall
`OWNER_APPROVED_FOR_V1_DIRECTION`

### Approved
- "paper and apparatus" structural direction
- meaning-zone before technical inspection
- compact provenance summary
- grouped technical disclosure
- technical disclosure defaults closed
- contribution glyph + canonical label with uniform visual weight
- canonical-value + human-gloss pattern, only where the gloss is canonically grounded
- PRB-scoped Detalhe / Problema / Grafo context switcher
- narrow Records row/list adaptation
- typography roles: serif for canonical human-readable content; sans for application chrome; monospace for IDs/schema/technical vocabulary

### Explicitly not yet approved as final foundations
- exact font families
- Google Fonts or any external font delivery
- exact palette values
- spacing tokens
- component APIs
- generic context switcher for all record types

### Deferred
- generic Detail context switcher
- specialized explanatory disclosure for every record type
- REDUX-004 full-corpus Graph
- REDUX-009 diagnostic-language polish
- REDUX-010 Graph label convention

### Semantic constraint
Do not invent missing canonical definitions. Where no authoritative explanation exists for a status or contribution value, preserve the canonical value without manufacturing a human gloss. Currently unresolved semantic definitions:
- exact `corroborated` vs `discovered` distinction
- authoritative prose for `CONFIRMS`
- `REFINES`
- `CURRENT-STATE-UPDATE`
- `NEW-CANDIDATE`

These semantic-definition gaps do NOT block the approved visual pattern or Local Explorer v1.

---

`DESIGN_PROTOTYPE_READY_FOR_OWNER_VALIDATION`
