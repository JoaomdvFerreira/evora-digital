# D2 Execution Protocol — Public Signal Discovery

**Version:** 0.2
**Status:** Approved — Round A active
**Supersedes:** v0.1 (Draft for D0 closure)
**Approved:** 2026-08-11 (project-owner approval of the D2 Public Signal Discovery Strategy)
**Precondition:** D1 — Institutional & Data Source Mapping is CLOSED (56 SRC, 78 EVD, 9 PRB, 0 HYP; 143 records validated)

## 1. Objective

D2 tests whether the institutionally identified `PRB-*` problems from D1 are visible in current public/lived signals, and whether those signals reveal concrete journeys, recurring friction, affected contexts, timing/location patterns, contradictions with institutional framing, information/coordination/transaction costs, structural causes that reduce digital leverage, or problems D1 may have missed.

D2 does not estimate population prevalence and does not select solutions.

> What are people actually experiencing in Évora now, and how does that confirm, weaken, refine or contradict the D1 problem map?

## 2. Evidence boundary

Public signals are discovery evidence, not polling. A large number of posts/reviews/comments does not prove a problem is common across Évora. A small number of detailed reports may still reveal a high-value journey or failure mode.

Every useful signal must distinguish: frequency in the observed channel, seriousness/severity, specificity, recency, independence, corroboration across different channels, and representativeness — which is normally **UNKNOWN**.

## 3. Problem-validation boundary

Public-signal evidence may **confirm, refine, weaken or contradict** a canonical `PRB-*`, but D2 public-signal evidence alone must not move a `PRB-*` to a formally validated state.

D2 is evidence enrichment and lived-signal discovery. Formal stakeholder validation remains a later gate (primarily D5) unless the canonical methodology explicitly changes. A `PRB-*` may be refined during D2, but `validation_status` must not be upgraded solely because multiple public posts/reviews/comments support it.

## 4. Research unit: journeys

D1 was organised mainly by institutional domain. D2 uses problem/journey clusters instead, so cross-domain friction is visible.

- **D2-A — Getting Around Évora Without Reliance on a Car.** Primary problems: `PRB-0001`–`PRB-0005`. Coverage rule: because this track spans five canonical problems, each batch must explicitly attempt coverage of `PRB-0001` through `PRB-0005` and record where no useful public signal is found — this is a coverage matrix, not a quota; no minimum evidence count is required per PRB. Do not let a high-volume topic (e.g. bus complaints) crowd out pedestrian, accessibility, cycling, or public-realm questions.
- **D2-B — Informal Caregiver Support Journey.** Primary problem: `PRB-0007`. Bias boundary: caregiving is a privacy-sensitive journey and may be substantially underrepresented in public channels. A weak or absent public signal must **not** be interpreted as evidence that `PRB-0007` is weak or absent — sparse public evidence is a reason to prioritise D5 stakeholder validation, not to downgrade the problem.
- **D2-C — Housing Access Journey.** Primary problem: `PRB-0006`. Boundary: housing affordability/supply is a strong structural problem with likely low direct digital leverage; do not collect generic "housing is expensive" signals. Investigate only the separable journey problem: discovering programmes, eligibility, applications, documentation, status/tracking, student accommodation search/placement, understanding alternatives.
- **D2-D — Skills, Employment and Employer Needs.** Primary problem: `PRB-0008`. Generic job-board demand must not be inferred from ordinary job-search frustration.
- **D2-E — Urban Hygiene and Public-Service Follow-up.** Primary problem: `PRB-0009`. Do not create a new occurrence-reporting problem merely because people complain about outcomes; distinguish fleet/staffing/logistics causation from information/follow-up friction.

`D2-C` (Housing) and `D2-D` (Employment) remain analytically separate research tracks — separate source sets, journeys, findings, and saturation decisions — even where they share one canonical integration work unit for repository efficiency.

**Watch-only areas (no dedicated broad track):**

