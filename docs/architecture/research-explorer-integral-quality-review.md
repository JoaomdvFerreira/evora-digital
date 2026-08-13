# Research Explorer — Integral Engineering and Product-Quality Review

**Review date:** 2026-08-13

**Reviewed baseline:** `main` at `d45a0d9` before this review document

**Scope:** RE-00 through RE-05, review-only; RE-06 not started
**Decision:** ready with a bounded pre-RE-06 remediation set

## 1. Executive conclusion

The accepted architecture remains appropriate. Canonical research still flows through the validated, generated read model and `DataProvider` into a static, read-only React UI. No browser code reads canonical YAML, no feature bypasses `DataProvider`, Graph remains lazy and supplementary, and no evidence supports adding a backend, router, state manager, virtualization, server search, worker, or AI layer.

The current corpus and generated model are internally correct: **244 canonical records, 376 explicit edges, 0 dangling references**, with no duplicate IDs, duplicate edge IDs, detail/index identity mismatch, or self-loop in the current corpus. The full configured suite, typecheck, production builds, and dependency audit pass.

RE-06 should not start unchanged, however. One current corpus record proves that Problem View can hide a canonically explicit challenge (`EVD-000127`, `CONTRADICTS`) behind an undifferentiated “Evidência” row. Three other bounded defects affect stale Graph URLs, canvas/HTML parity during slow Sigma loading, and keyboard/assistive-technology transitions into Problem/Graph. These do not require architecture changes, but they should be repaired before RE-06. Five additional boundary-safety, recovery, documentation, search-announcement, and history issues can be completed within RE-06.

**Unique findings:** 9 — 0 BLOCKER, 1 HIGH, 6 MEDIUM, 2 LOW.

**Disposition:** 4 `FIX_BEFORE_RE06`, 5 `FIX_IN_RE06`.

## 2. Scope and methodology

The review traced:

`research/**` → `validateResearchTree()` → adapter generation → manifest/index/detail/edges → `StaticDataProvider` → URL/application state → Overview/Records/Problem/Graph projections.

It included canonical architecture, development contract, read-model specification, roadmap, RE-00 risk review, RE-05 benchmark/results, phase history, the post-RE-05 consolidation commit, all application and adapter source, test configuration, and test intent. Static searches covered data-access bypasses, raw-HTML/injection sinks, external-link behavior, privacy markers, generated/build artefacts, and dependency boundaries.

Targeted disposable tests reproduced four behaviors: explicit `CONTRADICTS` metadata omitted from Problem View, a stale Graph focus rendered as a successful empty graph, a capped Graph result list announced as the total result count, and a graph-prop update lost while Sigma's dynamic import was pending. The temporary tests were removed before this document was written.

No real browser instance was available through the installed browser integration, and Playwright/Cypress is not installed in the application. Per the review boundary, no browser dependency was installed. Real-browser conclusions are therefore separated from source/jsdom/build proof.

## 3. Validation performed

| Check | Result |
|---|---|
| `node tools/validate-research.js` | PASS — 244 records |
| `node tools/analyze-research.js --all` | PASS — 97 SRC, 127 EVD, 10 PRB, 0 HYP, 10 ASM |
| `node tools/analyze-research.js --gaps` | PASS — 21 explicit analytical gaps reported; no inferred gaps |
| `node tools/test-analytical-foundation.js` | PASS — 22/22 |
| `node apps/research-explorer/scripts/build-data.test.js` | PASS — 17/17 |
| Real-corpus `build-data.js` | PASS — 244 records, 376 edges, 0 dangling; fingerprint `a08d87299837fd81d308e50526ec9f184b3d48256fa51578fc909bfccadc8922` |
| Generated-model diagnostic | PASS — 0 duplicate record IDs, 0 duplicate edge IDs, 0 dangling endpoints, 0 detail/index identity mismatches, 376 detail outgoing edges, 0 current self-loops |
| `npm run test --prefix apps/research-explorer` | PASS — 146/146; one opt-in benchmark skipped as configured |
| `npm run typecheck --prefix apps/research-explorer` | PASS |
| `npm run explorer:build` | PASS end to end |
| Default production build | PASS — main 68.11 kB gzip; GraphExplorer 17.39 kB; Sigma 24.19 kB |
| `VITE_BASE_PATH=/open-evora/ npm run build` | PASS — emitted asset URLs under `/open-evora/assets/`; default build restored afterward |
| `npm audit --json` | PASS — 0 vulnerabilities at all severities; 141 dependencies counted by npm |
| Lint | Not configured; no lint script exists |
| Real browser | NOT RUN — browser integration had no available browser; no browser dependency installed |

