import { randomUUID } from "crypto";
import { contextStore } from "../shared/context/contextStore.js";
import { RequestContext } from "../shared/context/RequestContext.js";

export function requestContextMiddleware(req, res, next) {
  // You create ONE context per request.
  const ctx = new RequestContext({
    requestId: randomUUID(),
    timestamp: new Date().toISOString(),
    source: "http",
  });

  contextStore.run(ctx, () => {
    // Run the rest of this request inside AsyncLocalStorage with this context attached.
    // From this line forward: Any function, async operation, nested module. DB call, AI agent call or logger... can do now
    // const ctx = contextStore.getStore(); and retrieve ths same context reliably
    next();
  });
}

/*
This middleware is responsible for:
Creating a RequestContext object
Assigning a unique UUID for each HTTP request
Storing that context in AsyncLocalStorage (contextStore)
Ensuring every further async call in the request chain can access the same context
Ensuring logging / authorization / auditing all have correct info
It is the single entry point that initializes the RequestContext.

This middleware guarantees:
“Every HTTP request gets its own RequestContext that stays consistent across async operations.”

When a request comes:
You create a new RequestContext (its identity card)
You store it in the contextStore
You run the rest of the request inside that storage

Every layer from this point onward can safely get:
request_id
timestamp
actor identity
authorization status 
This middleware is where the context is born.
*/
