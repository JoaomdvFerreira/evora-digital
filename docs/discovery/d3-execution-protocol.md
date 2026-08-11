# D3 Execution Protocol — Problem Map v1 & Decision Baseline

**Version:** 0.1
**Status:** Approved — canonicalized design, not yet implemented
**Basis:** D3 Analytical Foundation v1.1, reconciled against the closed D2 corpus (193 canonical records)
**Precondition:** D2 — Public Signal Discovery is CLOSED (81 SRC, 103 EVD, 9 PRB, 0 HYP; 193 records validated; `docs/milestones/D2-WU06-closure.md`)

This protocol canonicalizes the D3 analytical **design** at documentation level. It does not implement schemas, validator support, or an analyzer — that implementation is the scope of `WU-D3-01`. No `ASM-*` record, `EVD.analysis` field, or analyzer script exists in the repository as a result of this document; the field shapes below are a documentation-only contract for that later implementation to follow.

## 1. Objective

D3 transforms the D1/D2 evidence corpus into a proportionate, auditable decision baseline for every canonical active `PRB-*`, without prematurely selecting a solution or a civic product.

> For each active problem: what do we know, how confident are we, what don't we know, and should the problem stop, wait, deepen, or proceed?

## 2. Canonical architecture

```text
SRC → EVD(+analysis) → PRB → ASM → HYP → Experiment → Project → Outcome
```

- YAML under `research/` remains the sole canonical truth.
- Graphify remains optional, derived, disposable retrieval — never canonical, never indexing `docs/` (per `docs/discovery/research-methodology.md` §10).
- Any generated analyzer output remains derived/non-canonical and is never treated as a source of fact on its own.

## 3. Progressive Assurance

Every canonical active `PRB-*` receives an `ASM-Lite` Problem Assessment (§5), but only after the three-problem pilot (§8) is explicitly adopted or approved-with-modification. Heavier analytical or research methods (formative research, systems mapping, an evidence-gap matrix) are escalated only when a named decision gate or critical unknown cannot be resolved without them — never applied by default, and never repeated per problem merely for thoroughness.

No global numeric problem score is produced at any point. `ASM-*` fields are qualitative/categorical (`UNKNOWN`, `LIMITED`, `NOT_ASSESSED`, etc.), not a ranking mechanism.

## 4. `EVD.analysis` — optional evidence metadata (v1.1)

`analysis` is an **optional** block on `EVD-*` records, populated lazily (only when it materially supports an active assessment), not retroactively backfilled across the full corpus.

```yaml
analysis:
  related_problems:
    - "PRB-0001"
  contribution:
    - "CONFIRMS"      # CONFIRMS | REFINES | CONTRADICTS | CURRENT-STATE-UPDATE | EXISTING-SOLUTION | NEW-CANDIDATE
  friction_types:
    - "OPERATIONAL"    # INFORMATION | COORDINATION | TRANSACTION | OPERATIONAL | PHYSICAL | REGULATORY | OTHER
  public_signal_class: "PS1"
  lineage_id: "MOB-2026-03-19-UE-STUDENT-PROTEST"
  representativeness: "UNKNOWN"   # UNKNOWN | LIMITED | DESIGNED_REPRESENTATIVE | NOT_APPLICABLE
  verification: "REPORTED"        # REPORTED | CORROBORATED | VERIFIED | UNKNOWN | NOT_APPLICABLE
  temporal_relevance: "CURRENT"   # CURRENT | HISTORICAL | SUPERSEDED | UNKNOWN
```

### 4.1 Explicitly excluded from `EVD.analysis`

- **`independence`** — not a per-record scalar. Independence is relational and cannot be assessed on one evidence record in isolation. Use `lineage_id` for deterministic grouping, and assess problem-level evidence independence inside `ASM.evidence_confidence.independence` (§5).
- **`directness`** — relative to a specific analytical question/problem; ambiguous once one `EVD-*` relates to multiple `PRB-*`. Assessed in `ASM` instead, per problem.
- **`COVERAGE-GAP`** as a `contribution` value — "no strong signal found" and method-saturation findings are research/assessment findings, not atomic positive evidence. Record them in `ASM`, progress/closure documents, or a decision-gap report, never as an `EVD-*` contribution.
- **`LOW-DIGITAL-LEVERAGE`** as a `contribution` value — digital leverage is a synthesis/tractability judgement belonging in `ASM.digital_leverage` (D3) or D6, not on an atomic evidence record.

