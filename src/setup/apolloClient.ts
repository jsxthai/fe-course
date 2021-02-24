import { ApolloClient, InMemoryCache } from "@apollo/client";
import { apolloServerUri } from "./../config/env";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

console.log(apolloServerUri);
export default client;