- Culture/tourism/sports — D1 reached institutional saturation with zero canonical problems; watch for signals on event discovery, accessibility information, associative workflows, sports access/booking, visitor information, and escalate only if specific, recent, and independently corroborated.
- Climate — capture only where it affects an existing journey (heat → mobility, drought/water → public services, intense rain → mobility/public space, vulnerable populations → health/social support); avoid broad climate-opinion collection.

## 5. Source classes

- **PS1 — Local journalism / public news reports.** Value: current incidents, public complaints, quoted stakeholders, operational changes. Risk: editorial selection, repeated syndication, one event dominating coverage.
- **PS2 — Public social/community discussion.** Publicly accessible Reddit/forum/social posts (e.g. Facebook pages/groups, Instagram, Reddit, YouTube comments) where lawful and technically accessible. Value: lived language, detailed journeys, emerging friction. Risk: self-selection, unverifiable accounts, duplication, demographic bias, platform access restrictions. Never treat post counts as population prevalence.
- **PS3 — Reviews and public feedback surfaces.** Transport/service/place reviews, app-store reviews, public-service reviews. Value: concrete user-experience failure modes. Risk: rating/review selection bias, tourism-heavy samples, stale reviews, business/location mismatch.
- **PS4 — Public petitions / civic interventions / meeting submissions.** Value: articulated problems, geography, organised concern. Risk: campaign framing; signatory count is not automatically representative; political/organisational advocacy must be recorded as such.
- **PS5 — Public institutional complaint/participation summaries.** Published complaint statistics, participatory processes, consultation feedback, public meeting records. Value: structured public input. Risk: institutionally filtered/aggregated, may omit raw journey detail.
- **PS6 — Open operational signals.** Outages, service disruptions, public status feeds, public incident/occurrence statistics. Value: observable behaviour rather than opinion. Risk: availability/completeness vary; must distinguish operational event from user impact.

Queries should combine civic-experience search patterns with Évora, relevant parishes, neighbourhoods, services, or facilities. Useful Portuguese friction-phrase patterns include: não consigo, demora, não há, é difícil, ninguém sabe, tenho de, falta, já reportei, sempre, estacionamento, autocarro, renda, lixo, buracos, acessibilidade, atendimento, serviços.

## 6. Source-independence rule

Multiple pages repeating the same original complaint/event are one signal lineage, not independent corroboration. For every significant claim, distinguish: independent public signals, repeated/syndicated signals, institutional acknowledgement, operational data, historical repetition.

## 7. Observation extraction

A useful public observation may capture:

```yaml
domain: mobility
actor_type: resident
geography: relevant area
problem: bus frequency makes commuting impractical
current_workaround: private car
consequence: car dependence / parking pressure
source_type: social            # PS1..PS6
evidence_nature: reported-experience
strength: anecdotal
independence: independent | repeated/syndicated
representativeness: UNKNOWN    # normally UNKNOWN
```

Do not retain identity unless necessary. See `docs/discovery/research-ethics.md` §3–5 for the initial D2 permissions/prohibitions and minimisation pattern.

## 8. Factual-claim verification rule

A public signal may itself be canonical evidence as a **reported experience** when provenance and uncertainty are preserved. When a signal asserts a factual/operational condition that could become a public-data claim (a route does not operate, a service was unavailable, a procedure requires a document, a collection was not performed, a facility is inaccessible, a timetable/status is wrong), D2 must preserve the distinction between reported signal, corroboration, verification, and canonical factual/data candidate. Do not silently convert a reported experience into a verified operational fact:

```text
Signal
  ↓
Evidence
  ↓
Corroboration
  ↓
Verification
  ↓
Canonical data candidate
```

## 9. Bias controls

Never infer that a theme is more important merely because it has more comments. Record channel and source class so later analysis can distinguish institutional, formal public, informal public, press, stakeholder, and statistical input.

## 10. Deduplication

Repeated posts may indicate recurrence but remain separate evidence records when materially independent. Do not create multiple problem records when they describe the same underlying failure.

## 11. Signal classification

