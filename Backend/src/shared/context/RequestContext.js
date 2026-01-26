export class RequestContext 
{
    constructor({requestId, timestamp, source}) 
    {
        this.requestId = requestId; // Unique ID for every request
        this.timestamp = timestamp; // When request started
        this.source = source;   // Mobile app, Web app, Internal service

        this.identity_id = null;    // Who is this? (logged-in user)
        this.actor_id = null;   // Final actor (could be user/NGO/admin/AI agent)
        this.actor_type = null; // User, Admin, Donor, Beneficiary, Govt, AI bot
        this.actor_state = null;    // Active, Suspended, Blocked, Pending-KYC

        this.action = null; // Action: "create", "update", "read", "delete"
        this.resource_type = null;  // Resource being accessed (donation, profile etc.)
        this.resource_id = null;    // Which specific resource?

        this.authz_decision = null; // Authorization: ALLOW or DENY
        this.deny_reason_code = null;   // Why deny? (Not KYC verified, not admin, etc.)
    }
}

/*
System needs a single object that carries All necessary information about that request through all backend layers; 
That is RequestContext a single object
RequestContext is a container for all request-related data
Different layers fill in their relevant fields
At the end, the Authorization engine, Logging, auditing or final handler uses it
It is like a file folder that travels from one department to another in an office;
each department adds information into it, but the folder itself is the same.

*/