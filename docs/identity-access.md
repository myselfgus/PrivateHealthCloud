# Identity And Access

## Purpose

Separate authentication, authorization, consent, purpose, and governance decisions.

## What This Layer Does

Identity and access identifies the actor, evaluates what the actor may do, checks whether the patient allowed the use, binds the operation to a purpose, and produces or references a governance decision.

## What This Layer Does Not Do

It does not store secrets in prompts, grant broad app access, or replace consent lifecycle governance.

## Expected Interfaces

Minimum actor types:

- patient
- professional
- organization_admin
- application
- agent
- service
- integration
- system

Core references:

- `ActorRef`
- `OrganizationRef`
- `ServiceIdentity`
- `ConsentRecord`
- `GovernanceDecision`

## Risks To Avoid

- Confusing authentication with consent.
- Letting service credentials imply clinical data access.
- Allowing purpose-free access to patient context.
- Treating reidentification as a default permission.

## Next Steps

- Define role and permission vocabularies.
- Add explicit reidentification policies.
- Add tests for denied access when purpose or consent is missing.