The build emitted no warnings. Generated data, `dist/`, `node_modules/`, benchmark outputs, and browser scratch state remain ignored and untracked.

## 4. Existing-risk and deferred-finding reconciliation

| Previously known area | Current classification | Reconciliation |
|---|---|---|
| RecordDetail / edge payload-shape validation | Already known and still valid | Consolidated as REIQ-002; array-only checks remain and detail has no runtime shape check. |
| Focus transitions in ProblemView / GraphExplorer | Already known and still valid | Consolidated as REIQ-006; only generic Record detail currently moves focus. |
| App-level failure / partial-projection / `useGraphData` tests | Already known and still valid, partly covered | Startup and local detail errors have coverage, but recovery, fail-closed Problem-projection failure behavior, and direct `useGraphData` failure composition remain untested; REIQ-003. |
| Historical source-tree/corpus references | Duplicate — omit | ADR/roadmap/RE-05 phase counts are clearly dated historical evidence, not current-baseline claims. |
| Intentionally retained benchmark/view computation | Already known and accepted | Current scale and builds provide no new evidence to reopen it. |
| Graph lazy loading | Already known and resolved | Source and chunk output confirm GraphExplorer/Graphology/Sigma remain isolated. REIQ-005 is a separate lifecycle race, not a request to reopen the lazy-boundary decision. |
| Graph self-loop handling | Already known and resolved | Tests cover model/traversal behavior; the current corpus contains zero self-loops. |
| Existing `aria-live` improvement | Materially changed | Search-result announcement exists, but reports the 12-item display cap as the total; REIQ-008. |

The original public-deployment privacy risk remains valid but intentionally belongs to RE-07. It is not presented as a new RE-06 defect.

## 5. Deduplicated finding register

| ID | Title | Severity | Area | Confidence | Disposition | Known-finding relationship |
|---|---|---|---|---|---|---|
| REIQ-001 | Problem View hides explicit challenge/current-state semantics | HIGH | Correctness; Problem View; Trace Evidence | High — real-corpus and reproduced | FIX_BEFORE_RE06 | New |
| REIQ-002 | Provider accepts structurally invalid read-model payloads | MEDIUM | DataProvider; runtime integrity | High — source-proven | FIX_IN_RE06 | Already known and still valid |
| REIQ-003 | Failure handling has no direct recovery and Problem projection fails wholesale | MEDIUM | Runtime; resilience; tests | High — source-proven | FIX_IN_RE06 | Already known and still valid |
| REIQ-004 | Stale/invalid Graph focus becomes a misleading successful empty state | MEDIUM | URL; Graph; correctness | High — reproduced | FIX_BEFORE_RE06 | New |
| REIQ-005 | Slow Sigma loading can leave canvas and HTML graph on different states | MEDIUM | Graph; runtime; accessibility parity | High — reproduced with controlled import | FIX_BEFORE_RE06 | New; separate from resolved bundle isolation |
| REIQ-006 | Problem/Graph view transitions do not establish focus or a view title | MEDIUM | Accessibility; navigation | High for source absence; browser impact pending | FIX_BEFORE_RE06 | Already known and still valid |
| REIQ-007 | Authoritative read-model documentation disagrees with the implemented contract | MEDIUM | Documentation; maintainability | High — direct comparison | FIX_IN_RE06 | New |
| REIQ-008 | Graph search announces the display cap as the total match count | LOW | Accessibility; functional UX | High — reproduced | FIX_IN_RE06 | Materially changed from known aria-live item |
| REIQ-009 | No-op URL actions add duplicate history entries | LOW | URL/history; functional UX | High — source-proven | FIX_IN_RE06 | New |

