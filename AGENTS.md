# Open Évora Agent Instructions

## Open Évora hard guardrails

Details: [Data Publication and Agent Safety Policy](docs/governance/data-publication-and-agent-safety.md).

1. This repository is public. Treat every commit, PR diff, Git history entry, and generated artifact intended for a committed or public surface as a publication action.
2. Do not publish private/raw material, non-public attachments or source files, correspondence, recordings, transcripts, private responses, or unnecessary contact details.
3. Exclude personal identifiers by default; include them only with demonstrated necessity and an appropriate publication basis.
4. Permission uncertainty fails closed: public access, machine readability, reuse rights, and publication rights are distinct. Sanitized does not automatically mean publishable. Pending, unknown, or unclear publication or reuse permission means do not publish.
5. If potentially non-public material is found, STOP affected work; report only record IDs, paths, and categories, do not reproduce it, and seek approval before remediation.
6. Do not send outreach, submit forms, deploy, publish releases, or change external systems without explicit authorization in the current task scope.
7. Do not force-push, rewrite history, weaken protections, delete public history, or take destructive remediation action without explicit approval.
8. Preserve canonical integrity: do not invent or silently normalize facts; keep `UNKNOWN` distinct from `NO` and preserve evidence/status distinctions.
9. Use canonical source -> governed derived projection -> UI/public artifact; do not create a parallel semantic source of truth without approval.
10. Do not commit secrets, sensitive environment values, authenticated URLs, user-machine paths, editor-local URLs (such as `vscode-webview://` or `file://`), or local agent/tool state.
11. New evidence does not itself authorize implementation, endorsement, or PRB/ASM/WU/gate/milestone state changes.
12. A successful build is not a public-deployment approval: complete privacy, permission/reuse, corpus/assets, accessibility, and exposure review first.
13. Do not autonomously expand scope or advance a milestone, Work Unit, gate, PRB, ASM, or other project state.

## Language

User/public-facing Open Évora content uses Portuguese (Portugal); internal technical semantics remain English. Localize technical enums and schema values only at presentation, never canonically. Official source, entity, and document names remain authoritative and unchanged.
