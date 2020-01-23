import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Headline} from '../../Other/Headline';
import {DescriptionArea} from '../../Other/DescriptionArea';
import ButtonBlack from '../../Other/ButtonBlack';

const ImagesArea = styled.div`
    display: flex;
    img {
        height: 280px;
        width: 280px;
        object-fit: cover;
        pointer-events: none;
    }
    .small-images {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        img {
            height: 130px;
            width: 160px;
            &:first-child {
                margin-bottom: 20px;
            }
        }
    }
`;

const Content = styled.div`
    display: flex;
    margin-top: 100px;
`;

const MagazineWrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 940px;
`;

const MagazineSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 130px;
`;

export default function Magazine() {
    return (
        <MagazineSection>
            <MagazineWrap>
                <Headline style={{color: 'black'}} className='small-text-bold' text='BUY 2 MUGS AND GET A COFFEE MAGAZINE FREE' />
                <Content>
                    <ImagesArea>
                        <img src={require(`../../../images/magazine1.jpg`)} alt=""/>
                        <div className="small-images">
                            <img src={require(`../../../images/magazine2.jpg`)} alt=""/>
                            <img src={require(`../../../images/magazine3.jpg`)} alt=""/>
                        </div>
                    </ImagesArea>
                    <DescriptionArea>
                        <div className='small-text-bold' style={{opacity: '0.6'}}>PREMIUM OFFER</div>
                        <div className='header'>Get our Coffee Magazine</div>
                        <p>The most versatile furniture system ever created. Designed to fit your life.</p>
                        <Link to='/'><ButtonBlack text='START SHOPPING'/></Link>
                    </DescriptionArea>
                </Content>
            </MagazineWrap>
        </MagazineSection>
    )
}