## 6. Detailed findings

### REIQ-001 — Problem View hides explicit challenge/current-state semantics

- **Severity / area / confidence:** HIGH; correctness, Problem View, Trace Evidence; high.
- **Evidence:** `research/evidence/EVD-000127.yaml` is linked to `PRB-0006` and explicitly records `analysis.contribution: [CONTRADICTS]`, with an observation that the operator considers the process fully operational. `ProblemView.tsx` renders each evidence item only as typed ID plus its generic evidence `type`; it does not render `observation.summary`, `analysis.contribution`, evidence nature/strength, or inline `source` provenance when no SRC edge exists. Three PRB-0003 items and two PRB-0006 items currently have no linked SRC record, making that provenance omission current, not hypothetical.
- **Affected paths/components:** `research/evidence/EVD-000127.yaml`; `apps/research-explorer/src/problem/ProblemView.tsx`; `problemProjection.ts`; `ProblemView.test.tsx`.
- **Reproduction:** open `?view=problem&id=PRB-0006`. `EVD-000127` appears under “Evidência” as `[Evidência] EVD-000127 — stakeholder`; neither `CONTRADICTS` nor “fully operational” appears until the user leaves the Problem projection for generic detail. A disposable jsdom diagnostic reproduced the same output.
- **Expected:** the primary Problem projection distinguishes canonically explicit `CONFIRMS`, `REFINES`, `CONTRADICTS`, current-state, existing-solution, and planned-solution contributions, and exposes enough observation/provenance context to understand why each record is present. Missing analytical metadata must remain visibly unknown, not silently flattened.
- **Actual/risk:** all linked evidence is visually flattened into one undifferentiated list. The view framed as “why do we believe this problem exists, what evidence challenges it” hides the corpus's one explicit contradiction and multiple solution/current-state qualifiers.
- **Impact:** a user can leave the primary Problem workflow with a materially more affirmative understanding than the canonical evidence supports. Generic detail is technically complete, but the central specialized projection is not semantically faithful.
- **Architectural/canonical relevance:** this is not a request to infer edge meaning. The meaning is explicitly canonical on the EVD record and should be presented as such. It directly affects the RE-03 exit objective and the “same evidence across views” invariant.
- **Existing relationship:** new; not a duplicate of the rule against inferred Graph edge semantics.
- **Recommended disposition/direction:** `FIX_BEFORE_RE06`. Preserve progressive disclosure: present explicit canonical contribution(s) when recorded, a concise observation summary, and enough provenance/source indication to understand origin. Surface additional evidence qualifiers in the Problem projection only where omission would materially mislead; keep full metadata in generic Record Detail. Explicitly label absent analysis as not recorded. Add a real-corpus regression around PRB-0006/EVD-000127.

### REIQ-002 — Provider accepts structurally invalid read-model payloads

- **Severity / area / confidence:** MEDIUM; DataProvider/runtime integrity; high.
- **Evidence:** `StaticDataProvider.listRecords()` and `getEdges()` validate only that the payload is an array, then cast it. `getRecord()` performs no payload-shape validation. Manifest nested values and cross-file relationships are not validated at runtime. Consumers immediately dereference `record.id`, `summaryFields`, edge endpoints/keys, and `incomingEdges`/`outgoingEdges`.
- **Affected paths/components:** `src/dataProvider/StaticDataProvider.ts`; `records/recordIndex.ts`; `records/RecordDetailPanel.tsx`; `graph/buildGraphModel.ts`; all provider consumers.
- **Failure scenarios:** an array containing `null`, duplicate index IDs, an edge without a valid unique `id`, a detail without edge arrays, or a manifest/index count mismatch can throw outside the normal `DataLoadError` path or silently omit Graph relationships. Invalid JSON and non-array payloads are handled; malformed-but-fetchable shapes are not.
- **Expected:** the provider boundary either returns the minimum documented structure required for safe consumption or rejects with `DataLoadError(kind: "malformed")`; malformed payloads should not become view-specific crashes or quiet omissions.
- **Actual/risk:** TypeScript assertions substitute for runtime validation at the untrusted HTTP/JSON boundary. Local adapter output is currently valid, so the risk is corruption, stale mixed assets, manual hosting error, or a future provider defect rather than today's corpus.
- **Impact:** blank/error-boundary-less render failures, misleading partial Graphs, or inconsistent views; tests can pass because fixtures are well formed.
- **Architectural/canonical relevance:** strengthens the existing `DataProvider` boundary; it does not add a new data layer or parser.
- **Existing relationship:** already known and still valid; consolidated here rather than split by payload/view symptom.
- **Recommended disposition/direction:** `FIX_IN_RE06`. Add narrow boundary-safety guards for only the required manifest/index/detail/edge structure each consumer needs, with malformed-payload tests. This is not a second corpus/read-model validator: do not duplicate build-time referential integrity, global uniqueness, semantic/schema validation, or exhaustive count reconciliation in the browser unless later evidence justifies it.

