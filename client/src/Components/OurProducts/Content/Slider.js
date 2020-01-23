import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import ButtonBlack from '../../Other/ButtonBlack';
import ButtonWhite from '../../Other/ButtonWhite';
import {DescriptionArea} from '../../Other/DescriptionArea';
import {ImageArea} from '../../Other/ImageArea';

const ArrowButton = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 380px;
    width: 80px;
    background: none;
    position: absolute;
    top: 0;
    z-index: 100;
    transition: .4s;
    img {
        height: 20px;
    }
    opacity: .3;
    &:hover {
        opacity: .8;
    }
    &:active {
        opacity: 1;
    }
`;

const Slide = styled.div`
    display: flex;
    position: relative;
    vertical-align: top;
    width: 100%;
    height: 100%;
    white-space: normal;
`;

const SliderMask = styled.div`
    position: relative;
    display: flex;
    flex-wrap: nowrap;
    overflow: hidden;
    z-index: 1;
    left: 0;
    right: 0;
    height: 380px;
    width: 100%;
    white-space: nowrap;
`;

const SliderArea = styled.div`
    position: relative;
`;

export default function Slider() {
    return (
        <SliderArea>
            <ArrowButton style={{left: '-70px'}}>
                <img src={require(`../../../images/arrowLeft.png`)} alt="←"/>
            </ArrowButton>
            <ArrowButton style={{right: '-70px'}}>
                <img src={require(`../../../images/arrowRight.png`)} alt="→"/>
            </ArrowButton>
            <SliderMask>
                <Slide>
                    <ImageArea style={{width: '460px', padding: '0 10px'}}>
                        <img src={require(`../../../images/slide1.jpg`)} style={{height: '380px', width: '460px'}}alt=""/>
                        <div className="overlay" style={{width: '460px'}}>
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
                    </ImageArea>
                    <DescriptionArea>
                        <div className='small-text-bold' style={{opacity: '0.6'}}>NEW STORE OPENED</div>
                        <div className='header'>We're in London</div>
                        <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.</p>
                        <Link to='/'><ButtonBlack text='EXPLORE OUR OFFICES'/></Link>
                    </DescriptionArea>
                </Slide>
                <Slide>
                    <ImageArea style={{width: '460px', padding: '0 10px'}}>
                        <img src={require(`../../../images/art1.jpg`)} style={{height: '380px', width: '460px'}}alt=""/>
                        <div className="overlay" style={{width: '460px'}}>
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
                    </ImageArea>
                    <DescriptionArea>
                        <div className='small-text-bold' style={{opacity: '0.6'}}>NEW ARTICLE IS LIVE</div>
                        <div className='header'>Health Check: why do I get a headache when I haven’t had my coffee?</div>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                        <Link to='/'><ButtonBlack text='READ THE FULL STORY'/></Link>
                    </DescriptionArea>
                </Slide>
            </SliderMask>
        </SliderArea>
    )
}
