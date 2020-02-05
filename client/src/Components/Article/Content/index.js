import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import {Content} from '../../Other/ContentWrap';
import Head from './Head';
import Article from './Article';
import FurtherReading from './FurtherReading';

const GET_ARTICLE_QUERY = gql`
    query GetArticle($ID: Int!) {
        article(ID: $ID) {
            img
            title
            description
            text
            date
        }
    }
`;

export default function index(props) {
    return (
        <Content>
            <Query query={GET_ARTICLE_QUERY} variables={{ ID: parseInt(props.ID) }}>
                {({ loading, error, data }) => {
                    if (loading) return <h1>adf</h1>;
                    if (error) console.log(error);

                    return <>
                            <Head article={data.article}/>
                            <Article article={data.article}/>
                        </>
                }}
            </Query>
            <FurtherReading />
        </Content>
    )
}
