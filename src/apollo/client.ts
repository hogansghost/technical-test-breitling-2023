import { ApolloClient, InMemoryCache } from '@apollo/client';

const APOLLO_URI = 'https://demo.saleor.io/graphql/';

const client = new ApolloClient({
  uri: APOLLO_URI,
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          products: {
            keyArgs: false,
            merge(existing = {}, incoming = {}) {
              // Dirty merge of responses. Will need better checks to
              // avoid duplicated data if "load earlier" implemented.

              return {
                pageInfo: {
                  ...existing.pageInfo,
                  ...incoming.pageInfo,
                },
                edges: [...(existing?.edges ?? []), ...(incoming?.edges ?? [])],
              };
            },
          },
        },
      },
    },
  }),
});

export default client;
