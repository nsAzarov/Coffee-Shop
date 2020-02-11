import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

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

export default function Main(props) {
    const { loading, data } = useQuery(GET_ARTICLE_QUERY, { variables: {ID: parseInt(props.ID)} });
    const article = {
        title: '', description: '', img: 'default.jpg', 
        text: '<h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iusto, earum eligendi rerum saepe quos aut velit!</p><blockquote>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla vel sapiente necessitatibus voluptate aspernatur asperiores quaerat temporibus fuga dolor nisi est ut iustoq</blockquote>',
        date: '', author: {img: 'default.jpg', name: '',description: ''}
    }
    return (
        <Content>
            {props.article ? 
            <>
                <Head article={props.article}/>
                <Article article={props.article}/>
            </>
            :
            loading ? <>
                    <Head article={article}/>
                    <Article article={article}/>
                </> 
                : 
                <>
                    <Head article={data.article}/>
                    <Article article={data.article}/>
                </>
            }
            <FurtherReading />
        </Content>
    )
}
