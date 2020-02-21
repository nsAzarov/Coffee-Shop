import React, {useState, useEffect} from 'react';
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
    transition: 1s;
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
    const slides = [
        {
            id: 1,
            img: 'slide1.jpg',
            title: 'NEW STORE OPENED',
            header: `We're in London`,
            description: 'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.'
        },
        {
            id: 2,
            img: 'art1.jpg',
            title: 'NEW ARTICLE IS LIVE',
            header: `Health Check: why do I get a headache when I haven’t had my coffee?`,
            description: 'It is a paradisematic country, in which roasted parts of sentences fly into your mouth.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [maxIndex, setMaxIndex] = useState(slides.length - 1); //arr length
    useEffect(() => {
        setMaxIndex(slides.length - 1);
    }, [slides.length])
    const prev = () => {
        currentIndex === 0 ? 
            setCurrentIndex(maxIndex)
            :
            setCurrentIndex(currentIndex - 1);
    }
    const next = () => {
        currentIndex === maxIndex ? 
            setCurrentIndex(0)
            :
            setCurrentIndex(currentIndex + 1);
    }
    useEffect(() => {
        const interval = setInterval(() => {
            (function next() {
                currentIndex === maxIndex ? 
                    setCurrentIndex(0)
                    :
                    setCurrentIndex(currentIndex + 1);
            })();
        }, 5000);
        return () => clearInterval(interval);
    }, [currentIndex, maxIndex])
    return (
        <SliderArea>
            <ArrowButton style={{left: '-70px'}} onClick={() => prev()}>
                <img src={require(`../../../images/arrowLeft.png`)} alt="←"/>
            </ArrowButton>
            <ArrowButton style={{right: '-70px'}} onClick={() => next()}>
                <img src={require(`../../../images/arrowRight.png`)} alt="→"/>
            </ArrowButton>
            <SliderMask>
                {slides.map((slide) => {
                    return <Slide key={slide.id} style={{'transform': `translateX(-${currentIndex*100}%)`}}>
                        <ImageArea style={{width: '460px', padding: '0 10px'}}>
                            <img src={require(`../../../images/${slide.img}`)} style={{height: '380px', width: '460px'}}alt=""/>
                            <div className="overlay" style={{width: '460px'}}>
                                <ButtonWhite to={`/Article/${slide.id}`} className='btn' text='READ THE FULL STORY'/>
                            </div>
                        </ImageArea>
                        <DescriptionArea>
                            <div className='small-text-bold opacity6'>{slide.title}</div>
                            <div className='header'>{slide.header}</div>
                            <p>{slide.description}</p>
                            <div><ButtonBlack to={`/Article/${slide.id}`} text='READ THE FULL STORY'/></div>
                        </DescriptionArea>
                    </Slide>
                })}
            </SliderMask>
        </SliderArea>
    )
}
