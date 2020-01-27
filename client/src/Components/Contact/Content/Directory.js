import React from 'react'
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import {Headline} from '../../Other/Headline';

const Contact = styled.div`
    text-align: center;
    width: 230px;
    .name {
        font-size: 18px;
        line-height: 30px;
        margin: 15px 0;
    }
    .phone, .email {
        color: #1d1f2e;
        opacity: .7;
        line-height: 30px;
    }
`;

const ThreeBlocks = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
`;

export default function Directory() {
    return (
        <Wrap data-aos="fade-up">
            <Headline style={{color: 'black', margin: '100px 0'}} className='small-text-bold' text='DIRECTORY' />
            <ThreeBlocks>
                <Contact data-aos="fade-up">
                    <div className="small-text-bold opacity6">PRESS</div>
                    <div className="name">Robb Kohler</div>
                    <div className="phone">086-374-4962</div>
                    <div className="email">robb.kohler@coffeestyle.com</div>
                </Contact>
                <Contact data-aos="fade-up">
                    <div className="small-text-bold opacity6">MANAGEMENT</div>
                    <div className="name">Roob Dayana</div>
                    <div className="phone">354-341-2750</div>
                    <div className="email">roob.dayana@coffeestyle.com</div>
                </Contact>
                <Contact data-aos="fade-up">
                    <div className="small-text-bold opacity6">SUPPORT</div>
                    <div className="name">Warren Marsh</div>
                    <div className="phone">531-403-0376</div>
                    <div className="email">warren.marsh@coffeestyle.com</div>
                </Contact>
            </ThreeBlocks>
        </Wrap>
    )
}