### REIQ-003 — Failure handling has no direct recovery and Problem projection fails wholesale

- **Severity / area / confidence:** MEDIUM; runtime resilience and test confidence; high.
- **Evidence:** provider promises deliberately clear failed caches so a retry can succeed, but App and feature error UIs expose no retry action. `loadProblemProjection()` nests `Promise.all`; one assessment, evidence, source, or hypothesis failure rejects the entire projection and discards already available problem/evidence data.
- **Affected paths/components:** `App.tsx`; `useRecordIndex.ts`; `useRecordDetail.ts`; `problem/problemProjection.ts`; `useProblemProjection.ts`; `graph/useGraphData.ts`; error-rendering components and tests.
- **Failure scenario:** reject one source-detail fetch while the problem, assessment, and remaining evidence succeed. The user sees only “Falha ao carregar o Problema” and has no retry button. A manifest failure requires a full browser reload; detail recovery requires indirect reselection/navigation.
- **Expected:** explicit user-visible recovery for transient provider failures. Problem projection remains fail-closed by default rather than implying that an incomplete evidence set is complete.
- **Actual/risk:** errors are understandable and isolated between top-level views, but recovery is implicit; the current fail-closed Problem behavior may be unnecessarily blocking for a transient failure, while partial rendering has not been established as safe.
- **Impact:** a single bad request blocks the primary trace workflow and creates avoidable dead ends, especially under slow/unstable delivery or mixed static assets.
- **Architectural/canonical relevance:** can be fixed within current hooks/provider methods; no cache library, state manager, backend, or router is justified.
- **Existing relationship:** known App-level/partial-projection/`useGraphData` gap, still valid. Existing startup and detail-error tests are useful but do not close it.
- **Recommended disposition/direction:** `FIX_IN_RE06`. Define explicit per-view retry/recovery for transient provider failures and test manifest/index/detail/edge and child-detail recovery. Retain fail-closed Problem projection semantics by default. Treat partial Problem degradation as a separate future decision only if real need justifies it and unavailable evidence can be represented unambiguously without making a partial corpus appear complete.

### REIQ-004 — Stale/invalid Graph focus becomes a misleading successful empty state

- **Severity / area / confidence:** MEDIUM; URL/Graph correctness; high.
- **Evidence:** URL parsing intentionally leaves ID validation to `DataProvider`, but Graph never calls `getRecord()` for its focus. `GraphExplorer` maps `focusId === null || !graph.hasNode(focusId)` to empty arrays; the later render treats any non-null ID as a selected graph and announces `0 nós visíveis · 0 relações visíveis`.
- **Affected paths/components:** `urlState.ts`; `GraphExplorer.tsx`; missing Graph URL integration coverage.
- **Reproduction:** load `?view=graph&id=PRB-STALE`. The view does not show invalid/not-found feedback; it renders a successful 0-node graph state. Reproduced with a disposable component test.
- **Expected:** a stale or malformed focus produces the same safe, actionable invalid/not-found result as Records/Problem, with a clear route to clear or choose a valid focus.
- **Actual/risk:** UI and URL remain inconsistent while the user is told the graph loaded successfully.
- **Impact:** stale bookmarks and hand-edited URLs look like valid records with no relationships, which can be mistaken for a canonical absence.
- **Architectural/canonical relevance:** violates the documented URL safety comment and cross-view consistency; no router is needed.
- **Existing relationship:** new.
- **Recommended disposition/direction:** `FIX_BEFORE_RE06`. Validate focus membership against the already-loaded lookup, distinguish null from invalid, render an actionable alert, and cover direct-load/back-forward normalization.

