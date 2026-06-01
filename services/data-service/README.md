# Data Service

## Role

Owns mediated access to canonical records, artifacts, projections, semantic indexes, graph projections, and agent-readable data views.

## Contracts Consumed Or Produced

- Consumes `DataAccessRequest`, `CapabilityRequest`, and `GovernanceDecision`.
- Produces `PatientRef`, `ArtifactRef`, `AuditEvent`, and `ProvenanceRecord`.

## Direct Access Limits

The service is not a raw storage surface for applications. Apps, agents, models, and integrations must request capabilities through gateways and receive safe references or governed projections.

## Governance Relationship

Every clinical data read or artifact write must reference a governance decision. Reidentification, export, and projection assembly require explicit policy outcomes.

## Next Steps

- Define canonical artifact classes.
- Define projection builders.
- Add tests for denied raw storage access.
