import express from "express";
import { requestContextMiddleware } from "./api/requestContext.middleware.js";

import { getRequestContext } from "./shared/context/getContext.js";
import { emitAuditEvent } from "./audit/auditService.js";
import { AuditEvent } from "./audit/AuditEvent.js";
import { AUDIT_EVENTS } from "./shared/constants/auditEvents.js";
import { authenticationMiddleware } from "./auth/authentication.middleware.js";

const app = express();

app.use(express.json());

// RequestContext MUST be first
app.use(requestContextMiddleware);

// Temporary ( fetch request_id )
// app.get("/debug/context", (req, res) => {
//   const ctx = getRequestContext();
//   res.json({ request_id: ctx.request_id });
// });

// app.use(async (req, res, next) => {
//   console.log("AUDIT MIDDLEWARE HIT");
//   await emitAuditEvent (
//     new AuditEvent ({
//       event_type: AUDIT_EVENTS.REQUEST_RECEIVED,
//       metadata: {
//         method: req.method,
//         path: req.path
//       }
//     })
//   );
//   next();
// })

app.use(authenticationMiddleware);

  app.use(async (req, res, next) => {
    const ctx = getRequestContext();

    await emitAuditEvent(
      new AuditEvent({
        event_type: AUDIT_EVENTS.REQUEST_RECEIVED,
        actor_id: ctx.identity_id, // TEMP: identity as actor
        metadata: {
          method: req.method,
          path: req.path,
          authenticated: Boolean(ctx.identity_id)
        }
      })
    );

    next();
  });

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
