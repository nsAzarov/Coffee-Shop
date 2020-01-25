import React from 'react';
import styled from 'styled-components';
import Description from './Description';
import Featured from './Featured';
import MoreProducts from './MoreProducts';
import Magazine from './Magazine';
import Articles from './Articles';
import {Parallax} from '../../Other/Parallax';

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

const Image = require(`../../../images/plx.jpg`);

export default function index() {
    return (
        <Content>
            <Wrap>
                <Description />
                <Featured />
                <MoreProducts />
                <Magazine />
            </Wrap>
            <Parallax Image={Image}/>
            <Wrap>
                <Articles />
            </Wrap>
        </Content>
    )
}