### REIQ-005 — Slow Sigma loading can leave canvas and HTML graph on different states

- **Severity / area / confidence:** MEDIUM; Graph runtime and accessibility parity; high.
- **Evidence:** GraphCanvas's mount-only effect dynamically imports Sigma and closes over the initial `graph`. The separate `[graph]` effect calls `setGraph()` only if Sigma already exists. If props change before import resolution, that update is dropped; Sigma is then constructed with the old graph and receives no current graph until another prop change.
- **Affected paths/components:** `graph/GraphCanvas.tsx` lines around Sigma construction and the `setGraph` effect; absent lifecycle test.
- **Reproduction:** hold the Sigma import promise, render graph A, rerender with graph B, then resolve the import. A disposable controlled-import test proved the constructor receives A and `setGraph(B)` is never called.
- **Expected:** canvas, visible counts, node list, and edge table always describe the same focus/depth/filter state, including while the lazy chunk is slow.
- **Actual/risk:** the ordinary HTML alternative updates to B while the visual canvas remains on A. Slow network/cache/device conditions widen the race.
- **Impact:** sighted canvas users and HTML/keyboard users can receive materially different graph relationships until another interaction happens.
- **Architectural/canonical relevance:** this is a lifecycle defect inside the accepted lazy boundary, not evidence against lazy loading or Sigma.
- **Existing relationship:** new and separate from the resolved RE-05 bundle-isolation finding.
- **Recommended disposition/direction:** `FIX_BEFORE_RE06`. Keep a current-graph ref or synchronize the latest graph immediately after Sigma construction; add a delayed-import rerender test and verify canvas/list parity in a browser.

### REIQ-006 — Problem/Graph view transitions do not establish focus or a view title

- **Severity / area / confidence:** MEDIUM; accessibility/navigation; high for implementation evidence, with real-browser behavior pending.
- **Evidence:** only `RecordDetailPanel` moves focus after navigation. ProblemView and GraphExplorer have no focus target/effect; `document.title` remains the single static title. Entering either view from a detail action unmounts the focused trigger. The expanded Reading Guide also begins with `h3` sections without its own `h2` heading.
- **Affected paths/components:** `Explorer.tsx`; `problem/ProblemView.tsx`; `graph/GraphExplorer.tsx`; `guide/ReadingGuide.tsx`; `index.html`.
- **Failure scenario:** keyboard-activate “Ver como Problema” or “Ver no Grafo”. The activating control disappears and no programmatic focus or view-title announcement identifies the destination; errors similarly receive no deliberate focus.
- **Expected:** meaningful view transitions place focus on the destination heading/status (without stealing focus during ordinary in-view updates), expose a coherent heading hierarchy, and provide a useful document/view title.
- **Actual/risk:** navigation is URL-correct but can be silent or disorienting for keyboard and screen-reader users.
- **Impact:** loss of place and extra navigation effort in the two most complex views.
- **Architectural/canonical relevance:** functional accessibility required before local v1; unrelated to the deferred visual Design Review.
- **Existing relationship:** already known and still valid.
- **Recommended disposition/direction:** `FIX_BEFORE_RE06`. Define one focus policy for view entry and terminal errors, make headings structurally coherent, update the title from URL state, and validate with keyboard/screen reader in a real browser.

### REIQ-007 — Authoritative read-model documentation disagrees with the implemented contract

