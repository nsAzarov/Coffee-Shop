import React from 'react';
import styled from 'styled-components';
import { Headline } from '../../Other/Headline';

const Timeline = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 570px;
    text-align: center;
    position: relative;
    margin-bottom: 50px;
    .num {
        position: absolute;
        left: 0px;
        top: -28px;
        right: 0px;
        z-index: 0;
        color: rgba(29, 31, 46, 0.05);
        font-size: 40px;
        line-height: 56px;
    }
    .event-name {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 18px;
        line-height: 30px;
        opacity: .6;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        margin-bottom: 15px;
        line-height: 28px;
        font-weight: 400;
    }
    .bottom-deco-line {
        display: block;
        width: 200px;
        height: 1px;
        margin-top: 30px;
        background-color: #ececed;
    }
    .second-deco-line {
        display: block;
        width: 1px;
        height: 60px;
        background-color: #ececed;
    }
`;

const TimelineWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 940px;
`;

export default function HistoryTimeline() {
    return (
        <TimelineWrap data-aos="fade-up">
            <Headline style={{color: 'black', marginBottom: '100px'}} className='small-text-bold' text='HISTORY TIMELINE' />
            <Timeline data-aos="fade-up">
                <div className="num">04</div>
                <div className="small-text-bold" style={{opacity: '0.6'}}>OCTOBER 2018</div>
                <div className="event-name">One day however a small line</div>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
                <div className="bottom-deco-line"></div>
                <div className="second-deco-line"></div>
            </Timeline>
            <Timeline data-aos="fade-up">
                <div className="num">03</div>
                <div className="small-text-bold" style={{opacity: '0.6'}}>AUGUST 2018</div>
                <div className="event-name">Overlaid the jeepers uselessly</div>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
                <div className="bottom-deco-line"></div>
                <div className="second-deco-line"></div>
            </Timeline>
            <Timeline data-aos="fade-up">
                <div className="num">02</div>
                <div className="small-text-bold" style={{opacity: '0.6'}}>JUNE 2018</div>
                <div className="event-name">Pointing has no control about</div>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum.</p>
                <div className="bottom-deco-line"></div>
                <div className="second-deco-line"></div>
            </Timeline>
            <Timeline data-aos="fade-up">
                <div className="num">01</div>
                <div className="small-text-bold" style={{opacity: '0.6'}}>NOVEMBER 2017</div>
                <div className="event-name">We've started CoffeeStyle.</div>
                <div className="bottom-deco-line"></div>
                <div className="second-deco-line"></div>
            </Timeline>
        </TimelineWrap>
    )
}
