import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';
import styled from 'styled-components';

import {Headline} from '../../Other/Headline';

const Article = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
    img {
        height: 300px;
        width: 300px;
        object-fit: cover;
        margin-bottom: 25px;
    }
    .title {
        margin-bottom: 10px;
        color: #1d1f2e;
        font-size: 20px;
        line-height: 32px;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        line-height: 28px;
    }
    .date {
        margin-top: 20px;
        opacity: .6;
    }
`;

const ArticlesWrap = styled.div`
    display: flex;
    margin: 100px 0;
`;

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 940px;
`;

const ArticlesSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const GET_ARTICLES_QUERY = gql`
    query GetArticles($first: Int!) {
        n_articles(first: $first) {
            articleID
            img
            title
            description
            date
            author {
                img
                name
                presentation
            }
        }
    }
`;

export default function Articles() {
    const { loading, data } = useQuery(GET_ARTICLES_QUERY, { variables: {first: 3} });
    return (
        <ArticlesSection data-aos="fade-up">
            <Wrap>
                <Headline style={{color: 'black'}} className='small-text-bold' text='BEHIND THE MUGS, LIFESTYLE STORIES'/>
                <ArticlesWrap>
                {loading ? null : data.n_articles.map((article, i) => {
                    return <Article key={i} data-aos="fade-up">
                        <img src={require(`../../../images/${article.img}`)} alt=""/>
                        <div className="title">{article.title}</div>
                        <p>{article.description}</p>
                        <div className="date small-text-bold">{article.date}</div>
                    </Article>
                })}
                </ArticlesWrap>
            </Wrap>
        </ArticlesSection>
    )
}
