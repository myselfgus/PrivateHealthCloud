# Storage Schemas

This folder is reserved for future physical storage schemas.

No database engine is implemented in this scaffold. The current source of truth is the conceptual contract set under `contracts/` and the Data Layer documentation.

Apps must not treat physical schemas as their integration surface. They should use governed capabilities and safe references.

Next steps:

- Define canonical record schema requirements.
- Map contracts to storage classes.
- Add migration review rules before any database implementation.
