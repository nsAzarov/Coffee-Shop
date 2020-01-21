import React from 'react';
import styled from 'styled-components';
import ButtonWhite from '../ButtonWhite';
import {Headline} from '../Headline';

const SubscribeForm = styled.div`
    input {
        width: 350px;
        height: 54px;
        margin-bottom: 0px;
        padding: 0px 24px;
        background-color: transparent;
        color: #fff;
        text-transform: uppercase;
        margin-right: 10px;
        border: 1px solid #2f303e;
        transition: border 400ms ease;
        text-align: left;
        &:hover {
            border: 1px solid darkgrey;
        }
        &:focus {
            outline: 1px solid #2f303e;
        }
    }
    button {
        padding: 18px 24px;
        color: #1d1f2e;
        background-color: #fff;
        text-align: center;
        transition: .2s;
        &:hover {
            background-color: #f5f5f5;
        }
    }
`;

const SecondHeadline = styled.div`
    margin-top: 15px;
    margin-bottom: 25px;
    font-size: 36px;
    line-height: 50px;
    color: white;
    text-align: center;
    letter-spacing: 0px;
    color: #f5f5f5;
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const SubscribeWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 330px;
    width: 100%;
    max-width: 1440px;
    background-color: #1d1f2e;
`;

const SubscribeSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export default function index() {
    return (
        <SubscribeSection>
            <SubscribeWrap>
                <Form>
                    <Headline className="small-text-bold" text='SIGN UP AND GET FREE COFFEE BAGS' />
                    <SecondHeadline>Coffee Updates</SecondHeadline>
                    <SubscribeForm>
                        <input type="text" className="small-text-bold" placeholder="customer@coffeestyle.io"/>
                        <ButtonWhite className='middle-text' text='SUBSCRIBE'/>
                    </SubscribeForm>
                </Form>
            </SubscribeWrap>
        </SubscribeSection>
    )
}
