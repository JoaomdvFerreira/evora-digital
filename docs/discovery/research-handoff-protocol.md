# Research Handoff Protocol

**Version:** 0.1
**Status:** Baselined for WU-D1-01

## Purpose

From D1 onward, substantive research, source interpretation, evidence assessment, problem analysis, and public-signal discovery are performed externally, then handed to the repository agent (Claude Code / Codex) as a reviewed research batch.

```text
Research and interpretation
        ↓
Performed externally
        ↓
Reviewed research handoff
        ↓
Claude Code / Codex
        ↓
Structured repository records
        ↓
Validation
        ↓
AIQT / Git
```

**The repository agent is responsible for faithful integration and technical validation, not reinterpretation of the research.**

## Handoff states

A handoff is either `DRAFT` (under external research/review) or `APPROVED FOR INTEGRATION` (the project owner has explicitly recorded approval). Only an `APPROVED FOR INTEGRATION` handoff enters the repository agent's integration queue; a handoff must not carry stale "pending approval" wording once approval has actually occurred. From `WU-D1-03` onward, multiple domains may be researched in parallel ahead of integration — see `docs/discovery/d1-parallel-research-operating-model.md` for the full queueing/WIP model. Canonical integration itself stays serialized regardless of how many tracks are researched in parallel.

The repository agent must not independently decide which civic problems are important, whether a source proves a claim, how competing evidence should be interpreted, whether a problem is digitally tractable, which solution should be built, which project should be selected, or whether the Évora Open API should be implemented. Those are research/analysis judgments made before the handoff, or governance decisions made explicitly by the programme — not something inferred while integrating records.

## What a handoff may contain

A reviewed research handoff should be expressed, or convertible, into the record shapes defined in `research/schemas/*.schema.json`:

```text
Sources to add/update           -> SRC-* records
Evidence records                -> EVD-* records
Problem records, where approved -> PRB-* records
Hypotheses, where approved      -> HYP-* records
Relationships between records   -> reference fields (e.g. EVD.source.source_id, PRB.evidence, HYP.problem)
Known uncertainties             -> notes fields / UNKNOWN values
Licensing/freshness unknowns    -> licensing.status / freshness.status = unknown / UNKNOWN
Files/docs requiring updates    -> explicit list of paths and the reason for each change
```

## Integration steps

1. Read the handoff in full before making any change.
2. Validate that referenced records (e.g. an `EVD-*` citing a `SRC-*`, a `HYP-*` citing a `PRB-*`) either already exist or are included in the same handoff.
3. Write each record to its canonical location (`research/sources/`, `research/evidence/`, `research/problems/`, `research/hypotheses/`), following `docs/discovery/d1-recording-protocol.md`.
4. Run `node tools/validate-research.js` and resolve every reported problem before treating the handoff as integrated.
5. Apply only the documentation updates explicitly listed in the handoff.
6. Record integration notes (what was added/updated, what was flagged) in the relevant Work Unit closure note — not as a new standing research journal.

## Missing or ambiguous information

- Where a schema allows `unknown`/`UNKNOWN`/`not_assessed`, use it rather than guessing.
- Where a field has no documented `unknown` value and the handoff does not supply it, do not invent a value — flag the record (e.g. leave it out of the canonical directories and note the gap) instead of fabricating data.
- Where a handoff is internally inconsistent (e.g. conflicting evidence about the same problem, contradictory licensing claims for the same source), preserve the inconsistency in the records/notes and flag it for review rather than resolving it unilaterally.

## Out of scope for the repository agent

- Deciding a problem's priority, validity, or digital tractability.
- Deciding whether existing solutions already solve a problem.
- Selecting a civic product.
- Authorizing or beginning Évora Open API implementation.
- Performing new research to fill gaps in a handoff.

These remain research/analysis or programme-governance decisions made outside repository integration.
