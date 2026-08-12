# RS-02 — Focused Desk Research Closure Review

**Type:** Research Support activity (independent of the AIQT milestone/work-unit sequence)  
**As of:** 2026-08-12  
**Decision:** `RS-02 CLOSED`

## 1. Scope and outcome

RS-01 identified seven focused public-research items: two HIGH, four MEDIUM and one LOW. RS-02A completed the two HIGH items (`PRB-0008`, `PRB-0001`); RS-02B1 completed the cycling and passenger-information MEDIUM items (`PRB-0004`, `PRB-0002`); RS-02B2 completed Parking Buddy and caregiver-context items (`PRB-0005`, `PRB-0007`). The LOW `PRB-0010` item was reviewed here without new research.

The canonical corpus moved from **223 records / 337 explicit edges / 0 dangling references** at RS-01 to **241 / 369 / 0**. RS-02 materially narrowed every selected desk gap, but did not convert residual uncertainty into negative evidence, validation, or a solution claim. The decisive remaining questions are now primarily institutional or affected-journey questions; another broad public-research wave would mostly duplicate established public material or fail to answer those questions.

## 2. Per-problem outcome

| Problem | Starting gap | What desk research established | Material ASM impact | Remaining gap | Residual category |
|---|---|---|---|---|---|
| `PRB-0001` | Whether reduced practical service is a current/general versus time-specific issue | Multi-year institutional confirmation of reduced night/weekend/holiday response | Persistence MEDIUM → HIGH; U1 narrowed to line/corridor/time severity | Current line-level magnitude and failing journeys; design/capacity versus reliability | `INSTITUTIONAL` (with `AFFECTED_JOURNEY` dependency) |
| `PRB-0002` | Whether passenger information is absent/inconsistent across stops and channels | Current digital channels, physical-stop heterogeneity, and planned improvements are distinguished | Journey understanding FAIL → PARTIAL; existing-solution understanding → SUFFICIENT; U3 narrowed | Materiality in real passenger journeys and delivery/status of planned improvements | `AFFECTED_JOURNEY` (with `INSTITUTIONAL` dependency) |
| `PRB-0004` | Whether authoritative current cycling topology/data exists | Official cartography, proposal-versus-built boundary, request-based SHP capability, and post-map change | Evidence corroborated; problem-real PASS; solution understanding SUFFICIENT | Current operating topology, incomplete/unsafe links and usable everyday journeys | `INSTITUTIONAL` |
| `PRB-0005` | Whether Parking Buddy is an Évora-relevant availability capability | Via Verde street-parking applicability in Évora and Parking Buddy prediction capability; payment and prediction boundaries preserved | No score/gate transition; residual explicitly bounded | Zone-specific coverage, accuracy/adoption, sensor state and user/operator materiality | `INSTITUTIONAL` (with `AFFECTED_JOURNEY` dependency) |
| `PRB-0007` | Whether local caregiver needs are contextually isolated | Independent Portuguese contextual corroboration for information/access/orientation/bureaucracy difficulties | Independence LOW → MEDIUM; local evidence no longer contextually isolated | First-time Évora support-seeking path and implementation/effect of the 2026–27 response | `AFFECTED_JOURNEY` (with `INSTITUTIONAL` dependency) |
| `PRB-0008` | Whether public sources identify hard-to-fill occupations | Named Alentejo shortage list; Évora employment-centre statistics bounded as intermunicipal | U1 narrowed to municipality-specific confirmation; no gate/score transition | Which roles are hard to fill in Évora, duration, causes and mechanism coverage/effectiveness | `INSTITUTIONAL` |

## 3. Research-value transition

Primary transitions from the RS-01 `DESK_RESEARCHABLE` queue are:

- **To `INSTITUTIONAL`:** `PRB-0004` (DAM authoritative topology/status); `PRB-0005` (DAM/operator confirmation of zone coverage, sensors and materiality); `PRB-0008` (NERE confirmation of Évora-specific shortages and alignment outcomes). `PRB-0001` also now needs TREVO confirmation for the operational-cause half.
- **To `AFFECTED_JOURNEY`:** `PRB-0002` (whether heterogeneous channels cause concrete passenger failure); `PRB-0007` (first-time caregiver support-seeking path). `PRB-0001` and `PRB-0005` retain affected-user dependencies once the institutional route has narrowed the operational facts.

`PRB-0001` retains a technically possible bounded current timetable comparison, and `PRB-0002` retains a possible stop-level audit. Neither is a reason to open another broad desk-research batch now: the public record has established the general pattern and physical-channel distinction, while the decision-critical next value is operator response and/or a real journey.

No HIGH/MEDIUM RS-01 desk item was omitted. No HIGH/MEDIUM desk-research question remains sufficiently likely to yield decision-changing public evidence to justify a new batch now.

## 4. PRB-0010 decision

**`DEFERRED — LOW VALUE / DIMINISHING RETURNS`.** `ASM-0010` remains `WATCH`, with low digital leverage and `digital_causality: FAIL`. Its only LOW desk item would at most refresh repair completion/current-condition context; it cannot establish municipality-wide persistence, a repeatable maintenance failure, or an independently material reporting/transparency journey. No current canonical trigger justifies promotion. Re-open only on the existing ASM triggers: credible broad persistence after repairs, repeatable service failure, independently material reporting/status friction, or a credible maintenance-performance/open-data gap.

## 5. Next research path

Continue WU022 responses and bounded follow-ups: TREVO (`PRB-0001`/`0002`), DAM (`0004`/`0005`), DEIS (`0007`) and NERE (`0008`). Preserve the identified WU023 questions until that gate opens; do not recruit or simulate WU023 work now. Conduct new desk research only if a WU022 response or another canonical finding creates a specific, decision-critical public question not answerable through the existing institutional or journey route.

No canonical `research/**` record, `.aiqt/` state, WU022/WU023/WU024 state, or D5 state was changed by this review.
