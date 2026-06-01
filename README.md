# HealthOS Private Cloud

HealthOS Private Cloud is a private healthcare cloud infrastructure optimized for Apple Silicon.

It hosts clinical data, agents, AI models, and healthcare applications under native governance for consent, privacy, encryption, auditability, controlled data access, and interoperability.

HealthOS is not an app, not an EHR skin, and not a single-device system. It is a private cloud platform where healthcare applications run on top of governed data and agent infrastructure.

HealthOS does not require each user to own or operate a Mac. Apple Silicon is the preferred private cloud compute substrate, not the user-facing product.

This repository is the initial conceptual and contractual scaffold for the platform. It may be presented as Voither PrivateHealthCloud in company contexts, while the architectural subject of this scaffold is HealthOS Private Cloud.

## What HealthOS Is

HealthOS Private Cloud is infrastructure for governed healthcare computation. It lets applications, agents, models, and integrations operate over clinical data without making each application own compliance, identity, data custody, model routing, or reidentification logic.

Applications and agents do not access raw storage directly. They request governed capabilities, receive mediated references or governed projections, and leave audit and provenance trails.

## What HealthOS Is Not

HealthOS is not a finished product in this repository. It is not an EHR, not a user-facing Mac app, not a single-machine system, and not a runtime implementation yet.

This scaffold does not implement real storage, cryptography, model execution, UI, integrations, or clinical workflows. It defines the initial language, architecture, contracts, examples, and validation path for future implementation.

## Architecture

```text
HealthOS Private Cloud
|-- Infrastructure Layer
|-- Data Layer
|-- Governance Layer
|-- Agent Layer
|-- Model Layer
|-- Application Layer
`-- Integration Layer
```

### Infrastructure Layer

Apple Silicon compute, private networking, encrypted storage, deployment, observability, backup/restore, and future container/runtime services.

### Data Layer

Patient records, identity data, clinical artifacts, consent records, audit events, semantic indexes, graph representations, agent memory, and projections for applications.

### Governance Layer

Consent, purpose, roles, permissions, data sensitivity, reidentification, model-use policy, audit requirements, and human approval gates.

### Agent Layer

Patient agents, professional agents, clinical workflow agents, safety/review agents, data agents, and integration agents operating under explicit mandate and governance.

### Model Layer

Governed local or private-cloud model providers, including future MLX, Core ML, Foundation Models, transcription, embeddings, reranking, LLMs, and remote providers only when explicitly allowed.

### Application Layer

Scribe, Veridia, CloudClinic, future apps, third-party apps, dashboards, and clinical tools. Applications declare capabilities and consume governed results.

### Integration Layer

Internal APIs, MCP, future FHIR/HL7 connectors, webhooks, clinical system connectors, export/import, and provider integrations.

## Governed Capability Pattern

Apps, agents, models, and integrations do not access data directly. They access governed capabilities.

```text
Application / Agent / Integration Request
  -> Capability / API / MCP Gateway
  -> Governance Decision
  -> Data / Agent / Model / Execution Service
  -> Provenance + Audit
  -> Governed Result
```

Example request:

```text
An app or agent asks:
"I need to summarize this patient's history for this clinical purpose."

HealthOS checks:
- who asked
- which organization or workspace is involved
- which patient is involved
- which purpose is declared
- which consent applies
- which data may be used
- which model may process it
- whether reidentification is allowed
- whether a remote model is allowed
- whether audit, provenance, or human approval is required

HealthOS returns:
a secure, limited, audited, and traceable context.
```

## Data Layer

HealthOS does not treat the database as one application-owned store. The Data Layer is multi-representational and AI-native.

1. Canonical Record: original clinical data, encrypted, auditable, and preserved.
2. Event Log: append-only operational history for audit, reconstruction, debugging, and provenance.
3. Artifact Store: transcripts, notes, outputs, reports, documents, embeddings, and intermediate derived objects.
4. Relational Projection: structured query views for patient, session, professional, organization, consent, and status.
5. Semantic Projection: chunks, embeddings, summaries, concepts, entities, and clinical relationships.
6. Graph Projection: relationships among events, symptoms, medications, hypotheses, timing, agents, artifacts, and decisions.
7. Agent Memory: operational memory separated by agent, patient, professional, organization, purpose, and scope.
8. Capability Index: what can be accessed by whom, under which consent, for which purpose, and through which capability.

The key rule is simple: AI does not access the raw clinical record. It accesses governed projections.

```text
Original audio
  -> canonical encrypted artifact
