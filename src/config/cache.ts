import { InMemoryCache, makeVar } from "@apollo/client";

export const cache: InMemoryCache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        listUsers: {
          merge(_, incoming: any) {
            return incoming;
          },
        },
      },
    },
    fields: {},
  },
});

export const isLoggedInVar = makeVar<boolean>(false);
