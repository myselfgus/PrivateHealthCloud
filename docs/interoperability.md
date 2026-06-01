# Interoperability

## Purpose

Reserve a clear path for internal and external interoperability.

## What This Layer Does

Interoperability covers internal APIs, MCP for agents and tools, webhooks, import/export, future FHIR/HL7, external clinical systems, provider integrations, and future semantic mapping.

## What This Layer Does Not Do

It does not implement FHIR, HL7, external system sync, or provider integrations yet.

## Expected Interfaces

- capability gateway
- integration gateway
- import/export requests
- semantic mapping records as future contracts
- audit and provenance for transformations

## Risks To Avoid

- Treating external interoperability as direct database access.
- Mapping data without provenance.
- Exporting patient data without consent scope.
- Assuming one institution or one environment.

## Next Steps

- Define an import artifact contract.
- Define an export approval path.
- Add future FHIR/HL7 mapping notes without implementing connectors.
