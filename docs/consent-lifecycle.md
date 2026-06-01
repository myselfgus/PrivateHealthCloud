# Consent Lifecycle

## Purpose

Define how patient consent is represented and used in governed operations.

## What This Layer Does

Consent records cover creation, scope, purpose, validity, revocation, renewal, granularity by data class, capability, model, app, and agent, plus the relationship to reidentification and remote model use.

## What This Layer Does Not Do

It does not implement legal consent capture, signatures, patient UI, or jurisdiction-specific policy.

## Expected Interfaces

- `ConsentRecord`
- `GovernanceDecision`
- capability request purpose
- audit event for creation, renewal, and revocation
- provenance link when consent affects derived outputs

## Risks To Avoid

- Treating consent as broad and permanent.
- Continuing access after revocation.
- Allowing remote model use without explicit consent and policy.
- Reidentifying without an explicit governance decision.

## Next Steps

- Define consent scopes and renewal rules.
- Add revocation impact tests.
- Define patient-facing consent review requirements for a future app.
