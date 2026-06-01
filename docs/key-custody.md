# Key Custody

## Purpose

Document conceptual requirements for encryption key handling without implementing cryptography.

## What This Layer Does

Key custody belongs to platform services, not to prompts or agent textual memory. The design must account for envelope encryption, key rotation, separation between identity data and clinical data, backup and recovery, revocation, and incident-driven rotation.

## What This Layer Does Not Do

It does not implement key management, cryptographic primitives, hardware security integration, or recovery flows.

## Expected Interfaces

- data classification policy
- key custody service boundary
- artifact encryption metadata
- backup and restore policy
- incident rotation workflow

## Risks To Avoid

- Storing raw secrets inside agent memory.
- Giving apps direct key access.
- Failing to rotate keys after incidents.
- Losing the ability to recover encrypted clinical data.

## Next Steps

- Choose key custody requirements before storage implementation.
- Define envelope encryption metadata.
- Add tests for no raw key material in app or agent manifests.
