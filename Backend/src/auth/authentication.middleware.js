import { ensureIdentity } from "../identity/identityService.js";
import { getRequestContext } from "../shared/context/getContext.js";
import { resolveIdentityFormToken } from "./tokenResolver.js";

export async function authenticationMiddleware(req, res, next) {
    try {
        // Read authorization header [ Bearer test-user1 ]
        const authHeader = req.headers["authorization"];

        // If no header or wrong format → anonymous request
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(); // anonymous request; anonymous access = allowed [ Public ngo listing, landing pages, Public pages, signup pages ]
        }

        // Extract Token [ if header is Bearer test-donor55 then token becomes "test-donor55" ]
        const token = authHeader.replace("Bearer ", "").trim();

        // Resolve identity using tokenResolver [ Current Behaviour: test-* tokens - accepted, anything else - identity = null ]
        const identityData = await resolveIdentityFormToken(token);

        // if identity exists - annotate RequestContext
        if (identityData) {
            const identity = await ensureIdentity(identityData);
            // checks if identity exists and if not creates and persists it; return the identity objecct
            const ctx = getRequestContext();
            ctx.identity_id = identity.identity_id;
            // Write identity_id into RequestContext
        }
        next();
    }
    catch (err) {
        // Auth failure never crashes request
        console.error("[AUTH_ERROR]", err.message);
        next();
    }
}

/*
This is the middleware that finally injects identity into the RequestContext;
completing the Authentication Layer (IDENTITY ONLY)
Identify WHO is calling the API; (and store identity_id in RequestContext)

The middleware does:
Reads Authorization header
Extracts token if it exists
Uses tokenResolver to convert token → identity
If valid → sets ctx.identity_id
If invalid → silently treat as anonymous
Never blocks or denies the request
*/