# Agent Service

## Role

Coordinates governed agent execution and records agent events.

## Contracts Consumed Or Produced

- Consumes `AgentManifest`, `CapabilityRequest`, and `GovernanceDecision`.
- Produces `AgentEvent`, `AuditEvent`, and `ProvenanceRecord`.

## Direct Access Limits

Agents must not receive raw storage, raw identity records, raw keys, or unrestricted clinical context. They receive scoped projections and safe references.

## Governance Relationship

Agent actions must be scoped by mandate, purpose, consent, and governance. Tool calls and memory writes should produce traceable events.

## Next Steps

- Define agent type vocabulary.
- Add memory policy validation.
- Implement a minimal `write_agent_event` capability in a future phase.
