# Architecture

## Purpose

Describe the simple layered architecture for HealthOS Private Cloud.

## What This Layer Does

The architecture separates compute, data, governance, agents, models, applications, and integrations so every data operation can be mediated by policy, audit, and provenance.

```text
HealthOS Private Cloud
|-- Infrastructure Layer
|-- Data Layer
|-- Governance Layer
|-- Agent Layer
|-- Model Layer
|-- Application Layer
`-- Integration Layer
```

## What This Layer Does Not Do

It does not implement deployment, storage, model execution, clinical workflow, or external interoperability. It only defines responsibilities and contract boundaries.

## Expected Interfaces

- Capability requests enter through application or integration gateways.
- Governance decisions allow, deny, degrade, or require approval.
- Services return safe references, governed projections, or traceable artifacts.
- Audit events and provenance records are produced for relevant operations.

## Risks To Avoid

- Direct app access to storage, identity, models, or integration credentials.
- Model calls without explicit policy.
- Governance decisions that are not enforced.
- Audit logs that contain PHI in technical telemetry.

## Next Steps

- Define the first end-to-end capability path.
- Add contract tests for examples.
- Keep service boundaries small until runtime requirements are proven.
