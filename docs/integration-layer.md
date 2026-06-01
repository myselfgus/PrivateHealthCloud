# Integration Layer

## Purpose

Define how HealthOS communicates with external systems.

## What This Layer Does

The Integration Layer mediates APIs, MCP, future FHIR/HL7 connectors, webhooks, import/export, provider integrations, and clinical system connectors.

## What This Layer Does Not Do

It does not implement real connectors, external credentials, semantic mapping, or clinical system sync in this scaffold.

## Expected Interfaces

- `CapabilityRequest`
- service identity
- integration actor reference
- governance decision
- audit event
- provenance record where data is transformed

## Risks To Avoid

- External systems receiving more data than needed.
- Permissive imports without classification.
- Exports without consent and governance.
- Integration logs leaking PHI.

## Next Steps

- Define import/export manifests.
- Reserve FHIR/HL7 mapping contracts.
- Add external integration denial tests.
