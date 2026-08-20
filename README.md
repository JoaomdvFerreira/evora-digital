# Open Évora

**Status:** Discovery Programme — D0–D4 closed, D5 (Stakeholder Validation) active  
**Baseline:** v0.1  
**Date:** 2026-08-12

## Mission

Open Évora identifies concrete problems affecting people who live, work, study, conduct economic activity, provide services, or visit Évora, and creates open digital public goods when there is sufficient evidence that technology can produce a real and measurable improvement.

## Priorities

1. Value for Évora
2. Evidence
3. Sustainability
4. Open-source and reuse
5. Engineering quality
6. AIQT dogfood

If priorities conflict, the higher priority takes precedence.

## What Open Évora is

Open Évora is a civic-tech discovery and delivery programme with three complementary tracks. AIQT, governance, and provenance are transversal to all three:

### Civic Problem Intelligence

Build structured, traceable knowledge about problems, affected populations, current journeys, root causes, existing interventions, and digitally tractable opportunities.

### Open Civic Data Foundation

Discover, catalogue, normalize, and make useful civic data easier to reuse, while preserving provenance, licensing, authority, and freshness.

The Open Civic Data track does **not** imply that a centralized API must be built. Catalogue-only, federation, normalization, API, or no infrastructure are all valid outcomes of discovery.

### Research Explorer

Provide a read-only product surface for navigating the canonical research corpus. Its roadmap is separate from Civic Problem Intelligence and the Open Civic Data Foundation.

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
D2  Public Signal Discovery                 CLOSED
D3  Problem Map v1                          CLOSED
D4  Existing Solutions & Gap Analysis        CLOSED
D5  Stakeholder Validation                  ACTIVE (M005, WU022 in progress)
D6  Digital Tractability Assessment
D7  Candidate Experiments
D8  Project Selection
D9  Outcome Review
```

See `docs/milestones/D0-closure.md` for the D0 closure record and `docs/milestones/D1-WU07-closure.md` for the D1 closure record. `docs/milestones/D5-stakeholder-challenge-validation.md` is the active D5 milestone (`M005`).

No civic intervention arising from the Civic Problem Intelligence pathway has been selected for implementation.

The Évora Open API remains an **infrastructure hypothesis**, not an approved product.

The first Open Civic Data Foundation Decision Review is recorded in `docs/discovery/open-data-foundation-decision-review.md`; it does not create a Work Unit or authorize outreach.

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

Open Évora is intended to be public and open-source, with different licences for
software, original documentation/research, and third-party data. See `LICENSES.md`
for the full policy and `LICENSE` for the Apache-2.0 text covering original software.
