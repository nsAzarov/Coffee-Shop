import React from 'react';
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import {Headline} from '../../Other/Headline';
import {Description} from '../../Other/Description';

const Post = styled.div`
    display: flex;
    flex-direction: column;
    width: 460px;
    margin-right: 20px;
    &:last-child {
        margin-right: 0;
    }
    img {
        height: 300px;
        width: 460px;
        object-fit: cover;
        margin-bottom: 25px;
    }
`;

const PostsWrap = styled.div`
    display: flex;
    margin: 100px 0;
`;

export default function FeaturedPosts() {
    return (
        <Wrap style={{marginTop: '-110px'}}>
            <Headline style={{color: 'black'}} className='small-text-bold' text='FEATURED POSTS' />
            <PostsWrap>
                <Post>
                    <img src={require(`../../../images/Post1.jpg`)} alt=""/>
                    <Description>
                        <div className="title">Will drinking coffee prolong your life?</div>
                        <p>Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illum eveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus</p>
                        <div className="date small-text-bold">OCTOBER 9, 2018</div>
                    </Description>
                </Post>
                <Post>
                    <img src={require(`../../../images/art2.jpg`)} alt=""/>
                    <Description>
                        <div className="title"> How long does a cup of coffee keep you awake?</div>
                        <p>It is a paradisematic country, in which roasted parts. Vel qui et ad voluptatem.</p>
                        <div className="date small-text-bold">OCTOBER 9, 2018</div>
                    </Description>
                </Post>
            </PostsWrap>
        </Wrap>
    )
}
