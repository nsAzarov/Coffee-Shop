import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './Router';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: '/graphql' }),
    resolvers: {
        Mutation: {
            setCategoryFilter: (_, { category }, { cache }) => {
                const data = {
                    filters: {
                        category,
                        __typename: "Categories"
                    }
                };
                cache.writeData({ data });
                return null;
            }
        }
    }
});
client.writeData({ data: { filters: {category: ''} } })

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router />
        </ApolloProvider>
    )
}
