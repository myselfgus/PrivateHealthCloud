# Model Layer

## Purpose

Define how AI model providers become governed infrastructure capabilities.

## What This Layer Does

The Model Layer routes transcription, embeddings, reranking, LLM, and other model operations through provider manifests, capability profiles, locality, PHI policy, versioning, provenance, and fallback behavior.

## What This Layer Does Not Do

It does not run models, download models, call external APIs, or let applications call providers directly.

## Expected Interfaces

- `ModelProviderManifest`
- governance decision for every sensitive model call
- model provenance record
- local/private-cloud provider preference
- explicit external provider allowance

## Risks To Avoid

- Sending PHI to a remote provider without explicit permission.
- Losing model version provenance.
- Allowing apps to choose providers directly.
- Silent fallback to less private providers.

## Next Steps

- Define provider capability profiles.
- Add denied-by-default external provider tests.
- Outline future MLX, Core ML, and Foundation Models tracks.
