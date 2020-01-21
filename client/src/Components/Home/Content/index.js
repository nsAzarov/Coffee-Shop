import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Featured from './Featured';

const Wrap = styled.div`
    width: 940px;
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default function index() {
    return (
        <Content>
            <Wrap>
                <Description />
                <Featured />
            </Wrap>
        </Content>
    )
}