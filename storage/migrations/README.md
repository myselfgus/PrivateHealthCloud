# Storage Migrations

This folder is reserved for future database or storage migrations.

No real storage migration exists in this scaffold. Future migrations must preserve auditability, provenance, tenant isolation, consent scope, and rollback or restore strategy.

Raw storage changes are not an application API.

Next steps:

- Define migration naming.
- Define backup requirements before destructive changes.
- Add migration validation tests.
