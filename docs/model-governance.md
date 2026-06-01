# Model Governance

## Purpose

Define policy requirements for model provider use.

## What This Layer Does

Model governance covers provider manifests, capability profiles, locality, PHI support, embeddings, transcription, LLM support, model versioning, evaluation, provenance, fallback behavior, and remote model policy.

## What This Layer Does Not Do

It does not certify models, implement evaluation suites, or grant apps direct provider access.

## Expected Interfaces

- `ModelProviderManifest`
- `GovernanceDecision`
- `ProvenanceRecord`
- provider routing policy
- evaluation records as future contracts

## Risks To Avoid

- Remote model use without explicit allowance.
- Providers with unclear PHI policy.
- Untracked model version changes.
- Fallback behavior that increases data exposure.

## Next Steps

- Define model evaluation metadata.
- Define degraded behavior for denied providers.
- Add provenance requirements to every generated artifact.
