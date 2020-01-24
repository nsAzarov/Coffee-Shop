import React from 'react';
import styled from 'styled-components';
import LatestPosts from './LatestPosts';
import RightArea from './RightArea';

const BlogArea = styled.div`
    display: flex;
    width: 940px;
    justify-content: space-between;
`;

export default function BlogFeed() {
    return (
        <BlogArea>
            <LatestPosts />
            <RightArea />
        </BlogArea>
    )
}
