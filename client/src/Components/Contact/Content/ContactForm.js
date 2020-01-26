import React from 'react';
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import {Headline} from '../../Other/Headline';
import ButtonBlack from '../../Other/ButtonBlack';

const RightArea = styled.div`
    .headline {
        margin: 10px 0;
        font-size: 18px;
        line-height: 30px;
    }
    p {
        line-height: 28px;
        opacity: .7;
        margin-bottom: 40px;
    }
`;

const Form = styled.div`
    display: flex;
    flex-direction: column;
    label {
        margin-bottom: 12px;
    }
    input {
        height: 54px;
        margin-bottom: 20px;
        padding: 0 24px;
        border: 1px solid #e5e5e7;
        border-radius: 0px;
        transition: border 400ms ease, color 400ms ease;
        text-transform: uppercase;
        letter-spacing: 2px;
        cursor: pointer;
    }
    textarea {
        height: 60px;
        margin-bottom: 20px;
        padding: 18px 24px;
        border: 1px solid #e5e5e7;
        border-radius: 0px;
        transition: border 400ms ease, color 400ms ease;
        text-transform: uppercase;
        letter-spacing: 2px;
        resize: vertical;
        cursor: pointer;
    }
`;

const LeftArea = styled.div`
    width: 470px;
    padding-right: 60px;
    border-right: 1px solid rgba(210, 210, 213, 0.5);
    margin-right: 60px;
    .contact-form-headline {
        margin: 10px 0 25px 0;
        font-size: 18px;
        line-height: 30px;
    }
`;

const FormWrap = styled.div`
    display: flex;
    background-color: white;
    z-index: 10;
    border: 1px solid rgba(210, 210, 213, 0.5);
    padding: 60px;
`;

export default function ContactForm() {
    return (
        <Wrap style={{margin: '100px 0 50px 0'}}>
            <FormWrap>
                <LeftArea>
                    <Headline style={{color: 'black'}} className='small-text-bold' text='CONTACT FORM' />
                    <div className='contact-form-headline'>Drop us your message and I'll get back to you as soon as possible.</div>
                    <Form className='small-text-bold opacity6'>
                        <label for='name'>NAME</label>
                        <input placeholder='James Coffee' name='name'></input>
                        <label for='email'>EMAIL ADDRESS</label>
                        <input placeholder='customer@coffeestyle.io' name='email'></input>
                        <label for='message'>YOUR MESSAGE</label>
                        <textarea placeholder='Hi! I would like to ask something about mugs.' name='message'></textarea>
                    </Form>
                    <ButtonBlack className='small-text-bold' text='START SHOPPING'/>
                </LeftArea>
                <RightArea>
                    <div className='small-text-bold opacity6'>ADDRESS</div>
                    <div className='headline'>CoffeeShop. Inc</div>
                    <p>Pride Ave,<br />Hamlyn Heights<br />VIC 3215<br />Australia</p>
                    <div className='small-text-bold opacity6'>CALL US</div>
                    <div className='headline' style={{marginBottom: '40px'}}>+1 (415) 555-1212</div>
                    <div className='small-text-bold opacity6'>EMAIL US</div>
                    <div className='headline'>us@coffeestyle.io</div>
                </RightArea>
            </FormWrap>
        </Wrap>
    )
}
