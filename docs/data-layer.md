# Data Layer

## Purpose

Define how clinical data exists before any database implementation is chosen.

## What This Layer Does

The Data Layer represents clinical data through canonical records, event logs, artifacts, relational projections, semantic projections, graph projections, agent memory, and a capability index.

AI does not access the raw clinical record. AI accesses governed projections.

The multi-representational model is:

1. Canonical Record: original data, encrypted, auditable, and preserved.
2. Event Log: append-only operational history for audit, reconstruction, debugging, and provenance.
3. Artifact Store: transcripts, notes, outputs, reports, documents, embeddings, intermediate model objects, and derived objects.
4. Relational Projection: structured query views for patient, session, professional, organization, consent, and status.
5. Semantic Projection: chunks, embeddings, summaries, concepts, entities, and clinical relationships.
6. Graph Projection: events, symptoms, medications, hypotheses, links, temporality, agents, artifacts, and decisions.
7. Agent Memory: operational memory separated by agent, patient, professional, organization, purpose, and scope.
8. Capability Index: what can be accessed by whom, under which consent, for which purpose, and through which capability.

Conceptual pipeline:

```text
Original audio
  -> canonical encrypted artifact
Transcript
  -> clinical artifact
Patient speech excerpts
  -> semantic chunks
ASL / VDLP / GEM / other clinical analyses
  -> derived clinical artifacts
Longitudinal summary
  -> agent-readable projection
Embedding
  -> semantic index
Clinical relationships
  -> graph projection
Everything
  -> provenance graph + audit log
```

## What This Layer Does Not Do

It does not expose raw storage to apps, agents, models, or integrations. It does not choose a database engine in this scaffold.

## Expected Interfaces

- `PatientRef`
- `ArtifactRef`
- `DataAccessRequest`
- `CapabilityRequest`
- `GovernanceDecision`
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
