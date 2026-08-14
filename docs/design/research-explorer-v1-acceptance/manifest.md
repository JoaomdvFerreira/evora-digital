# Research Explorer — Local v1 Product Acceptance Evidence

Captured against the production build (`vite build` + `vite preview`), real generated read model (244 records, 376 edges, 0 dangling), real Chrome via Playwright. Supplements, does not duplicate, the RE-06 evidence pack.

| # | File | Viewport | Shows |
|---|---|---|---|
| 1 | `01-generic-detail-evd127-desktop.png` | 1400×900 | Generic Record Detail for `EVD-000127`: meaning zone before schema mechanics, compact provenance, closed technical disclosure, "Ver como Problema (PRB-0006)" contextual action. |
| 2 | `02-problem-view-prb0006-desktop.png` | 1400×900 | Problem View for `PRB-0006`: `Detalhe · Problema · Grafo` switcher, collapsed point-of-use help disclosure, Estado atual canonical-value+gloss chips, section order intact. |
| 3 | `03-contribution-chips-occurrence-summary.png` | 1400×900 | Evidência section: contribution-occurrence legend (15 occurrences over 10 items) and per-item chips, including `EVD-000127`/CONTRADICTS at identical structural weight to every other item. |
| 4 | `04-graph-focus-prb0006.png` | 1400×900 | Graph opened via the PRB switcher's "Grafo" action, correctly focused on `PRB-0006`'s 1-hop neighbourhood (12 nodes, 21 relations), matching the evidence set shown in Problem View. |
| 5 | `05-records-narrow-360.png` | 360×800 | Records at narrow width: single-column adapted list, label-primary/ID-secondary rows, no file path in scanning rows, no horizontal overflow. |
| 6 | `06-problem-view-narrow-360.png` | 360×800 | Problem View at narrow width: switcher and help disclosure remain operable, layout stacks without overflow. |
| 7 | `07-reading-guide-link-opens-disclosure-fixed.png` | 1400×900 | Post-remediation: Problem View's "Ver a Orientação completa do Explorer" link now actually opens the collapsed Reading Guide disclosure at `#reading-guide`, not just navigating past it. |

All screenshots taken 2026-08-14 against `apps/research-explorer` production preview (`vite preview`, base `/`).