Transcript
  -> clinical artifact
Patient speech excerpts
  -> semantic chunks
ASL / VDLP / GEM / other clinical analyses
  -> derived clinical artifacts
Longitudinal summary
  -> agent-readable projection
Embedding
  -> semantic index
Clinical relationships
  -> graph projection
Everything
  -> provenance graph + audit log
```

Capability example:

```text
search_patient_context(patientRef, purpose, query)
```

HealthOS decides who is asking, which consent applies, whether reidentification is allowed, whether embeddings or model calls are allowed, what data can leave the Data Layer, and whether human approval is required. Only then does it assemble a safe context.

## Agents

Each patient may have a Patient Agent. The Patient Agent is not just a chatbot and is not a literal custodian of raw cryptographic keys. It operationally represents the patient's mandate, participates in governed access decisions, records events and rationale, requests reidentification only when allowed, and operates under audit and review.

Professional, workflow, safety, data, and integration agents follow the same pattern: mandate, scope, governed context, traceability, and review.

## Models

No application calls a model directly. Model providers are declared by manifest and governed by policy.

Each provider must define runtime, locality, PHI policy, capability profile, versioning, provenance behavior, and fallback behavior. Local and private-cloud providers are preferred for sensitive work. External providers are denied by default unless governance explicitly allows them.

## Applications

Applications are governed clients of HealthOS. They declare capabilities, requested data classes, outputs, and human approval points. They receive safe references, mediated views, or governed results rather than raw storage access.

Initial application examples:

- Scribe: clinical documentation, transcription, summarization, and draft generation.
- Veridia: patient experience, consent, identity, health memory, and access control.
- CloudClinic: service operations, institutional workflows, queues, and clinical coordination.

## Integrations

Integrations connect HealthOS to external systems through governed APIs, MCP, webhooks, future FHIR/HL7 connectors, imports, exports, and provider-specific adapters. Integration access is mediated by capability requests, governance decisions, audit events, and provenance records.

## First Proof

The first proof is not a complete app. It is a governed capability path:

```text
Scribe requests search_patient_context
  -> application gateway validates the request
  -> governance service decides allow / deny / degrade / require human approval
  -> data service returns safe refs or governed projections
  -> model service is called only if permitted
  -> audit and provenance are recorded
  -> Scribe receives a traceable result
```

## Initial Milestones

### Milestone 0 - Conceptual and Contractual Kernel

- Strong README.
- Simple layered architecture.
- Essential docs.
- JSON contracts.
- Valid examples.
- Naming guardrails.

### Milestone 1 - Private Cloud Skeleton

- Initial service configuration.
- Artifact store outline.
- Audit log outline.
- Minimal governance evaluator.
- Minimal application and integration gateway.
- No single-device assumption.

### Milestone 2 - First Governed Capability

- create_patient_ref.
- create_session_artifact.
- request_context_for_agent.
- write_agent_event.
- search_patient_context.

### Milestone 3 - Governed Model Runtime

- MLX/provider outline.
- Local transcription provider outline.
- Embedding provider outline.
- Model provenance.
- Governance-based provider denial.

### Milestone 4 - Scribe Proof

- Scribe does not access data directly.
- Scribe calls a capability.
- The capability passes through governance.
- Governed projections or safe references are returned.
- Output generates provenance.
- Finalization requires approval when configured.

## Repository Status

This repository is a conceptual and contractual scaffold. It has no production claims and does not implement a real healthcare runtime. Its purpose is to make the next phase buildable, reviewable, and aligned around governed capabilities, data minimization, privacy, auditability, and interoperability.
