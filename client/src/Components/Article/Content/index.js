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
            authorID
            author {
                img
                name
                presentation
            }
        }
    }
`;


export default function index(props) {
    return (
        <Content>
            {props.article ? 
            <>
                <Head article={props.article}/>
                <Article article={props.article}/>
            </>
            :
            <Query query={GET_ARTICLE_QUERY} variables={{ ID: parseInt(props.ID) }}>
                {({ loading, error, data }) => {
                    if (loading) {
                        const article = {
                            title: '',
                            description: '',
                            img: 'default.jpg', 
                            text: '<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iustoq</blockquote>',
                            date: '',
                            author: {
                                img: 'default.jpg', 
                                name: '',
                                description: ''
                            }
                        }
                        return <>
                            <Head article={article}/>
                            <Article article={article}/>
                        </>
                    }
                    if (error) console.log(error);
                    return <>
                            <Head article={data.article}/>
                            <Article article={data.article}/>
                        </>
                }}
            </Query>}
            <FurtherReading />
        </Content>
    )
}
