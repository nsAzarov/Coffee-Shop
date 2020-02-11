import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks';
import Router from './Router';

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({ uri: '/graphql' }),
    resolvers: {
        Mutation: {
            setLanguageFilter: (_, { language }, { cache }) => {
                const data = {
                    filters: {
                        language,
                        __typename: "Filters"
                    }
                };
                cache.writeData({ data });
                return null;
            }
        }
    }
});

export default function App() {
    return (
        <ApolloProvider client={client}>
            <Router />
        </ApolloProvider>
    )
}
