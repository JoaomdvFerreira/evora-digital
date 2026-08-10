# D1 Parallel Research Operating Model

**Version:** 0.1
**Status:** Approved by project owner, effective for D1 from WU-D1-03 onward

## Purpose

D1's remaining domain Work Units (`WU-D1-03`–`WU-D1-06`) no longer need to be researched strictly one at a time. This document formalizes how **external research** can run in parallel across domains while **canonical repository integration and AIQT execution state stay controlled and serialized**, per `docs/discovery/research-handoff-protocol.md` and `docs/discovery/d1-recording-protocol.md`.

It does not change the schemas, the validator, the evidence rules, or the AIQT work-graph structure. It governs sequencing and queueing only.

## Parallel research, serialized integration

- D1 may run **up to 3 external research tracks concurrently** (typically one per not-yet-started domain WU).
- Example initial tracks: `WU-D1-03` (Housing, Social Support, Health & Wellbeing), `WU-D1-04` (Economy, Employment, Talent & Education), `WU-D1-05` (Culture, Tourism, Sports & Public Life).
- Research being underway on a track does **not** authorize starting the corresponding WU in AIQT. See "Research state vs. AIQT state" below.
- Canonical repository integration (writing `SRC-*`/`EVD-*`/`PRB-*`/`HYP-*` records, updating the source registry, running the validator, checkpointing AIQT) remains **one active integration at a time**, in the order handoffs are approved.

## WIP limits (operating defaults, not architecture)

| Limit | Default |
|---|---|
| Active external research tracks | 3 |
| Approved/review-pending batches waiting for integration | 2 |
| Canonical repository integration active at once | 1 |

These are working limits the project owner can adjust; they are not enforced by the schemas or AIQT.

## Research state vs. AIQT state

External research progress and AIQT execution state are tracked separately and must not be conflated:

- AIQT manages the canonical repository execution lifecycle (`ready` → `in_progress` → `needs_review`/`done`) for each `WU-*`, per the existing work graph.
- A WU should normally move out of `ready` only when its **first approved handoff enters canonical integration** — not when external research merely begins.
- Do not use AIQT state (e.g. marking a WU `in_progress`) to represent that exploratory external research has started. If a signal is needed, track it outside AIQT (e.g. in the handoff document itself) until integration begins.

## Provisional IDs for in-flight research

Before a handoff reaches canonical integration, external research may reference material using local provisional IDs, scoped to the WU and batch, e.g.:

```text
D1-03-A-S01   (WU-D1-03, Batch A, source candidate 01)
D1-03-A-E01   (WU-D1-03, Batch A, evidence candidate 01)
D1-03-A-P01   (WU-D1-03, Batch A, problem candidate 01)
```

Canonical `SRC-*`, `EVD-*`, `PRB-*`, `HYP-*` IDs are assigned only during controlled repository integration, following existing numbering (next available ID in each series). Where useful, the integrating handoff should preserve a provisional-to-canonical ID mapping (e.g. "D1-03-A-S01 → SRC-0028") in the Work Unit progress note, so the trail stays traceable without polluting canonical records with provisional identifiers.

## Handoff states

A research handoff has at least two states:

- `DRAFT` — under external research/review; not yet ready for integration.
- `APPROVED FOR INTEGRATION` — the project owner has explicitly recorded approval; the handoff may enter the integration queue.

A handoff must not be sent to the repository agent for integration while still labelled `DRAFT`/pending approval. If approval has already occurred (e.g. recorded in conversation, as with WU-D1-02 Batch C), the handoff document should say so explicitly rather than carrying stale "pending approval" wording into integration.

## Shared-source reuse across tracks

High-value cross-domain sources (e.g. municipal strategic plans, PORDATA, CIMAC/GEOCIMAC infrastructure) should be reviewed once where practical and reused across tracks rather than re-researched per domain. A single `SRC-*` record may support `EVD-*` records in multiple domains. Do not create a duplicate canonical source record merely because a different WU's handoff cites the same source — enrich the existing `SRC-*` record instead, per `docs/discovery/d1-recording-protocol.md`.

