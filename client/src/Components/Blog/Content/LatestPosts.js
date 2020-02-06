import React from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

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
            authorID
            img
            title
            description
            text
            date
        }
    }
`;

export default function LatestPosts() {
    return (
        <Posts>
            <BlogHeader>Latest Posts</BlogHeader>
            <Query query={GET_ARTICLES_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return null;
                    if (error) console.log(error);
                    console.log(data);
                    return data.articles.map((article, i) => {
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
                                <div className="title">Will drinking coffee prolong your life?</div>
                                <p>Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus</p>
                                <div className="date small-text-bold">OCTOBER 9, 2018</div>
                            </Description>
                        </Post>
                    })
                }}
            </Query>
        </Posts>
    )
}
