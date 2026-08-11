# Évora Digital

**Status:** Discovery Programme — D1 closed, D2 active  
**Baseline:** v0.1  
**Date:** 2026-08-11

## Mission

Évora Digital identifies concrete problems affecting people who live, work, study, conduct economic activity, provide services, or visit Évora, and creates open digital public goods when there is sufficient evidence that technology can produce a real and measurable improvement.

## Priorities

1. Value for Évora
2. Evidence
3. Sustainability
4. Open-source and reuse
5. Engineering quality
6. AIQT dogfood

If priorities conflict, the higher priority takes precedence.

## What Évora Digital is

Évora Digital is a civic-tech discovery and delivery programme with two complementary tracks:

### Civic Problem Intelligence

Build structured, traceable knowledge about problems, affected populations, current journeys, root causes, existing interventions, and digitally tractable opportunities.

### Open Civic Data Infrastructure

Discover, catalogue, normalize, and make useful civic data easier to reuse, while preserving provenance, licensing, authority, and freshness.

The Open Civic Data track does **not** imply that a centralized API must be built. Catalogue-only, federation, normalization, API, or no infrastructure are all valid outcomes of discovery.

## Core operating model

```text
Evidence
  ↓
Problem
  ↓
Current Journey
  ↓
Root Cause
  ↓
Existing Solutions
  ↓
Gap
  ↓
Digital Tractability
  ↓
Experiment
  ↓
Project
  ↓
Outcome Review
```

Software is optional. A valid research outcome may be:

- no digital intervention recommended;
- existing solution should be improved instead;
- problem is primarily operational, physical, political, or economic;
- insufficient evidence;
- more research required.

## Current phase

```text
D0  Discovery Foundation                    CLOSED
D1  Institutional & Data Source Mapping     CLOSED
D2  Public Signal Discovery                 ACTIVE
D3  Problem Map v1
D4  Existing Solutions & Gap Analysis
D5  Stakeholder Validation
D6  Digital Tractability Assessment
D7  Candidate Experiments
D8  Project Selection
D9  Outcome Review
```

See `docs/milestones/D0-closure.md` for the D0 closure record and `docs/milestones/D1-WU07-closure.md` for the D1 closure record. `docs/milestones/D2-public-signal-discovery.md` is the active D2 milestone.

No civic product has been selected for implementation.

The Évora Open API remains an **infrastructure hypothesis**, not an approved product.

## Repository structure

```text
docs/
  discovery/
  models/
  data/
  milestones/
  decisions/
research/
```

See `docs/discovery/roadmap.md` for the programme roadmap and
`docs/milestones/D0-discovery-foundation.md` for the closed D0 milestone record.

## Licensing

Évora Digital is intended to be public and open-source, with different licences for
software, original documentation/research, and third-party data. See `LICENSES.md`
for the full policy and `LICENSE` for the Apache-2.0 text covering original software.
