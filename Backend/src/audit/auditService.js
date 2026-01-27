import { writeAuditEvent } from "./auditWriter.js";
import { getRequestContext } from "../shared/context/getContext.js";
import { Timestamp } from "mongodb";

export async function emitAuditEvent(auditEvents) {
    try {
        const ctx = getRequestContext();

        const record = {
            request_id: ctx.request_id,
            timestamp: auditEvents.timestamp,

            event_type: auditEvents.event_type,

            actor_id: auditEvents.actor_id,
            actor_type: auditEvents.actor_type,

            resource_type: auditEvents.resource_type,
            resource_id: auditEvents.resource_id,

            decision: auditEvents.decision,
            reason_code: auditEvents.reason_code,

            metadata: auditEvents.metadata
        };
        await writeAuditEvent(record)
    }
    catch (err) {
        // IMPORTANT: audit failure must never crash request
        console.error("[Audit_ERROR]", err.message);
    }
}

/*
Pick up request_id from RequestContext
Combine request metadata with AuditEvent data
Produce a final audit record
Send to writeAuditEvent()
Never throw
Never stop request flow
Never mutate RequestContext
*/

// Combines RequestContext with the AuditEvent
// Normalizes final audit record
// Does not know where the record is written