## Evidence quality is not relaxed by parallelization

Running multiple tracks concurrently must not weaken the existing evidence rules. Preserve, per track and at integration:

- provenance;
- source authority;
- licensing/reuse uncertainty (`unknown` stays `unknown`);
- freshness;
- source independence;
- contradictions/tensions (record them, do not silently resolve them);
- the distinction between institutional evidence and validated lived experience.

For time-sensitive findings, perform a current-state challenge (check whether a more recent source supersedes an older diagnosis) before treating an older diagnosis as current — as was done for WU-D1-02 Batch C.

## Problem creation stays conservative

Evidence collection may proceed independently across tracks. Canonical problem (`PRB-*`) creation and refinement should be more conservative than evidence collection. Before creating overlapping problem records across tracks, perform a cross-domain review for:

- duplication;
- causal relationships;
- shared affected populations;
- competing interpretations;
- contradictions.

Do not encode a speculative causal relationship between two tracks' findings as an established fact; record it as an open question or a `possible_root_causes` note instead.

## Cross-domain synthesis review

After a parallel research round (multiple tracks producing approved handoffs), perform a synthesis review before automatically advancing every track to another batch. The review should look at:

- duplicate/related problems across domains;
- cross-domain dependencies;
- contradictory evidence;
- common affected populations;
- shared datasets/sources;
- findings that changed the project team's prior understanding.

Each track then independently decides to: continue to another batch; switch to targeted/bounded research; reach institutional saturation; or stop because evidence is insufficient. Tracks are not required to run the same number of batches.

## Institutional saturation vs. problem validation

These remain distinct, as already established by `docs/discovery/d1-execution-protocol.md`'s coverage gate and demonstrated by WU-D1-02:

- **Institutional saturation** — further institutional research has stopped producing new top-level problem classes for a domain; sufficient to close the WU's institutional-discovery scope.
- **Problem validation** — whether a problem is real, prioritized, and digitally tractable for affected populations; this is D2/D5 and later tractability work.

A WU may reach institutional saturation while lived-experience evidence remains incomplete. Institutional saturation must never be represented, in closure notes or elsewhere, as final validation of a civic problem.

## Sensemaking review

Include a lightweight sensemaking step after each parallel research round, alongside (not instead of) the synthesis review above. It should ask:

- What was surprising?
- What changed the team's previous assumptions?
- Where does evidence converge?
- Where does it conflict?
- What appears systemic (structural/policy) rather than a discrete fixable gap?
- Where does software appear to have low causal leverage over the root cause?
- What important questions remain unanswered?

This is a narrative reflection step; it does not need to produce canonical records by itself, though it may motivate `possible_root_causes` notes or logged open questions in the affected `PRB-*` records.

## Integration remains serialized

Canonical repository integration stays serialized by default — one integration at a time, applied by the repository agent against `main` — to avoid AIQT state conflicts, canonical ID collisions, source-registry duplication, and conflicting edits. Branches, worktrees, or concurrent-integration infrastructure are not introduced for this unless later evidence shows the serialized default is actually a bottleneck.

## Relationship to other D1 documents

- `docs/discovery/d1-execution-protocol.md` defines what to collect per domain and the per-domain coverage gate; this document does not change that.
- `docs/discovery/research-handoff-protocol.md` defines what a handoff may contain and how it is integrated; this document adds the handoff states (`DRAFT` / `APPROVED FOR INTEGRATION`) and the queueing/WIP model around it.
- `docs/discovery/d1-recording-protocol.md` defines the canonical record format and validation; this document does not change it, and only adds the provisional-ID convention used before canonical integration.
- `docs/milestones/D1-institutional-data-source-mapping.md` defines the Work Units this operating model schedules; it does not change WU scope or the D1 exit gate.
