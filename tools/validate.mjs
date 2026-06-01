import Ajv from "ajv";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";

const mode = process.argv[2] ?? "all";
const root = process.cwd();

const examplePairs = [
  ["contracts/applications/ApplicationManifest.schema.json", "examples/scribe.application.json"],
  ["contracts/agents/AgentManifest.schema.json", "examples/patient-agent.manifest.json"],
  ["contracts/integrations/CapabilityRequest.schema.json", "examples/search-patient-context.request.json"],
  ["contracts/governance/GovernanceDecision.schema.json", "examples/governance-decision.allow.json"],
  ["contracts/consent/ConsentRecord.schema.json", "examples/consent-record.example.json"],
  ["contracts/audit/AuditEvent.schema.json", "examples/audit-event.example.json"],
  ["contracts/audit/ProvenanceRecord.schema.json", "examples/provenance-record.example.json"]
];

async function listSchemaFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      return listSchemaFiles(fullPath);
    }
    return entry.isFile() && entry.name.endsWith(".schema.json") ? [fullPath] : [];
  }));
  return files.flat().sort();
}

async function readJson(relativePath) {
  const body = await readFile(path.join(root, relativePath), "utf8");
  return JSON.parse(body);
}

function createAjv() {
  return new Ajv({
    allErrors: true,
    strict: false
  });
}

async function validateSchemas() {
  const ajv = createAjv();
  const schemaFiles = await listSchemaFiles(path.join(root, "contracts"));

  for (const fullPath of schemaFiles) {
    const relativePath = path.relative(root, fullPath);
    const schema = await readJson(relativePath);
    ajv.compile(schema);
    console.log(`${relativePath} valid`);
  }
}

async function validateExamples() {
  for (const [schemaPath, examplePath] of examplePairs) {
    const ajv = createAjv();
    const schema = await readJson(schemaPath);
    const example = await readJson(examplePath);
    const validate = ajv.compile(schema);

    if (!validate(example)) {
      console.error(`${examplePath} invalid`);
      console.error(JSON.stringify(validate.errors, null, 2));
      process.exitCode = 1;
      return;
    }

    console.log(`${examplePath} valid`);
  }
}

if (!["all", "schemas", "examples"].includes(mode)) {
  console.error("Usage: node tools/validate.mjs [all|schemas|examples]");
  process.exit(1);
}

if (mode === "all" || mode === "schemas") {
  await validateSchemas();
}

if (mode === "all" || mode === "examples") {
  await validateExamples();
}
