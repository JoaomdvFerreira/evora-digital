# Research Methodology

**Version:** 0.2  
**Status:** Baseline draft; §2.3–2.4 reconciled for D3/D5 2026-08-11

## 1. Purpose

The research process exists to discover and understand problems before designing solutions.

The primary research question is not:

> What application should Évora have?

It is:

> What recurring problems affect people and organisations in Évora, why do they occur, and where can digital intervention materially improve the outcome?

## 2. Research streams

### 2.1 Institutional research

Search independently by domain for:

- problems;
- needs;
- goals;
- indicators;
- populations;
- locations;
- existing interventions;
- datasets;
- stakeholders.

Potential institutional sources include:

- Município de Évora;
- CIMAC;
- parish councils;
- INE;
- PORDATA;
- Universidade de Évora;
- NERE;
- public health bodies where relevant;
- employment and education organisations;
- cultural bodies;
- social-sector networks;
- regional infrastructure operators.

Institutional research must not search only for “digital needs”. It should first discover the underlying civic problem.

### 2.2 Public signal discovery

Public signal discovery looks for spontaneous descriptions of friction.

Useful linguistic patterns include:

- “não consigo…”;
- “demora…”;
- “não há…”;
- “é difícil…”;
- “ninguém sabe…”;
- “tenho de…”;
- “falta…”;
- “já reportei…”.

Search should avoid prompts that presuppose a technology solution, such as “apps Évora” or “smart city ideas”.

### 2.3 Stakeholder and user research — two distinct activities

Earlier drafts of this methodology implied that stakeholder contact occurs only after meaningful (solution) hypotheses exist. As of D3 canonicalization, this is corrected: **not all stakeholder/user contact is D5, and D5 does not require a solution `HYP-*` to exist.** Two distinct activities are recognized, at two different phases:

**D3 — formative research** (understanding, not testing a solution):

- purpose: understand what happens today — map the current journey, identify failure points, workarounds, and consequences, and test candidate causal explanations for a problem;
- may happen before any `HYP-*` exists, and before a problem is fully validated;
- used only when a specific D3 decision gate (journey understanding, root-cause understanding, or remaining-gap) cannot be resolved credibly from documentary/public-signal evidence alone — not by default for every problem.

**D5 — formal challenge/validation** (testing the diagnosis, not generic ideation):

- purpose: formally challenge the evidence-backed problem diagnosis/assessment produced by D3 — actively seek counterexamples and negative cases, and assess whether the remaining gap is material;
- updates a problem's formal `validation_status`;
- occurs after a problem assessment exists, but still does not require a solution `HYP-*` — D5 validates the *problem*, not a proposed *solution*.

For both activities, prefer:

> We repeatedly found problem X in context Y. Does this reflect your experience? What happens today?

Avoid, in either activity:

> What app would you like us to build?

### 2.4 Proportionality and method escalation

Heavier research/analytical methods (formative user/stakeholder research, systems mapping, an evidence-gap matrix, comparative "what works" research) are conditional, not default:

- use a heavier method only when it can resolve a specific, named decision gate or critical unknown that lighter/documentary evidence cannot resolve;
- escalate one step at a time — do not jump to comparative/"what works" research (primarily a D4 activity, reserved for surviving opportunities) while a more basic gate (e.g. journey understanding) is still unresolved;
- an unresolved gate or unknown is recorded as `UNKNOWN` and routed (`WATCH`/`DEEPEN`), not silently treated as a fact or skipped;
- absence of a heavier method is not a research failure — a problem may legitimately close a phase as `STOP` or `WATCH` without further primary research if the existing evidence already supports that call.

## 3. Evidence convergence

A problem becomes stronger when independent evidence classes converge.

Example:

```text
Institutional diagnosis
        +
Formal public participation
        +
Informal public signal
        +
Stakeholder validation
        ↓
Stronger problem confidence
```

Volume within one channel must not substitute for independent corroboration.

## 4. Social listening limitations

Social listening is not representative polling.

Do not infer population prevalence from:

- number of comments;
- likes;
- shares;
- subreddit frequency;
- number of posts.

Social channels have selection, demographic, engagement, and geographic biases.

Use social listening to identify:

