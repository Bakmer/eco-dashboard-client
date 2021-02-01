import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache();

export const isLoggedInVar = makeVar<boolean>(false);
