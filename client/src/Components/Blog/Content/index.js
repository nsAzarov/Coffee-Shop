import React from 'react';
import styled from 'styled-components';

import {Content, WideWrap, Wrap} from '../../Other/ContentWrap';
import FeaturedPosts from './FeaturedPosts';
import BlogFeed from './BlogFeed';

const Text = styled.div`
    text-align: center;
    h1 {
        margin-top: 110px;
        margin-bottom: 15px;
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 30px;
    }
`;

const DecoBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 570px;
    width: 100%;
    margin-bottom: -110px;
    background-color: #f6f6f6;
`;

export default function index() {
    return (
        <Content>
            <WideWrap>
                <DecoBlock>
                    <Wrap>
                        <Text>
                            <h1>Read coffee stories on our Blog</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Suspendisse varius enim in eros elementum tristique.</p>
                        </Text>
                    </Wrap>
                </DecoBlock>
                <FeaturedPosts />
                <BlogFeed />
            </WideWrap>
        </Content>
    )
}
