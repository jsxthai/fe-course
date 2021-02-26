import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloServerUri } from "./../config/env";

const client = new ApolloClient({
  uri: apolloServerUri,
  cache: new InMemoryCache(),
});

export default client;
