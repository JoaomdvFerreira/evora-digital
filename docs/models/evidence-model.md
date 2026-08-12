# Evidence Model

**Identifier prefix:** `EVD-`

## Purpose

Evidence records preserve individual observations and their provenance.

They do not represent validated city-wide facts by themselves.

## Draft schema

```yaml
evidence_id: EVD-000001

type:
  institutional | statistical | formal-public |
  social | press | stakeholder | observation

source:
  publisher: ""
  title: ""
  source_reference: ""
  published_at: null
  retrieved_at: ""

geography:
  level: city | parish | municipality | intermunicipal | regional
  area: ""

population: []

domain: []

observation:
  summary: ""

evidence_nature:
  fact | reported-experience | opinion |
  claim | measurement | recommendation

strength:
  primary-authoritative |
  primary-non-authoritative |
  secondary |
  anecdotal

personal_data:
  present: false
  retained: false

notes: ""

# Optional (D3, v1.1) — see docs/discovery/d3-execution-protocol.md §4
analysis:
  related_problems: []
  contribution: []
    # CONFIRMS | REFINES | CONTRADICTS | CURRENT-STATE-UPDATE |
    # EXISTING-SOLUTION | PLANNED-SOLUTION | NEW-CANDIDATE
  friction_types: []
    # INFORMATION | COORDINATION | TRANSACTION | OPERATIONAL |
    # PHYSICAL | REGULATORY | OTHER
  public_signal_class: null   # PS1 | PS2 | PS3 | PS4 | PS5 | PS6
  lineage_id: null
  representativeness: null    # UNKNOWN | LIMITED | DESIGNED_REPRESENTATIVE | NOT_APPLICABLE
  verification: null          # REPORTED | CORROBORATED | VERIFIED | UNKNOWN | NOT_APPLICABLE
  temporal_relevance: null    # CURRENT | HISTORICAL | SUPERSEDED | UNKNOWN
```

## Optional `analysis` block (D3)

`analysis` and every field inside it are optional and populated lazily — only when a field materially supports an active `ASM-*` assessment, never as a retroactive full-corpus backfill.

Deliberately **not** part of `analysis`:

- **per-record `independence`** — independence is relational, not a property of one evidence record in isolation. Use `analysis.lineage_id` to group records that share an underlying evidence-generating study/event/dataset, and assess problem-level independence in the linked `ASM-*`'s `evidence_confidence.independence`.
- **`directness`** — relative to a specific problem, and ambiguous once one record relates to multiple `PRB-*` via `related_problems`. Assessed per-problem in `ASM-*` instead.
- **`COVERAGE-GAP`** as a `contribution` value — "no strong signal found" / method-saturation findings are research/assessment findings, not atomic positive evidence about one record. Record them in an `ASM-*`, a progress/closure document, or a decision-gap report.
- **`LOW-DIGITAL-LEVERAGE`** as a `contribution` value — digital leverage is a synthesis/tractability judgement belonging to `ASM-*.digital_leverage`, not an atomic evidence record.

`CONTRADICTS` (clarified `WU-D3-03`) means the record contradicts a material proposition, framing, causal claim, or current-state assumption relevant to the linked `PRB-*` — it does not automatically mean the whole problem is false. If the contradiction is narrower than the whole problem, the contradicted proposition must be identifiable from the record's own `observation`/`notes` or from the linked `ASM-*`; if a record relates to multiple problems and the contradiction applies differently to each, do not tag `CONTRADICTS` on the record at all — record it at `ASM-*`/problem level instead. See `docs/discovery/d3-execution-protocol.md` §4.1a.

`EXISTING-SOLUTION` (an operating/delivered solution or service already exists) is distinct from `PLANNED-SOLUTION` (added `WU-D3-03`: a formally planned/committed/in-delivery response that is not yet established as operating and available to the affected journey). Neither implies effectiveness — whether a solution actually closes the gap is an `ASM-*.remaining_gap` question. See `docs/discovery/d3-execution-protocol.md` §4.1b.

See `docs/models/assessment-model.md` for the `ASM-*` Problem Assessment this metadata feeds.

## Interpretation rules

`evidence_nature` and `strength` are separate dimensions.

Example:

A traveller can be a primary source for:

> I waited 45 minutes.

The same statement is not sufficient evidence for:

> Average waiting time is 45 minutes.

## Evidence is append-only conceptually

Corrections should preserve the fact that an earlier observation existed where practical, while marking it corrected, superseded, or invalidated rather than silently rewriting research history.

## D5 engagement evidence capture

Canonicalized as part of the D5 Execution Strategy (`docs/discovery/research-methodology.md` §D5). The existing `type: stakeholder` and `type: observation` values already cover D5 engagement evidence — no new engagement schema or record type is introduced.

### Engagement lineage

One engagement (interview, operator meeting, written response) may yield multiple atomic `EVD-*` records. All records from the same underlying interaction must share one explicit `analysis.lineage_id`, e.g. `D5-ENG-001`, so multiple findings from one conversation are never counted as independent corroboration.

### Private direct engagement source

For a private primary engagement, `EVD.source.source_id` may be omitted when no public `SRC-*` exists. Use a sanitized descriptor instead of a fake public URL, for example:

```yaml
type: stakeholder
source:
  publisher: "Open Évora"
  title: "D5 stakeholder engagement — transport passenger"
  source_reference: "D5-ENG-001 — private research note, not public"
  published_at: null
  retrieved_at: "2026-..."
```

Never create a fake public URL for a private engagement. Do not add a `SRC-*` merely for symmetry when the existing Data Source Model cannot cleanly represent a private engagement. If a stakeholder supplies a real document/dataset/process artefact, canonicalize that artefact separately using the normal source rules (`docs/models/data-source-model.md`).

### Evidence semantics for direct engagement

Direct lived experience normally maps to `evidence_nature: reported-experience`, `strength: primary-non-authoritative`, `analysis.representativeness: LIMITED`, `analysis.verification: REPORTED`, unless the specific evidence justifies another value. An accountable operator may be `primary-authoritative` only for operational facts they actually own — operator authority does not make resident-prevalence claims authoritative.

### Observation

`type: observation` remains bounded to project-observed journey/location/system state: record date, location/context, limitations, and what was not tested. One observation does not imply city-wide prevalence.
