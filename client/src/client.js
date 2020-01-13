import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({
	uri: `https://rickandmortyapi.com/graphql`
});
const cache = new InMemoryCache();
const client = new ApolloClient({
	link,
	cache
});

export default client;
