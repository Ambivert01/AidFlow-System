const identityStore = new Map();

export async function saveIdentity(identity) {
    identityStore.set(identity.identity_id, identity);
    return identity;
    // Saves identity under its own ID
    // Overwrites silently (append-only model means updating metadata is allowed)
}

export async function findIdentityById(identity_id) {
    return identityStore.get(identity_id) || null;
    // Returns persisted Identity object
    // Returns null if identity does NOT exist
}

/*
A true identity repository that permanently records identities.
A place to save identities and lookup identities

This enables:
tracking identity usage
logging & audit linking
future account creation
mapping OAuth/Gov IDs to system records
storing identity metadata
normalization of identity flow
clean separation before actor layer

identityStore is just a Map (key/value storage).
Key = identity_id
Value = Identity object

e.g. identityStore["test-donor55"] = {identity_id:"test-donor55", provider:"test"};
*/