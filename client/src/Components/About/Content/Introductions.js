import React from 'react';
import styled from 'styled-components';

import {Headline} from '../../Other/Headline';
import {SmallText} from '../../Other/ContentWrap';

const Intro = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 940px;
    img {
        height: 320px;
        width: 940px;
        object-fit: cover;
        margin-bottom: 100px;
    }
`;

export default function Introductions() {
    return (
        <Intro>
            <img src={require(`../../../images/headpic.jpg`)} alt=""/>
            <Headline style={{color: 'black'}} className='small-text-bold' text='INTRODUCTIONS' />
            <SmallText style={{width: '660px'}}>
                <h2>Overlaid the jeepers uselessly much excluding everyday life.</h2>
                <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            </SmallText>
        </Intro>
    )
}
