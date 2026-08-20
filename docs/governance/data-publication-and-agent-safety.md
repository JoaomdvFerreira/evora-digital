# Data Publication and Agent Safety Policy

**Status:** Baseline policy
**Scope:** Every contributor and agent action that can affect this public repository or a public-facing output.

## 1. Public repository means publication

Treat commits, pull-request diffs, Git history, refs, generated artifacts intended for committed or public surfaces, and deployments as publication actions. Local-only generated artifacts are not automatically publication actions. Local build success does not establish publication readiness.

## 2. Private, raw, and identifying material

Do not publish private correspondence, transcripts, recordings, private responses, non-public attachments or source files, participant identities, or unnecessary personal/contact details by default. Personal identifiers require demonstrated necessity and an appropriate publication basis.

## 3. Permission and reuse fail closed

Keep privacy, public accessibility, machine readability, reuse rights, and publication rights distinct. Sanitization alone does not make material publishable. Pending, unknown, or unclear permission means do not publish affected material or dependent derived findings until reviewed; absence of prohibition is not consent.

## 4. Canonical research integrity

Do not invent or silently normalize missing facts. Preserve the distinction between `UNKNOWN` and `NO`, historical and current, proposed and implemented, stakeholder statement and institutional fact, and evidence and validated conclusion.

## 5. Evidence and governance are separate

New evidence does not by itself change PRB, ASM, WU, gate, or milestone state; authorize implementation; or imply endorsement. Do not make project-state transitions as a side effect of documentation, ingestion, research, or implementation.

## 6. One semantic source of truth

Prefer this flow:

```text
canonical source -> governed derived projection -> UI/public artifact
```

Do not create parallel frontend or editorial semantic truth without explicit approval.

## 7. Secrets and local state

Never commit credentials, tokens, cookies, sensitive `.env` values, authenticated private URLs, user-machine paths, editor-local URLs (such as `vscode-webview://` or `file://`), or local agent/tool state unless explicitly governed.

## 8. External and destructive actions

Do not autonomously send email, submit forms, contact institutions, deploy publicly, publish releases, or change external systems without explicit authorization in the current task scope. Do not autonomously force-push, rewrite history, weaken protections, delete public history, or perform destructive remediation.

For a destructive or history-changing issue, follow: **detect -> stop -> report safely -> remediation plan -> explicit approval -> execute**.

## 9. Public deployment gate

Before public deployment, review privacy, permission/reuse, publication safety of corpus and assets, accessibility, and exposure. A passing build or local run is insufficient.

## 10. Incident handling

If potentially non-public material is found on a public surface, stop normal work affecting it. Do not unnecessarily reproduce sensitive content; report record IDs, paths, and categories instead. Do not automatically create a public remediation PR. Consider the current tree, PR diffs, Git history, refs, and generated/deployed artifacts, and obtain explicit approval before destructive remediation.

## 11. Scope control

Do not autonomously start another milestone, Work Unit, deep dive, refactor, or implementation because the current task completed.
