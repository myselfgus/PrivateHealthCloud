# Infrastructure Layer

## Purpose

Define the private cloud substrate without turning hardware into the end-user product.

## What This Layer Does

The Infrastructure Layer includes Apple Silicon compute, private networking, mesh or VPN design, encrypted storage, deployment automation, observability, backup/restore, disaster recovery, and future container/runtime services.

## What This Layer Does Not Do

It does not require each user to own or operate a Mac. It does not assume single-device deployment. It does not implement deployment automation yet.

## Expected Interfaces

- compute unit inventory as future infrastructure metadata
- private networking configuration
- storage encryption requirements
- observability pipeline
- backup and restore policy

## Risks To Avoid

- Making user devices part of the compliance boundary by default.
- Deploying services without backup and restore design.
- Technical logs that expose PHI.
- Infrastructure changes without audit requirements.

## Next Steps

- Define minimum private deployment topology.
- Define backup restore tests.
- Define environment separation before runtime services are added.
