export async function writeAuditEvent(auditRecord) {
// Infrastructure implementation goes here later
// For now: console output ONLY (append-only behavior)
    console.log("[AUDIT]", JSON.stringify(auditRecord));
}

/*
All audit events must pass through this function
This file is the PORT in Ports-and-Adapters (Hexagonal Architecture)
A port defines how the application communicates with outer world systems.
Application core , PORT (this file) & Infrastructure (DB, Kafka, etc.)

why async? 
storage (DB, Kafka, etc.) will be async

Audit should not disturb the main request.

Why “async” but not awaited?
Because writing audits:
Should not block request completion
Should not delay business logic
Should not break flows if slow

No throwing: 
If audit system fails:
Request must NOT fail
User must NOT be affected
Controller must NOT crash
Because audit is a side effect, not part of business logic.

You NEVER want this:
User donation failed because audit logging crashed.
Huge risk.
*/