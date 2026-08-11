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
    # EXISTING-SOLUTION | NEW-CANDIDATE
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
