import { getRequestContext } from "../shared/context/getContext.js";
import { resolveIdentityFormToken } from "./tokenResolver.js";

export async function authenticationMiddleware(req, res, next) {
    try {
        const authHeader = req.headers["authorization"];

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return next(); // anonymous request
        }

        const token = authHeader.replace("Bearer ", "").trim();
        const identity = await resolveIdentityFormToken(token);

        if (identity) {
            const ctx = getRequestContext();
            ctx.identity_id = identity.identity_id;
        }
        next();
    }
    catch (err) {
        // Auth failure never crashes request
        console.error("[AUTH_ERROR]", err.message);
        next();
    }
}