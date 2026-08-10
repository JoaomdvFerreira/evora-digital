# Research Ethics and Public-Signal Rules

**Version:** 0.1  
**Status:** Baseline draft

## 1. Principle

Évora Digital researches problems, not people.

The programme should retain only the personal information necessary to understand and validate a civic problem.

## 2. Public content

Publicly accessible content may be used as research evidence when appropriate, but public accessibility does not imply unrestricted reuse or republication.

Always distinguish:

- ability to view;
- ability to store;
- ability to quote;
- ability to redistribute;
- ability to expose through a public API.

## 3. Initial D2 permissions

The first Public Signal Discovery cycle may use:

- public web search;
- public pages;
- public posts;
- publicly accessible comments;
- public meeting records;
- public consultations;
- public petitions;
- public reviews;
- local press;
- public association and parish communications.

## 4. Initial D2 prohibitions

Do not initially:

- scrape private or restricted groups;
- bypass access controls;
- perform mass platform scraping without confirming terms and legal basis;
- create profiles of citizens;
- correlate a person's activity across platforms;
- publish usernames unnecessarily;
- infer sensitive personal attributes;
- perform facial recognition;
- classify or score individual citizens;
- treat social volume as representative polling.

## 5. Personal-data minimisation

For a public signal such as:

> A resident reports that a bus route is too infrequent for commuting.

Prefer retaining:

```yaml
actor_type: resident
problem: insufficient bus frequency for commuting
location: relevant area
source_reference: retained
personal_identity: not retained
```

rather than a username, profile URL, or personal biography unless a clear research reason requires it.

## 6. Sensitive information

Health, political views, religion, ethnicity, sexuality, and other sensitive information must not be inferred from public content.

If sensitive details are incidentally present in source material but not necessary to the research purpose, do not copy them into structured records.

## 7. Quotation

Use direct quotations sparingly.

Prefer paraphrasing the observed friction and retaining the source reference.

Quotations should be used only when the exact wording is analytically important.

## 8. Evidence versus public facts

Social-media evidence must never flow directly into a canonical public-data record.

Required conceptual path:

```text
Public signal
   ↓
Evidence record
   ↓
Corroboration / verification
   ↓
Verified data
   ↓
Public data layer
```

## 9. Research transparency

Where practical, published Évora Digital research should explain:

- what source classes were used;
- major known biases;
- what was excluded;
- what the research can and cannot conclude;
- dates of collection;
- confidence level.

## 10. Removal and correction

If the programme later publishes research outputs containing incorrectly retained personal information or materially inaccurate attribution, there must be a practical correction/removal mechanism.

A detailed operational procedure should be defined before publication of a large public evidence corpus.
