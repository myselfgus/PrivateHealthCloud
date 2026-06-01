# Integration Gateway

## Role

Mediates internal APIs, MCP, webhooks, import/export, future FHIR/HL7 connectors, and external provider integrations.

## Contracts Consumed Or Produced

- Consumes `ServiceIdentity`, `CapabilityRequest`, `GovernanceDecision`, and future import/export contracts.
- Produces audit events and provenance records for transformed data.

## Direct Access Limits

External systems must not receive broad storage access or ungoverned exports. Integration credentials are not application credentials.

## Governance Relationship

Every import, export, provider call, or external system operation must be scoped by policy, consent, organization, patient, and purpose.

## Next Steps

- Define import/export contracts.
- Reserve future FHIR/HL7 mappings.
- Add external integration denial tests.
