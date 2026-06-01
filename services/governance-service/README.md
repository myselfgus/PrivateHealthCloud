# Governance Service

## Role

Evaluates whether a specific operation can proceed for a specific actor, organization, patient, purpose, consent scope, data class, model policy, and approval requirement.

## Contracts Consumed Or Produced

- Consumes `CapabilityRequest`, `DataAccessRequest`, `ConsentRecord`, `ActorRef`, `OrganizationRef`, and `AccessPolicy`.
- Produces `GovernanceDecision` and audit events.

## Direct Access Limits

The service should not expose raw clinical payloads to callers. It should evaluate references, scopes, policy inputs, and minimized metadata.

## Governance Relationship

This is the Policy Decision Point. Enforcement still belongs at gateways and downstream services so decisions cannot be bypassed.

## Next Steps

- Define policy vocabulary.
- Model human approval gates.
- Add allow, deny, degrade, and approval-required fixtures.
