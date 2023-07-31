import { SERVER_URI } from './../constants';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `${SERVER_URI}/graphql`,
  cache: new InMemoryCache(),
});

export default client;