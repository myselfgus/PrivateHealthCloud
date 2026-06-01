# Vision

## Purpose

Define the product direction for HealthOS Private Cloud in plain technical and commercial language.

## What This Layer Does

HealthOS Private Cloud provides governed healthcare infrastructure for clinical data, agents, AI models, applications, and integrations. It centralizes consent, privacy, encryption requirements, auditability, controlled data access, and interoperability so each application does not need to reinvent them.

## What This Layer Does Not Do

It does not define a finished product, an EHR replacement, a single-device architecture, or a UI. It does not claim operational readiness.

## Expected Interfaces

- Governed capability requests from apps, agents, and integrations.
- Policy decisions from the Governance Layer.
- Safe references and governed projections from the Data Layer.
- Model provider manifests and provenance records.

## Risks To Avoid

- Making an app responsible for compliance and data custody.
- Treating Apple Silicon as the end-user product.
- Letting agents or models bypass governance.
- Describing future infrastructure as already complete.

## Next Steps

- Keep the naming aligned with `docs/naming.md`.
- Convert the first governed capability into a narrow implementation plan.
- Define minimum acceptance tests before adding runtime code.
