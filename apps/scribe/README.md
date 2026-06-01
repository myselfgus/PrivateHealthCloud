# Scribe

Scribe is an example governed application for clinical documentation.

It may request capabilities such as audio transcription, patient context summarization, clinical draft generation, and future ASL/VDLP/GEM-derived artifacts. It must not access storage, identity, models, agents, or integrations directly.

Scribe is not implemented in this scaffold.

Expected future capabilities:

- `transcribe_session_audio`
- `create_clinical_draft`
- `summarize_patient_context`
- `search_patient_context`

Human approval should be required for clinical finalization when policy says so.
