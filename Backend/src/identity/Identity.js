export class Identity {
    constructor ({identity_id, provider}) {
        this.identity_id = identity_id;
        this.provider = provider; // e.g. "internal", "oauth", "gov"
    }
}

/*
“Who is the caller?”
The unique identity of the request (if any)
"internal" - your own login system (username/password)
"oauth" - Google / Facebook / GitHub login
"gov" - Aadhaar / DigiLocker / e-KYC identity
*/