- pain;
- current journeys;
- workarounds;
- consequences;
- locations;
- actors;
- language;
- possible root causes;
- recurring themes.

## 5. Problem decomposition

For each sufficiently supported problem, investigate:

```text
Observed friction
      ↓
Affected population
      ↓
Current journey
      ↓
Failure point
      ↓
Workaround
      ↓
Consequence
      ↓
Root cause
      ↓
Existing intervention
      ↓
Remaining gap
```

## 6. Existing-solution rule

Before creating a solution hypothesis, establish:

- whether an existing public/private/community solution exists;
- whether the target population knows about it;
- whether it is accessible;
- whether it addresses the root cause;
- where it fails;
- whether integration or improvement is preferable to replacement.

A “do not build” conclusion is a successful research result.

## 7. Saturation / sufficient coverage

A research domain is not closed merely because many sources were read.

A domain may move to consolidation when:

- high-priority institutional sources have been checked;
- at least two materially different evidence classes have been considered where feasible;
- major existing interventions are known;
- no new high-level problem cluster is appearing after additional source review;
- unresolved gaps are explicitly recorded;
- source and date provenance is complete.

This is a pragmatic discovery threshold, not a claim of scientific population representativeness.

## 8. Deduplication

Evidence records remain separate even when they describe the same problem.

Problem records are deduplicated.

Multiple evidence items should point to one shared problem where the underlying failure is materially the same.

## 9. Research outputs

Research should produce structured records rather than only narrative reports:

- `EVD-*` evidence;
- `PRB-*` problems;
- `HYP-*` hypotheses;
- `SRC-*` sources.

Narrative documents summarize these records but do not replace them.

## 10. Derived retrieval tooling (Graphify) — policy

An external evaluation spike (executed against a read-only repository snapshot, never touching repository files or AIQT state) assessed Graphify, a derived graph-based retrieval tool, as an aid for navigating the growing `research/` corpus. Decision: **ADOPT WITH CONSTRAINTS**, recorded here as durable project policy following WU-D1-07's D1 consolidation.

Findings that informed the decision:

- `graphify explain <known-canonical-ID>` reliably reconstructed the YAML's explicit `SRC-*` → `EVD-*` → `PRB-*` relationships, correctly distinguishing YAML-explicit (EXTRACTED) edges from text-derived (AMBIGUOUS/INFERRED) ones, and materially reduced file-opening for "what cites X" questions.
- The free-text `graphify query` command was unreliable — it missed or mis-targeted roughly half of a gold-set test, sometimes performing worse than plain text search, especially for finding records by decision-status (e.g. DEFER/WEAKEN) rather than by structural reference.
- Indexing narrative documents (`docs/discovery/`, `docs/milestones/`) alongside canonical records degraded canonical-record recall rather than improving it, and added graph noise.
- Incremental updates were substantially faster than full rebuilds and preserved unrelated nodes correctly, but one test produced a duplicate/ambiguous node for a short ID — short canonical IDs are not always guaranteed unique inside a Graphify-built graph, and node IDs are not fully deterministic across separate rebuilds.

Policy, effective immediately:

- Canonical YAML under `research/` remains the sole source of truth. Graphify's index is optional, derived, and disposable — it is never committed to the repository.
- Graphify indexes canonical `research/` records only (`sources/`, `evidence/`, `problems/`, `hypotheses/`). It must never index narrative discovery/milestone documents under `docs/`.
- Prefer `graphify explain <known-ID>` over free-text `query`. Treat `query` results as exploratory and non-authoritative.
- Every AMBIGUOUS/INFERRED relationship surfaced by Graphify requires canonical YAML verification before it is cited as fact.
- Graphify must never create, promote, or modify evidence, problem, or hypothesis records. It is a read-only retrieval aid.
- Avoid frequent full semantic rebuilds due to their token/context cost; prefer incremental updates where available.
- Graphify is not required for `tools/validate-research.js` or for repository correctness, and must not become a hard dependency of either.

No Graphify tooling, configuration, or custom deterministic index has been implemented in this repository. Further retrieval-tooling improvements (e.g. addressing free-text query reliability or ID-determinism) are noted as future work, not undertaken as part of D1 closure.