- **Severity / area / confidence:** MEDIUM; documentation/maintainability; high.
- **Evidence:** the authoritative read-model spec shows `generated_at`/`source_commit`; implementation and provider require `generatedAt`/`sourceCommit`. The spec's edge shape omits required runtime fields `id` and `ordinal`. ADR-001 says each generated file carries timestamp/count metadata, while only the manifest does. A provider implemented literally from the spec would fail compatibility with current output.
- **Affected paths/components:** `docs/architecture/research-explorer-read-model-spec.md`; ADR-001 D5; `scripts/read-model.js`; `dataProvider/types.ts`; `StaticDataProvider.ts`.
- **Expected:** the one declared UI contract exactly describes current generated keys and required edge identity.
- **Actual/risk:** canonical documentation is precise in intent but stale in executable shape.
- **Impact:** future provider/adapter work can introduce avoidable incompatibility or misdiagnose correct output as malformed.
- **Architectural/canonical relevance:** documentation/implementation disagreement must be reported, not silently resolved. Historical 220/223 phase counts elsewhere are correctly historical and are not part of this finding.
- **Existing relationship:** new.
- **Recommended disposition/direction:** `FIX_IN_RE06`. Reconcile the canonical spec/ADR to the implemented v1 shape and clarify which manifest fields are operational versus per-file; do not change runtime shape merely to match the stale example without a deliberate contract decision.

### REIQ-008 — Graph search announces the display cap as the total match count

- **Severity / area / confidence:** LOW; accessibility/functional UX; high.
- **Evidence:** search matches are sliced to `MAX_SEARCH_RESULTS = 12`, then `searchResults.length` is announced as “resultados encontrados”. The current corpus has 127 EVD records, so a broad `EVD-` query announces 12, not 127 or “first 12”. Reproduced with 20 matching fixtures.
- **Affected paths/components:** `graph/GraphExplorer.tsx`; Graph search tests.
- **Expected:** announce total matches and separately state how many are displayed, or state that the first 12 are shown.
- **Actual/risk:** users, including screen-reader users, are told that no further matches exist.
- **Impact:** limited discoverability and misleading zero/low-confidence search feedback; narrowing the query remains possible.
- **Architectural/canonical relevance:** no search index/server search is justified; this is presentation of an already-computed client-side result.
- **Existing relationship:** materially changed from the post-RE-05 aria-live improvement: announcement exists, but its meaning is inaccurate.
- **Recommended disposition/direction:** `FIX_IN_RE06`. Compute total before slicing and test both total and displayed count.

### REIQ-009 — No-op URL actions add duplicate history entries

- **Severity / area / confidence:** LOW; URL/history UX; high.
- **Evidence:** every `setView`, `setSelectedId`, and `setTypeFilter` call unconditionally invokes `pushState`; equality with current serialized state is not checked.
- **Affected paths/components:** `useExplorerUrlState.ts`; navigation controls and URL integration tests.
- **Reproduction:** repeatedly activate the already-current “Registos” button, reselect the current record, or choose the current type filter. Each action adds an indistinguishable history entry, so Back appears to do nothing.
- **Expected:** only a semantic state change creates a history entry; continuous search/depth changes continue to use replace.
- **Actual/risk:** redundant entries pollute native history.
- **Impact:** limited but real back-navigation friction.
- **Architectural/canonical relevance:** the native History API remains sufficient; no router is warranted.
- **Existing relationship:** new.
- **Recommended disposition/direction:** `FIX_IN_RE06`. Suppress semantically identical push/replace writes and add no-op/back-stack tests.

## 7. Findings by severity

| Severity | Count | Findings |
|---|---:|---|
| BLOCKER | 0 | — |
| HIGH | 1 | REIQ-001 |
| MEDIUM | 6 | REIQ-002 through REIQ-007 |
| LOW | 2 | REIQ-008, REIQ-009 |
| NOTE | 0 | — |

## 8. Findings by disposition

| Disposition | Count | Findings |
|---|---:|---|
| FIX_BEFORE_RE06 | 4 | REIQ-001, REIQ-004, REIQ-005, REIQ-006 |
| FIX_IN_RE06 | 5 | REIQ-002, REIQ-003, REIQ-007, REIQ-008, REIQ-009 |
| DESIGN_REVIEW | 0 | See explicitly deferred validation topics below; none is asserted as a proven engineering finding. |
| DEFER | 0 | — |
| ACCEPT | 0 | — |
| NEEDS_VALIDATION | 0 | Browser-only residuals are recorded as residual risk rather than inflated into findings. |

## 9. Architecture and correctness assessment

