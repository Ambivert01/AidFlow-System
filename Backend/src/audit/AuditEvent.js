export class AuditEvent {
    constructor ({
        event_type,     // The kind of event that occurred. [ request_started, finished, donation_creted, beneficiry_verified,... ]
        actor_id = null,        // Who performed this action? [ user_id, donor_id,... ]
        actor_type = null,      // Role of the actor [ donor, system, fraud, ngo,... ]
        resource_type = null,       // What object was interacted with? [ donation, ngo, document, payout,... ]
        resource_id = null,     // Which specific record? [ ngo_204, donation_93,... ]
        decision = null,        // Outcome; Meaning depends on event_type. [ allow, deny, success, failed,... ]
        reason_code = null,     // Why did the decision occur? [ role not allowed, kyc pending, limit, ai risk, vaalidation error,... ]
        metadata = {}       // Free-form structured information (object)
    }) {
        this.event_type = event_type,

        this.actor_id = actor_id,
        this.actor_type = actor_type,
        
        this.resource_type = resource_type,
        this.resource_id = resource_id,

        this.decision = decision,
        this.reason_code = reason_code;

        this.metadata = metadata;

        this.timestamp = new Date().toISOString();
        // Every audit event becomes time-ordered
        // ISO timestamp of when event was created
    }
}

/*
AuditEvent is the raw material used to generate your audit logs.
Think of it as a structured immutable record of what happened.
*/

// Data-only class. No logic.