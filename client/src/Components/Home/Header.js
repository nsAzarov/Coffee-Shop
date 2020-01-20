import React from 'react';
import styled from 'styled-components';
import ButtonWhite from '../Other/ButtonWhite';

import HeaderPic from '../../images/HeaderPic.jpg';

const Description = styled.div`
    opacity: 0.9;
    color: white;
    margin-bottom: 30px;
`;

const SecondHeadline = styled.div`
    font-size: 48px;
    line-height: 60px;
    margin: 10px;
    color: white;
`;

const FirstHeadline = styled.div`
    color: white;
    opacity: 0.8;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 530px;
    width: 940px;
    background: url(${HeaderPic});
    background-size: cover;
`;

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 1440px;
    background-color: #050827;
`;

const Header = styled.div`
    display: flex;
    justify-content: center;
`;

export default function HeaderSection() {
    return (
        <Header>
            <Wrap>
                <Content>
                    <FirstHeadline className='small-text-bold'>BEST PLACE TO BUY DESIGN</FirstHeadline>
                    <SecondHeadline>Coffee Mugs</SecondHeadline>
                    <Description className='large-text'>The most versatile furniture system ever created. Designed to fit your life, made to move and grow.</Description>
                    <ButtonWhite text='EXPLORE OUR PRODUCTIONS' />
                </Content>
            </Wrap>
        </Header>
    )
}
