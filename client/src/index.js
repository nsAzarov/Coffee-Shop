import React from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import './index.css';

const client = new ApolloClient({
    uri: '/graphql'
})

ReactDOM.render(
    <ApolloProvider client={client}>
        <Router />
    </ApolloProvider>
, document.getElementById('root'));
