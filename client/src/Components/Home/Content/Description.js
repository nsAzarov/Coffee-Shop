import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const DescriptionWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 100px 140px;
    width: 660px;
    h2 {
        margin: 15px 0px;
        font-size: 28px;
        line-height: 40px;
        font-weight: 400;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        line-height: 28px;
    }
    a {
        display: inline-block;
        margin-top: 25px;
        line-height: 28px;
        border-bottom: 2px solid rgba(162, 95, 75, 0.2);
        transition: color 400ms ease, border-color 400ms ease;
        color: #a25f4b;
        text-decoration: none;
    }
`;

export default function Description() {
    return (
        <DescriptionWrap>
            <h2>Even the all-powerful Pointing has no control about the blind texts.</h2>
            <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
            <Link>Read the full Story</Link>
        </DescriptionWrap>
    )
}
