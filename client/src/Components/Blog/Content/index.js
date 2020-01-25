import React from 'react';

import {Content, WideWrap, Wrap, DecoBlock, Text} from '../../Other/ContentWrap';
import FeaturedPosts from './FeaturedPosts';
import BlogFeed from './BlogFeed';
import OwnersQuote from './OwnersQuote';

export default function index() {
    return (
        <Content>
            <WideWrap>
                <DecoBlock>
                    <Wrap  style={{display: 'flex', justifyContent: 'center'}}>
                        <Text>
                            <h1>Read coffee stories on our Blog</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />Suspendisse varius enim in eros elementum tristique.</p>
                        </Text>
                    </Wrap>
                </DecoBlock>
                <FeaturedPosts />
                <BlogFeed />
                <OwnersQuote />
            </WideWrap>
        </Content>
    )
}
