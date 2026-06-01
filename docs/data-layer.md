# Data Layer

## Purpose

Define how clinical data exists before any database implementation is chosen.

## What This Layer Does

The Data Layer represents clinical data through canonical records, event logs, artifacts, relational projections, semantic projections, graph projections, agent memory, and a capability index.

AI does not access the raw clinical record. AI accesses governed projections.

## What This Layer Does Not Do

It does not expose raw storage to apps, agents, models, or integrations. It does not choose a database engine in this scaffold.

## Expected Interfaces

- `PatientRef`
- `ArtifactRef`
- `DataAccessRequest`
- governed projections
- safe references
- audit events
- provenance records

## Risks To Avoid

- Treating one app-owned database as the clinical source of truth.
- Letting embeddings leak PHI.
- Mixing agent memory with canonical records.
- Producing derived artifacts without provenance.

## Next Steps

- Define canonical artifact classes.
- Define projection update rules.
- Add retention and deletion requirements per data class.
