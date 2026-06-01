# Future Validation

This scaffold includes conservative validation scripts in `package.json`.

Run `npm install` once to install the pinned validation dependency from `package-lock.json`.

- `npm run validate:schemas` compiles JSON Schemas with the local validation script and `ajv`.
- `npm run validate:examples` validates the current example files against their matching schemas.
- `npm run validate` runs both.

Future validation should prove:

- schemas validate examples
- examples are internally consistent
- apps do not access storage directly
- every capability requires a governance decision
- external model providers are denied by default
- audit and provenance are required for clinical data
- reidentification requires an explicit decision
- revoked consent blocks access
- technical logs do not contain PHI
- capability manifests cannot be too permissive
- remote model use requires explicit authorization
- cross-tenant leakage is impossible by contract

No runtime tests exist yet because this repository is currently a conceptual and contractual scaffold.
