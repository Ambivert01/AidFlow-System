import { contextStore } from "./contextStore.js";

export function getRequestContext() {
    const store = contextStore.getStore();

    if (!store) {
        throw new Error ("RequestContext not available")
    }

    return store;
}

/*
one helper:
Always checks context safety
Always throws if context is missing
Always returns the correct context

Give any part of your backend an easy, safe way to access the current RequestContext from AsyncLocalStorage.
*/