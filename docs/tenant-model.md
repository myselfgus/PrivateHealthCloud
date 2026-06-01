# Tenant Model

## Purpose

Define the institutional scope that future runtime work must support.

## What This Layer Does

HealthOS Private Cloud must account for organizations, clinics, professionals, patients, applications, agents, internal services, external integrations, and environments such as development, staging, and private deployment.

## What This Layer Does Not Do

It does not implement multi-tenancy, billing, organization administration, or environment provisioning.

## Expected Interfaces

- `OrganizationRef`
- `WorkspaceRef` as a future scoped environment reference
- `PatientRef`
- `ActorRef`
- `ServiceIdentity`
- `ApplicationIdentity` through application manifests
- `AgentIdentity` through agent manifests

## Risks To Avoid

- Assuming one clinic, one user, one patient, or one machine.
- Leaking data between organizations or workspaces.
- Mixing patient identity data and clinical data without governance.

## Next Steps

- Add a `WorkspaceRef` contract when runtime scoping starts.
- Define organization isolation tests.
- Map environment boundaries before deployment work begins.
