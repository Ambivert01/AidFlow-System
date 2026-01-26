import express from "express";
import { requestContextMiddleware } from "./api/requestContext.middleware.js";

import { getRequestContext } from "./shared/context/getContext.js";

const app = express();

app.use(express.json());

// RequestContext MUST be first
app.use(requestContextMiddleware);

app.get("/debug/context", (req, res) => {
  const ctx = getRequestContext();
  res.json({ requestId: ctx.requestId });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

export default app;
