# Agent Layer

## Purpose

Define how agents participate in clinical workflows under governance.

## What This Layer Does

Agents interpret, coordinate, and execute scoped workflows. They include patient agents, professional agents, clinical workflow agents, safety/review agents, data agents, and integration agents.

## What This Layer Does Not Do

Agents are not autonomous authorities, not policy bypasses, not raw key custodians, and not unrestricted memories.

## Expected Interfaces

- `AgentManifest`
- `AgentEvent`
- `CapabilityRequest`
- `GovernanceDecision`
- safe references and governed projections
- audit and provenance records

## Risks To Avoid

- Agents accessing raw records instead of projections.
- Excessive agent memory.
- Agent requests without purpose.
- Tool use that exfiltrates clinical data.

## Next Steps

- Define agent type vocabulary.
- Add memory policy tests.
- Implement a narrow patient-agent event path after contracts stabilize.
