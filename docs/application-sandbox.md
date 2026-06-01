# Application Sandbox

## Purpose

Define the conceptual sandbox around applications.

## What This Layer Does

The sandbox requires applications to declare capabilities, requested data, outputs, and human approval points. It provides mediated views, safe references, and governed results.

## What This Layer Does Not Do

It does not implement process isolation, package signing, UI sandboxing, or runtime permissions yet.

## Expected Interfaces

- application manifest
- capability gateway
- policy enforcement point
- safe reference resolver
- output finalization gate

## Risks To Avoid

- Direct storage access.
- Direct identity access.
- Direct model calls.
- Direct integration credentials.
- Governance bypass through app plugins or tools.

## Next Steps

- Define application package requirements.
- Add sandbox permission schema.
- Add contract tests for restricted access.
