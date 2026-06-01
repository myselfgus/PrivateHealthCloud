# Model Service

## Role

Routes governed model operations such as transcription, embeddings, reranking, summarization, and LLM calls.

## Contracts Consumed Or Produced

- Consumes `ModelProviderManifest`, `CapabilityRequest`, and `GovernanceDecision`.
- Produces `ProvenanceRecord` and audit events.

## Direct Access Limits

Applications do not call model providers directly. Model input must be minimized, governed, and tied to explicit provider policy.

## Governance Relationship

Remote model use is denied by default unless consent and policy explicitly allow it. Every sensitive model call should produce provenance.

## Next Steps

- Define provider capability profiles.
- Add local/private-cloud provider routing.
- Add denied-by-default external provider tests.
