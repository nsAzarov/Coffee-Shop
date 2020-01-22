import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Featured from './Featured';
import MoreProducts from './MoreProducts';
import Magazine from './Magazine';

const Wrap = styled.div`
    width: 940px;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Parallax = styled.div`
    height: 340px;
    width: 100%;
    margin-bottom: 100px;
    background-image: url(${require(`../../../images/plx.jpg`)});
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
`;

export default function index() {
    return (
        <Content>
            <Wrap>
                <Description />
                <Featured />
                <MoreProducts />
                <Magazine />
            </Wrap>
            <Parallax />
        </Content>
    )
}