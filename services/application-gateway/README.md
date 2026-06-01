# Application Gateway

## Role

Receives application capability requests, validates application manifests, enforces governance decisions, and returns governed results.

## Contracts Consumed Or Produced

- Consumes `ApplicationManifest`, `CapabilityRequest`, and `GovernanceDecision`.
- Produces gateway audit events and mediated capability responses.

## Direct Access Limits

The gateway must prevent applications from reaching storage, identity, model providers, agents, or integrations directly.

## Governance Relationship

This is a Policy Enforcement Point for applications. It validates capability scope, requests decisions, and applies allow, deny, degrade, or approval-required outcomes.

## Next Steps

- Define capability response envelopes.
- Add application manifest validation.
- Add no-direct-access tests.