### 4.2 Evidence lineage rule

`lineage_id` denotes a shared underlying evidence-generating study, event, dataset, process, or primary information lineage, for the sole purpose of preventing false independent corroboration. For example: multiple findings drawn from the same caregiver questionnaire/focus-group programme share one lineage; two separate publications covering the same enforcement event share one event lineage (and should generally already be one `EVD-*` with `additional_sources`, per existing D1/D2 practice); a petition and a later, distinct municipal response are different evidence-generating events and may carry distinct lineages.

The (future) analyzer may count unique known lineages. Records without a `lineage_id` are `UNASSESSED` for lineage-based counts — lineage must never be inferred semantically by tooling.

## 5. `ASM-Lite` — Problem Assessment

One active `ASM-*` per canonical active `PRB-*`, created only after the pilot gate (§8).

```yaml
assessment_id: "ASM-0007"
problem: "PRB-0007"
as_of: "2026-..."
phase: "D3"
assessment_status: "DRAFT"

evidence_confidence:
  overall: "UNKNOWN"
  independence: "UNKNOWN"
  coherence: "UNKNOWN"
  adequacy: "UNKNOWN"
  relevance: "UNKNOWN"
  currentness: "UNKNOWN"
  contradiction_status: "UNKNOWN"
  stakeholder_validation: "PENDING"

civic_importance:
  reach: "UNKNOWN"
  frequency: "UNKNOWN"
  severity: "UNKNOWN"
  persistence: "UNKNOWN"
  equity: "UNKNOWN"

journey_understanding: "UNKNOWN"
causal_understanding: "UNKNOWN"
existing_solution_understanding: "UNKNOWN"
remaining_gap: "UNKNOWN"
digital_leverage: "NOT_ASSESSED"

structure_action: "KEEP"

decision_gates:
  problem_real: "UNKNOWN"
  civic_importance: "UNKNOWN"
  journey_understood: "UNKNOWN"
  root_cause_understood: "UNKNOWN"
  remaining_gap_supported: "UNKNOWN"
  digital_causality: "NOT_ASSESSED"
  operability: "NOT_ASSESSED"
  testability: "NOT_ASSESSED"

critical_unknowns:
  U1:
    question: ""
    decision_impact: "HIGH"
    target_phase: "D3"
    best_next_evidence:
      - ""

triage: "DEEPEN"
next_action: ""
notes: ""
```

### 5.1 `existing_solution_understanding` (renamed from `existing_solution_coverage`)

This field records how well the project **understands the current solution landscape** for a problem (what exists, who operates it, whether the target population knows it). It is distinct from whether an existing solution **actually closes the gap** — that judgement belongs under `remaining_gap`. The earlier name (`existing_solution_coverage`) is retired because "coverage" was ambiguous between these two questions.

### 5.2 Decision routing

`triage` takes one of:

- `STOP` — evidence/importance/leverage do not currently justify further D3 investment; a legitimate, closeable outcome, not a failure.
- `WATCH` — no current action, but the problem should be re-examined if new evidence emerges (e.g. `PRB-0009`-style operational conditions that may change).
- `DEEPEN` — a named decision gate is blocked by a critical unknown; requires the cheapest credible next-evidence method (§7), not automatically the heaviest one.
- `PROCEED` — sufficient understanding exists to hand the problem to D4 (existing-solutions/gap analysis) or D5 (formal validation).

Unknown remains `UNKNOWN` — it is never silently converted into an assumed fact to force a `PROCEED`.

## 6. Analyzer constraints

A deterministic analyzer over canonical records is in scope for `WU-D3-01`, subject to hard constraints carried into that implementation:

**Allowed:** counts; known-lineage counts; metadata completeness; state distributions (e.g. triage/gate-status tallies); explicit contradiction/gate/unknown reporting.

**Forbidden:** semantic inference; automatic causality; prevalence inference; automatic triage assignment; any numeric confidence or problem score.

The analyzer's output is a derived report, not a canonical record, and never overrides a human/project-owner judgement recorded in an `ASM-*`.

## 7. Method escalation (D3 research methods)

Optional, gate-triggered only — never default, never applied uniformly across all problems:

