# Governance Enforcement

## Purpose

Explain how governance decisions become enforced runtime boundaries.

## What This Layer Does

Every relevant operation must generate or reference a governance decision: clinical data read, artifact write, reidentification, export, model call, agent call, external integration use, and document finalization.

## What This Layer Does Not Do

It does not assume that applications, agents, or model providers can be trusted to enforce policy by convention.

## Expected Interfaces

- Policy Decision Point
- Policy Enforcement Point
- `GovernanceDecision`
- `HumanApprovalGate`
- `AuditEvent`
- `ProvenanceRecord`

## Risks To Avoid

- Bypass paths around gateways.
- Decisions without request IDs.
- Human approval recorded outside audit.
- Degraded responses that leak more data than allowed.

## Next Steps

- Add a capability gateway contract.
- Define enforcement adapters for data, model, agent, and integration services.
- Add tests for denied direct access.
