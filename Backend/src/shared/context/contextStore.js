import { AsyncLocalStorage } from "async_hooks";

export const contextStore = new AsyncLocalStorage();


/*
In Node.js everything is asynchronous; requests run in parallel so data get mix globally
It will break everything in concurrent requests
Node.js gives a special tool call AsyncLocalStorage
It stores data per request even in asynchronous environments.(nly safe “global-like” store in Node.js)

A private locker for each HTTP request.
Every request gets its own locker
You put the RequestContext into this locker
Any code anywhere can take it out safely
Other requests cannot see it

You don’t want to pass ctx manually into 50 functions
Loggers need to access the same context everywhere
Authorization, AI agents, auditing, Error handlers need context

You cannot use global variables like: global.ctx = someRequest
Because If 20 users make requests in parallel,
The values overwrite each other & Authorization & auditing will become corrupted
AsyncLocalStorage prevents that disaster.

*/