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
    const defaultArticle = { title: '', description: '', img: 'default.jpg', text: '', date: '', author: {img: 'default.jpg', name: '',description: ''} }
    return (
        <Content>
            {loading ?
                props.article ? 
                <>
                    <Head article={props.article}/>
                    <Article article={props.article}/>
                </>
                :
                <>
                    <Head article={defaultArticle}/>
                    <Article article={defaultArticle}/>
                </> 
            :
            <>
                <Head article={data.article}/>
                <Article article={data.article}/>
            </>}
            <FurtherReading />
        </Content>
    )
}
