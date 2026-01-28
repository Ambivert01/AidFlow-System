
// Ensure identity exists in system.
// Creates identity if not present.

import { Identity } from "./Identity.js";
import { findIdentityById, saveIdentity } from "./identityRepository.js";

// Ensure identity exists in system
// creates identity if not present

export async function ensureIdentity ({identity_id, provider }) {
    let identity = await findIdentityById(identity_id);

    if(!identity) {
        identity = new identity({identity_id, provider});
        await saveIdentity(identity);
    }
    return identity;
}

// Fetch identity if exists

export async function getIdentity(identity_id) {
    return await findIdentityById(identity_id);
}

/*
The rest of your backend interacts with identity only through this file
Identity Service = the official API to the identity world
*/