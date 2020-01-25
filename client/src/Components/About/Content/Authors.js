import React from 'react';
import styled from 'styled-components';
import { Headline } from '../../Other/Headline';

const Author = styled.div`
    width: 300px;
    img {
        height: 380px;
        width: 300px;
        object-fit: cover;
        margin-bottom: 25px;
    }
    h3 {
        margin-top: 10px;
        margin-bottom: 10px;
        font-size: 20px;
        line-height: 30px;
        font-weight: 400;
        text-align: center;
    }
    h5 {
        opacity: .6;
        text-align: center;
    }
`;

const AuthorsWrap = styled.div`
    display: flex;
    justify-content: space-between;
    width: 940px;
    margin-top: 100px;
`;

export default function Authors() {
    return (
        <>
        <Headline style={{color: 'black'}} className='small-text-bold' text='INTRODUCTIONS' />
        <AuthorsWrap>
            <Author>
                <img src={require(`../../../images/photo1.jpg`)} alt=""/>
                <h3>Fred Gleason</h3>
                <h5 className='small-text-bold'>BRAND OWNER</h5>
            </Author>
            <Author>
                <img src={require(`../../../images/photo2.jpg`)} alt=""/>
                <h3>Isabel Hamilln</h3>
                <h5 className='small-text-bold'>MUG DESIGNER</h5>
            </Author>
            <Author>
                <img src={require(`../../../images/photo3.jpg`)} alt=""/>
                <h3>Maurice Herman</h3>
                <h5 className='small-text-bold'>MUG DESIGNER</h5>
            </Author>
        </AuthorsWrap>
        </>
    )
}
