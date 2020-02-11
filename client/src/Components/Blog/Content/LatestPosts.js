import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import {Description} from '../../Other/Description';
import {BlogHeader} from './BlogHeader';
import {ImageArea} from '../../Other/Products';
import ButtonWhite from '../../Other/ButtonWhite';

const Post = styled.div`
    display: flex;
    width: 100%;
    padding-top: 20px;
    margin-right: 20px;
    margin-bottom: 30px;
    &:last-child {
        margin-bottom: 0;
    }
`;

const Posts = styled.div`
    width: 600px;
`;

const GET_ARTICLES_QUERY = gql`
    query GetArticles {
        articles {
            articleID
            img
            title
            description
            date
            category
            author {
                img
                name
                presentation
            }
        }
        filters @client {
            category
        }
    }
`;

export default function LatestPosts() {
    const  { loading, data } = useQuery(GET_ARTICLES_QUERY);
    return (
        <Posts>
            <BlogHeader>Latest Posts</BlogHeader>
            {loading ? null : data.articles.map((article, i) => {
                
                if (!data.filters.category) {
                return <Post key={i}>
                    <ImageArea>
                        <img src={require(`../../../images/${article.img}`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}} alt=""/>
                        <div className="overlay" style={{height: '210px', width: '260px'}}>
                            <ButtonWhite to={{
                                pathname: `/Article/${article.articleID}`,
                                state: article
                            }} className='btn' text='READ THE FULL STORY'/>
                        </div>
                    </ImageArea>
                    <Description style={{width: '280px'}}>
                        <div className="title">{article.title}</div>
                        <p>{article.description}</p>
                        <div className="date small-text-bold">{article.date}</div>
                    </Description>
                </Post>} 
                
                else if (article.category === data.filters.category) {
                    return <Post key={i}>
                    <ImageArea>
                        <img src={require(`../../../images/${article.img}`)} style={{height: '210px', width: '260px', margin: '0 40px 25px 0'}} alt=""/>
                        <div className="overlay" style={{height: '210px', width: '260px'}}>
                            <ButtonWhite to={{
                                pathname: `/Article/${article.articleID}`,
                                state: article
                            }} className='btn' text='READ THE FULL STORY'/>
                        </div>
                    </ImageArea>
                    <Description style={{width: '280px'}}>
                        <div className="title">{article.title}</div>
                        <p>{article.description}</p>
                        <div className="date small-text-bold">{article.date}</div>
                    </Description>
                </Post>}
            })}
        </Posts>
    )
}
