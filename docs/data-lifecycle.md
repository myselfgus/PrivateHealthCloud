# Data Lifecycle

## Purpose

Describe how clinical data should move through the platform over time.

## What This Layer Does

The lifecycle covers creation, ingestion, sensitivity classification, encryption requirements, projections, semantic indexing, graph projection, agent use, retention, archival, export, legal hold, deletion, secure destruction, backup, restore, and disaster recovery.

## What This Layer Does Not Do

It does not implement cryptography, storage engines, retention automation, or deletion workflows.

## Expected Interfaces

- artifact creation capability
- data classification policy
- projection builders
- retention policy
- export approval path
- audit and provenance records

## Risks To Avoid

- Keeping derived data after source data is revoked or deleted.
- Logging PHI during ingestion or indexing.
- Exporting data without governance.
- Backing up sensitive data without encryption and restore tests.

## Next Steps

- Define data classes and retention defaults.
- Specify legal hold behavior.
- Define restore verification requirements.
