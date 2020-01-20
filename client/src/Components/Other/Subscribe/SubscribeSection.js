import React from 'react';
import styled from 'styled-components';

const SubscribeForm = styled.div`
    input {
        width: 350px;
        height: 54px;
        margin-bottom: 0px;
        padding: 0px 24px;
        background-color: transparent;
        color: #fff;
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
        letter-spacing: 2px;
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
        font-size: 12px;
        line-height: 18px;
        font-weight: 700;
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

const FirstHeadline = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0.6;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    text-transform: uppercase;
    .deco-line {
        width: 30px;
        height: 1px;
        margin: 0px 15px;
        background-color: rgba(210, 210, 213, 0.1);
    }
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
                    <FirstHeadline>
                        <div className="deco-line"></div>
                        SIGN UP AND GET FREE COFFEE BAGS
                        <div className="deco-line"></div>
                    </FirstHeadline>
                    <SecondHeadline>Coffee Updates</SecondHeadline>
                    <SubscribeForm>
                        <input type="text" placeholder="customer@coffeestyle.io"/>
                        <button>SUBSCRIBE</button>
                    </SubscribeForm>
                </Form>
            </SubscribeWrap>
        </SubscribeSection>
    )
}