- **Formative user/stakeholder research** — only when a journey/root-cause/remaining-gap gate cannot be resolved credibly without contact with affected people or operators. This is D3, not D5 (see §9 and `docs/discovery/research-methodology.md` §2.3).
- **Systems mapping** — only when actor relationships, feedback loops, or cross-domain effects materially change the diagnosis.
- **Evidence-gap matrix** — only when the next evidence action is otherwise unclear.
- **Comparative / "What Works" research** — primarily a D4 activity, reserved for opportunities that survive D3; not a default D3 method.

## 8. Three-problem pilot & framework gate

Before `ASM-Lite` is rolled out to any other problem, the framework is stress-tested against three problems chosen for structurally different failure modes:

- **`PRB-0002`** — structural split (passenger-information quality vs. developer/data interoperability) and an existing-solution correction.
- **`PRB-0007`** — mixed service/capacity vs. navigation causation, lineage-aware evidence confidence, and formative-research routing under the D3/D5 split (§9).
- **`PRB-0009`** — a strong civic problem with a well-evidenced current-state evolution and low core digital leverage; tests the framework's ability to `STOP`/deprioritize a build while still preserving narrow data/coordination leads.

The pilot ends with an explicit, recorded decision:

- **`ADOPT`** — proceed to remaining-problem rollout (`WU-D3-04`) as designed;
- **`MODIFY`** — adopt with named, recorded framework changes before rollout;
- **`REJECT`** — the framework does not work as designed; do not roll out `ASM-Lite` further without redesign.

No problem other than these three receives an `ASM-*` before this gate resolves.

## 9. D3 vs D5 — formal reconciliation

See `docs/discovery/research-methodology.md` §2.3 for the full methodology text. Summary for D3 execution purposes:

- **D3 formative research** understands what happens today (journey, failure points, workarounds, consequences, causal explanations) and may occur before any `HYP-*` exists.
- **D5 formal challenge/validation** tests the D3-produced diagnosis — actively seeking counterexamples/negative cases — and updates formal `validation_status`. It also does not require a solution `HYP-*` to exist; D5 validates the *problem*, not a proposed *solution*.

"Hypothesis" in a D5 context means the evidence-backed problem diagnosis under challenge, not a solution `HYP-*` record, unless explicitly stated otherwise.

## 10. Structural decisions owned by D3

A dedicated structural review — not a rolling, per-WU relitigation — resolves the open taxonomy questions carried from D2. It runs once, in `WU-D3-03`, after the pilot gate (§8):

- **Road-maintenance `NEW-CANDIDATE`** (`EVD-000082`, `EVD-000083`, `EVD-000084`) — promote to a new canonical `PRB-*`; merge into an existing `PRB-*` only if the failure mechanism is materially the same; or archive/reject as a standalone problem. No `ASM-*` is created for it before promotion.
- **`PRB-0002`** — keep as one problem, or split passenger-information quality from developer/data interoperability, if they are materially distinct failure mechanisms.
- **Other `PRB-*` records** — split/merge only when evidence demonstrates a materially different affected journey, failure mechanism, consequence, or operator/solution space. Do not restructure merely to produce a tidier taxonomy.

## 11. Outputs

- lazily-populated `EVD.analysis` metadata, where it materially supports an assessment;
- one `ASM-*` per canonical active `PRB-*` after the pilot gate;
- an explicit structural disposition for the road-maintenance candidate, `PRB-0002`, and any other evidence-justified split/merge;
- a `STOP`/`WATCH`/`DEEPEN`/`PROCEED` triage per active problem, with named critical unknowns and next-evidence methods for every `DEEPEN`;
- initial current-journey state per problem (`SUFFICIENT`/`PARTIAL`/`INSUFFICIENT`/`UNKNOWN`);
- a deterministic analyzer report (derived, non-canonical);
- an explicit D4/D5 handoff.

## 12. D3 exit gate (preview — canonicalized in the D3 milestone document)

See `docs/milestones/D3-problem-map-decision-baseline.md` for the authoritative, checkbox-tracked exit gate. In summary, D3 closes when analytical contracts/tooling validate, the pilot gate is explicitly resolved, every active canonical `PRB-*` has an `ASM-Lite`, the road-maintenance candidate has an owner disposition, structural decisions are recorded, every active problem has a triage, every `DEEPEN` names a critical unknown and next method, no unknown is silently converted into a fact, no solution `HYP-*` is required merely to close D3, and the research validator plus (once implemented) the deterministic analyzer both pass.
