# Governance Layer

## Purpose

Define how HealthOS decides whether a specific operation may proceed.

## What This Layer Does

The Governance Layer evaluates actor, organization, patient, purpose, consent, role, permission, data sensitivity, reidentification, model-use policy, audit requirements, and human approval gates.

## What This Layer Does Not Do

It does not execute the data operation itself and does not rely on apps to self-enforce policy.

## Expected Interfaces

- Policy Decision Point: returns allow, deny, degrade, or require human approval.
- Policy Enforcement Point: applies the decision and prevents bypass.
- `GovernanceDecision`
- `AuditEvent`
- `ProvenanceRecord`
- `HumanApprovalGate` as a future contract.

## Risks To Avoid

- Producing decisions that services ignore.
- Allowing model calls without model policy.
- Reidentifying patients without explicit permission.
- Treating audit as optional for clinical data access.

## Next Steps

- Define policy vocabulary.
- Add enforcement tests around every capability.
- Model human approval as a first-class contract.
