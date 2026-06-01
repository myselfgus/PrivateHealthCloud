# Observability

## Purpose

Separate technical telemetry from governance audit, clinical audit, model provenance, agent tracing, and integration logs.

## What This Layer Does

Observability tracks service health, capability flow, governance decisions, clinical audit events, model provenance, agent events, and integration operations without leaking PHI into technical logs.

## What This Layer Does Not Do

It does not store raw clinical payloads in logs and does not replace audit or provenance contracts.

## Expected Interfaces

- technical telemetry
- governance audit
- clinical audit
- model provenance
- agent event tracing
- integration logs

## Risks To Avoid

- PHI in stack traces or request logs.
- Audit events mixed with ephemeral debug logs.
- Missing trace IDs across capability boundaries.
- Model outputs without provenance.

## Next Steps

- Define redaction requirements.
- Add trace ID fields to future service contracts.
- Add tests for log payload minimization.
