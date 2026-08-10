# D0 — Discovery Foundation

**Status:** CLOSED  
**Baseline:** v0.1  
**Date:** 2026-08-10

## Objective

Create the minimum durable governance and information contracts required to start systematic Discovery without depending on conversational context or prematurely developing a civic product.

## Entry gate

- Évora Digital mission reviewed;
- problem-first orientation accepted;
- open-source/public-good objective accepted;
- AIQT treated as engineering infrastructure rather than project-selection driver;
- public-signal research accepted as a discovery source;
- Open Civic Data track accepted as a parallel hypothesis;
- no civic product selected.

**Entry decision:** PASS.

## Work Units

### WU-D0-01 — Charter, scope, principles, ethics

Deliverables:

- `docs/discovery/charter.md`;
- `docs/discovery/research-ethics.md`.

Status: **DRAFTED / BASELINED**

### WU-D0-02 — Evidence, problem and hypothesis contracts

Deliverables:

- `docs/models/evidence-model.md`;
- `docs/models/problem-model.md`;
- `docs/models/hypothesis-model.md`.

Status: **DRAFTED / BASELINED**

### WU-D0-03 — Data, provenance, licensing and freshness contracts

Deliverables:

- `docs/models/data-source-model.md`;
- initial Open Data Foundation rules;
- authority/freshness concepts.

Status: **DRAFTED / BASELINED**

### WU-D0-04 — Repository baseline, source registry and D1/D2 execution protocol

Deliverables:

- repository documentation baseline;
- initial source registry;
- Discovery Roadmap;
- D1 execution protocol;
- D2 execution protocol;
- D0 consistency review;
- closure record.

Status: **DONE**

## Repository & AIQT bootstrap status

- Local Git repository initialized with `main` as the primary branch; minimal `.gitignore` added (no application framework, package manager, runtime, CI, or deployment configuration introduced).
- Baseline commit created containing the 18 files listed in `baseline-manifest.json` plus `.gitignore`.
- AIQT CLI v0.45.0 available locally; `aiqt init` run with the project objective, target users, and preferred agent. Project created in `draft` status with 0 milestones/work units — no speculative D1/D2 plan was ingested during bootstrap, preserving problem-first, evidence-first governance.
- `aiqt status --json` confirms a valid project/state (`runlogHealth`: 1/1 valid lines, no malformed entries; required-evidence mode `off`).
- GitHub repository `evora-digital` created as public, remote `origin`, local commits pushed, `main` tracking `origin/main`.

## D0 consistency review

Reviewed all 18 baseline files for contradictory terminology, duplicate/conflicting concepts, broken internal references, inconsistent D0/D1/D2 statuses, and accidental statements implying a civic product or the Évora Open API has already been selected/approved. No such statements were found; internal doc references resolve correctly. No corrections were required.

## D1/D2 protocol sufficiency review

`docs/discovery/d1-execution-protocol.md` and `docs/discovery/d2-execution-protocol.md` were reviewed against `docs/data/source-registry.md` and `docs/models/*`. Both protocols define a domain sequence or source-class list, search discipline, evidence-recording rules, and an explicit coverage/exit gate, and are sufficiently specific to begin bounded research. All governing principles (problem first, software optional, existing solutions before new development, evidence is not automatically fact, public access is not automatically reuse permission, provenance mandatory, freshness first-class, personal-data minimization, social listening as discovery not polling, outcomes over outputs, maintenance before launch, standards before custom schemas, Evidence Base/Public Data Layer separation, Évora Open API as infrastructure hypothesis) remain intact and undisturbed by this review.

## D0 exit gate

D0 may close when:

- [x] charter exists;
- [x] priority order is explicit;
- [x] research ethics exists;
- [x] evidence model exists;
- [x] problem model exists;
- [x] hypothesis model exists;
- [x] data-source model exists;
- [x] initial taxonomy exists;
- [x] initial source registry exists;
- [x] Discovery Roadmap exists;
- [x] D1 execution protocol is sufficiently specific;
- [x] D2 execution protocol is sufficiently specific;
- [x] baseline has been reviewed for contradictions and duplicate concepts;
- [x] repository has been bootstrapped locally;
- [x] AIQT project has been initialized for subsequent execution;
- [x] D0 closure decision recorded.

**D0 closure decision:** All exit criteria satisfied. D0 is CLOSED. See `docs/milestones/D0-closure.md`.

## Explicitly blocked during D0

- civic product implementation;
- Évora Open API implementation;
- product architecture;
- cloud/provider selection;
- frontend/database decisions;
- product branding.

## Risks

### Premature solution selection

Mitigation: separate Problem and Hypothesis records and block product development during D0.

### Research sprawl

Mitigation: milestone exit criteria, domain saturation criteria, structured evidence records.

### Social-media bias

Mitigation: social listening used for discovery rather than prevalence estimation.

### Data-reuse uncertainty

Mitigation: track licensing and reuse separately from public accessibility.

### Single-maintainer dependency

Mitigation: sustainability becomes a product gate before launch.

## Expected next milestone

**D1 — Institutional & Data Source Mapping**

D1 and D2 may run partially in parallel after D0 closure if the execution protocol and evidence handling remain consistent.
