# Application Layer

## Purpose

Define applications as governed clients of HealthOS Private Cloud.

## What This Layer Does

Applications declare capabilities, data classes, expected outputs, and human approval points. They request governed capabilities and receive safe references, mediated views, or governed results.

## What This Layer Does Not Do

Applications do not access storage, identity systems, model providers, agents, or external integrations directly.

## Expected Interfaces

- `ApplicationManifest`
- `CapabilityRequest`
- `GovernanceDecision`
- safe references
- governed projections
- human approval points

## Risks To Avoid

- App-specific compliance logic becoming the source of truth.
- Apps storing clinical data outside the governed Data Layer.
- Clinical document finalization without approval when policy requires it.
- Capability manifests that ask for broad access.

## Next Steps

- Expand application manifest validation.
- Define Scribe proof capability calls.
- Add tests for no direct storage access.