The architecture passes. All production `fetch()` calls are confined to `StaticDataProvider`; feature code depends on the `DataProvider` interface. Adapter logic remains schema/reference driven, generated data is ignored/disposable, root research tooling remains dependency-free, and no Graph concern leaks into canonical schemas or primary-view data access. Problem and Graph projections are appropriately feature-local rather than new persistence layers.

The canonical-to-generated path also passes for the current corpus. Every index record has a matching detail identity; outgoing detail edges total exactly 376; Graph edges have unique IDs and valid endpoints. Problem projection's ID union is deterministic and currently yields exactly the canonical PRB evidence set for all ten problems. REIQ-001 concerns the semantic information displayed for those correctly selected records, not record omission.

No fundamental/core-contract failure supports an architecture review. The strongest architecture-related issue is REIQ-007's contract-document drift, followed by the known runtime validation weakness at the provider boundary.

## 10. Accessibility assessment

Verified strengths include the skip link, semantic main/nav/sections, labelled controls, real table markup, button semantics, visible focus styling, non-colour selection markers, Records detail focus, loading/error live regions, Records zero-result announcement, text type labels, and a complete HTML Graph node/edge alternative.

REIQ-006 is the material open issue: Problem/Graph transitions and terminal errors lack an explicit focus/title policy. REIQ-008 makes Graph search's live message inaccurate. Keyboard operability of the HTML controls is source/jsdom-supported; real focus behavior, browser zoom/reflow, canvas behavior, screen-reader announcements, and responsive tab order still require manual validation.

## 11. Graph assessment

Graphology uses a `MultiDirectedGraph`, preserves edge identity/direction/field/ordinal, handles self-loops in tests, traverses neighborhoods in both directions while preserving arrow direction, defaults to one hop, caps at two hops, and makes full corpus opt-in. The current corpus has 91 reciprocal PRB↔EVD pairs (182 directed edges); these are distinct canonical references, not duplicates. The HTML table lists both directions and their fields.

Graph remains lazy: the default build separates the main, GraphExplorer, and Sigma chunks, and `edges.json` is called only by the Graph hook. REIQ-004 and REIQ-005 are the material correctness/parity findings; REIQ-008 is a smaller search issue.

The later Design Review/manual browser pass should evaluate whether concentric full-corpus rings imply hierarchy/importance, whether reciprocal arrows and overlapping labels remain legible, and whether the canvas at narrow/zoomed viewports communicates the same relationships as the HTML alternative. These are explicitly not asserted here as proven defects.

## 12. Runtime and resilience assessment

Loading states are present and announced. Network rejection, HTTP errors, invalid JSON, incompatible manifest version, unsafe/unknown Record IDs, and Graph canvas construction failure have explicit handling. Record-detail failure is isolated from the Records index, and Graph data failure does not destroy other views.

The remaining resilience gaps are REIQ-002 (narrow boundary-safety validation), REIQ-003 (explicit retry/recovery while retaining fail-closed Problem semantics), REIQ-004 (Graph URL validation), and REIQ-005 (slow lazy-import state loss). There is no evidence of silent canonical-data loss in the generated baseline.

## 13. Security and privacy assessment

The realistic attack surface is low. The app is static, read-only, has no auth/backend/database, uses React text rendering, contains no `dangerouslySetInnerHTML`, `innerHTML`, `eval`, or user-controlled external-link target, and validates/encodes record IDs before constructing detail paths. Vite source maps are not emitted by the current configuration. `npm audit` reports zero known vulnerabilities.

The strongest privacy residual is the already-documented deployment boundary: production output includes full canonical record details, including canonicalized stakeholder records whose `source_reference` says “private research note, not public”. Current records inspected retain no raw correspondence/contact identity and mark personal data not retained, so this is not a current local-app leak. Publishing `dist/` without the RE-07 privacy/licensing/content review would change that risk materially; the existing RE-07 gate remains necessary and sufficient for now.

## 14. Performance assessment

Performance is acceptable and no new optimization is justified. Current build sizes match RE-05, Graph remains isolated, index/edges are cached by provider, Records use one index fetch, details remain on demand, and Problem N+1 work remains bounded by one problem's linked records. The retained per-render/search calculations are known and acceptable at 244 records and the previously measured synthetic envelope.