Each useful signal should answer at least one of: `CONFIRMS`, `REFINES`, `CONTRADICTS`, `CURRENT-STATE-UPDATE`, `NEW-CANDIDATE`, `EXISTING-SOLUTION`, `LOW-DIGITAL-LEVERAGE`, `INFORMATION-FRICTION`, `COORDINATION-FRICTION`, `TRANSACTION-FRICTION`. These are analytical labels, not prevalence measures.

## 12. Blind-spot / open-discovery control

D2 must not become only a confirmation exercise for the nine D1 problems. Each research round reserves a small bounded portion of discovery effort for signals that do not fit the current `PRB-*` map. This is a confirmation-bias control, not a sixth exhaustive domain track. For each Round A track, record: materially relevant Évora signals encountered outside the scoped PRBs, recurring civic friction D1 did not classify, signals that contradict the current prioritisation, and strong signals in watch-only domains. Review these explicitly at cross-track synthesis under `D2 OPEN-DISCOVERY / BLIND-SPOT FINDINGS`. A new observation remains evidence/candidate material; it does not automatically become a new `PRB-*`.

## 13. Escalation of a new problem candidate

A signal must not automatically create a new `PRB-*`. A new D2 candidate requires: more than one independent signal (unless severity/evidence quality is exceptional), credible provenance, meaningful current relevance, distinction from an existing `PRB-*`, evidence it is not simply an existing solution/capacity issue, cross-check against known institutional evidence, actively sought contradictory evidence, and project-owner review before canonical promotion. Default D2 behaviour is to retain a newly observed issue as `NEW-CANDIDATE` evidence until cross-track synthesis.

## 14. Initial operating constraint

D2 begins with bounded, manual or search-driven public research. Mass automated collection must not begin until platform terms, legal basis, storage policy, retention, and operational need have been reviewed.

## 15. Public-signal saturation (coverage gate)

A track reaches D2 signal saturation when further searching is unlikely to materially change the observed journey, main friction categories, affected context/location, root-cause interpretation, contradiction/current-state assessment, or next stakeholder-validation questions. Saturation does **not** mean no more complaints exist, a representative sample was obtained, or prevalence has been measured. Indicators:

1. repeated new searches mostly reproduce already-known friction classes;
2. at least two meaningfully different source classes have been checked where feasible;
3. credible contradictory/current-state signals have been actively sought;
4. major D1 assumptions have been tested;
5. materially different geographic/population perspectives have been sought where public evidence allows;
6. absence of useful public signal is recorded explicitly and is **not** interpreted as absence of a problem;
7. known channel, demographic, geographic and access bias/coverage gaps are documented;
8. remaining uncertainty requires direct stakeholder/operational data rather than more public searching.

## 16. Priority order and parallel round

**Priority 1 (Round A):** D2-A Mobility/accessibility journey, D2-B Caregiver support journey, D2-E Urban hygiene/public-service follow-up — strong D1 evidence, currentness, good potential for concrete public signals.

**Priority 2:** D2-D Skills/employer needs, D2-C Housing process journey — important, but public signals may be noisier and structural causes may dominate.

**Watch only:** culture/tourism/sports, broad climate, generic digital-service fragmentation.

External research may run in parallel; canonical integration remains serial under the current AIQT invariant. Recommended external concurrency (see `docs/discovery/d1-parallel-research-operating-model.md` for the general parallel-research WIP model this reuses): maximum 3 active D2 research tracks, one bounded batch per track before cross-track synthesis, no automatic second batch before reviewing what Round A changed, and no more than one complete D2 round accumulating without synthesis.

Target outcome per track's first batch: 5–10 high-information public signals, multiple source classes where available, clear signal lineage, at least one attempt to find contradictory/negative evidence, 2025–2026 currentness preferred.

## 17. D2 outputs

D2 should end with: updated/refined evidence around the D1 `PRB-*` records; current public-signal journeys; a contradiction/current-state log; specific stakeholder-validation questions for D5; any genuinely new problem candidates (as `NEW-CANDIDATE` evidence, not canonical `PRB-*`); clear low-digital-leverage findings; Open Data/operational-data requests exposed by the public signals; and a handoff into D3 Problem Map v1.

D2 should not produce: solution proposals, app feature lists, project selection, or prevalence claims from social listening.
