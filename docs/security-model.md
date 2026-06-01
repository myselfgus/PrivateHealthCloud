# Security Model

## Purpose

List initial threats and conceptual mitigations for the scaffold.

## What This Layer Does

The security model establishes deny-by-default access, least privilege, capability enforcement, data minimization, audit, provenance, local/private model preference, explicit remote model allowance, application sandboxing, and contract validation.

## What This Layer Does Not Do

It does not implement a threat model tool, cryptography, runtime sandboxing, or security certification.

## Expected Interfaces

- `AccessPolicy`
- `GovernanceDecision`
- `AuditEvent`
- `ProvenanceRecord`
- capability gateway enforcement
- model provider policy

## Risks To Avoid

- App tries to access storage directly: enforce capabilities and deny direct storage access.
- Agent tries to bypass governance: require governance decisions for agent events and tool calls.
- Remote model provider receives PHI improperly: deny external providers by default and require explicit allowance.
- Prompt injection: constrain tools, minimize context, and audit agent actions.
- Tool exfiltration: enforce least privilege and output policies.
- Technical logs leak PHI: redact payloads and separate telemetry from clinical audit.
- Embeddings leak sensitive data: classify embedding stores and govern semantic indexing.
- Improper reidentification: require explicit governance decision.
- Over-permissive external integration: validate integration capabilities and scopes.
- Organization data leaks across boundaries: require organization references and isolation tests.
- Backup lacks encryption: require encrypted backup and restore verification.
- Keys lack rotation or recovery: define key custody and incident rotation.
- Agent memory is excessive: scope memory by patient, purpose, organization, and agent.
- Capability manifest is too broad: validate manifests and prefer narrow capabilities.

## Next Steps

- Turn each risk into a contract or validation test.
- Define policy fixtures for allow, deny, degrade, and approval-required cases.
- Add a security review checklist before runtime implementation.