No evidence supports virtualization, read-model sharding, debouncing, a search index, workers, server search, or a backend. Sigma full-corpus WebGL at 10,000 nodes and real-browser heap remain historical residual risks only.

## 15. Test-confidence assessment

The suite gives strong confidence in adapter determinism/fail-closed publishing, URL serialization, Records filtering/pagination, generic/future types, basic history, Problem ID projection, graph construction/neighborhood/filtering/direction, self-loops, version compatibility, and common provider errors.

Confidence is weaker than the 146-pass headline suggests in four places:

- fixtures overwhelmingly satisfy TypeScript shapes, so REIQ-002 cannot fail;
- Problem tests prove linked IDs, not canonical contribution/observation fidelity, fail-closed child-detail failure/recovery, or current EVD-000127 behavior;
- Graph tests do not cover stale focus IDs, `useGraphData` composition, delayed Sigma import/rerender, or total-versus-capped search counts;
- jsdom cannot validate actual focus restoration, CSS layout/reflow, WebGL/Sigma rendering, static-host refresh, lazy-chunk networking, or native-browser history behavior.

The suite is valuable but should not be treated as complete product-level evidence.

## 16. Real-browser residual-risk assessment

A small real-browser smoke pass is required before Local v1 readiness; it is not a commitment to add Playwright, Cypress, or another permanent E2E dependency. Historical RE-02–RE-05 documents record successful Playwright walkthroughs at 220/223 records, which lowers baseline risk, but this review could not repeat them at the current 244-record corpus. Automation can be considered later only if repeated execution and value justify it.

Minimum valuable scenarios:

1. default-root and `/open-evora/` preview load, direct query deep link, refresh, and lazy Graph chunk/data requests;
2. Back/Forward across Records → Problem → Graph and record-to-record selection, including stale/malformed IDs;
3. keyboard-only view entry, focus after success/error/retry, skip link, and search/filter announcements;
4. 320–375 px viewport and 200% zoom with Records tables, long detail values, controls, and Graph canvas/HTML alternative;
5. Sigma/WebGL success and failure, delayed chunk load with focus/depth change, and canvas/list parity;
6. full-corpus opt-in with filters and reciprocal directed edges.

## 17. Documentation-drift assessment

REIQ-007 is the one actionable contradiction. ADR context counts, roadmap exit-gate counts, benchmark-plan baseline, and RE-05's 223/337 results are correctly historical and should not be rewritten as if they were current measurements. The roadmap's current phase state remains correct: RE-00 through RE-05 closed, RE-06 next.

The RE-00 risk review is also correctly historical. Its public-deployment privacy gate remains valid; its parser-scale risk was resolved by RE-05 measurement. No alternative governance or architecture document is needed.

## 18. RE-06 readiness recommendation and remediation order

RE-06 does not need scope or architecture change. Complete this bounded pre-RE-06 set in order:

1. **REIQ-001:** make Problem evidence semantically faithful through concise, progressive disclosure of explicit canonical contributions, observation summary, and provenance; lock EVD-000127 into a real-corpus regression while retaining generic Record Detail for full metadata.
2. **REIQ-004:** make stale/invalid Graph deep links explicit and recoverable.
3. **REIQ-005:** synchronize the latest render graph after Sigma resolves; browser-check canvas/HTML parity.
4. **REIQ-006:** implement and manually validate one focus/title policy for Problem/Graph entry and errors.

Then complete REIQ-002, REIQ-003, REIQ-007, REIQ-008, and REIQ-009 within RE-06 before declaring local v1 complete. Run the full current pipeline plus the bounded real-browser smoke above. Do not add architecture or dependencies without new evidence.

Items explicitly deferred to the separate Design Review: visual hierarchy/legibility of the full-corpus ring layout, reciprocal-arrow and label legibility, typography/density, long-content presentation, and responsive visual quality. Functional focus, semantic fidelity, error recovery, and canvas/HTML parity are not Design Review deferrals.

READY_WITH_PRE_RE06_FIXES
