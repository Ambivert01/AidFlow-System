export async function resolveIdentityFormToken(token) {

    if (!token) return null;

    if(token.startsWith("test-")) {
        return {
            identity_id: token,
            provider: "test"
        };
    }
    return null;
}

/*
Convert a token string → into a minimal identity object.

*/