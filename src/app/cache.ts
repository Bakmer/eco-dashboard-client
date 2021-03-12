import { InMemoryCache, makeVar } from "@apollo/client";
import { ClientFragment } from "../generated/graphql";

export const cache: InMemoryCache = new InMemoryCache();

export const isLoggedInVar = makeVar<boolean>(false);
export const clientVar = makeVar<ClientFragment | null>(null);
