import React from 'react';
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import {Headline} from '../../Other/Headline';

const OpeningTimes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ul {
        margin: 10px 0;
        li {
            line-height: 28px;
            list-style: none;
        }
    }
`;

const Address = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .office-headline {
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;
    }
    p {
        line-height: 28px;
        opacity: .7;
        margin-bottom: 15px;
    }
`;

const OfficeInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #1d1f2e;
`;

const Office = styled.div`
    width: 460px;
    text-align: center;
    img {
        height: 190px;
        width: 100%;
        object-fit: cover;
        margin-bottom: 40px;
    }
`;


const Offices = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 100px;
`;


export default function OurOffices() {
    return (
        <Wrap style={{marginTop: '-90px'}}>
            <Headline style={{color: 'black'}} className='small-text-bold' text='OUR OFFICES' />
            <Offices>
                <Office>
                    <img src={require(`../../../images/office1.jpg`)} alt=""/>
                    <OfficeInfo>
                        <Address>
                            <div className='small-text-bold opacity6'>UNITED KINGDOM</div>
                            <div className='office-headline'>Canary Wharf, London</div>
                            <p>Jubilee Place<br />London<br />E14 5NY</p>
                        </Address>
                        <OpeningTimes>
                            <div className='small-text-bold opacity6'>OPENING TIMES</div>
                            <ul className='opacity7'>
                                <li>Mon - Fri 08:00 to 22:00</li>
                                <li>Sat - 09:00 to 20:00</li>
                                <li>Sun - 12:00 to 18:00</li>
                            </ul>
                        </OpeningTimes>
                    </OfficeInfo>
                </Office>
                <Office>
                    <img src={require(`../../../images/office2.jpg`)} alt=""/>
                    <OfficeInfo>
                        <Address>
                            <div className='small-text-bold opacity6'>UNITED STATES</div>
                            <div className='office-headline'>Venice Beach, California</div>
                            <p>9219 Old Kingston Street South<br />El Monte, CA<br />91733</p>
                        </Address>
                        <OpeningTimes>
                            <div className='small-text-bold opacity6'>OPENING TIMES</div>
                            <ul className='opacity7'>
                                <li>Mon - Wed 09:00 to 21:00</li>
                                <li>Thu - Sat 09:00 to 22:00</li>
                                <li>Sun - 10:00 to 19:00</li>
                            </ul>
                        </OpeningTimes>
                    </OfficeInfo>
                </Office>
            </Offices>
        </Wrap>
    )
}
