import { ApolloClient, InMemoryCache } from "@apollo/client";
// import { apolloServerUri } from "./../config/env";

// local : http://localhost:4000/graphql
const client = new ApolloClient({
  // uri: apolloServerUri,
  uri: "http://localhost:4000/graphql",

  cache: new InMemoryCache(),
});

// console.log(apolloServerUri);
export default client;
