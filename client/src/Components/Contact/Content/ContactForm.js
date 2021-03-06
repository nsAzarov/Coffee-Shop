import React, {useRef} from 'react';
import gql from 'graphql-tag';
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import {Headline} from '../../Other/Headline';
import { useMutation } from '@apollo/react-hooks';

const ButtonBlack = styled.button`
    cursor: pointer;
    padding: 18px 24px;
    background-color: #1d1f2e;
    box-shadow: 0 3px 8px 0 rgba(29, 31, 46, 0.15);
    opacity: 0.96;
    color: #fff !important;
    text-align: center;
    font-size: 12px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    transition: .2s;
    &:hover {
        background-color: #2f3247;
    }
`;

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

const ADD_CONTACT = gql`
    mutation addContact($name: String!, $email: String!, $message: String!) {
        addContact(name: $name, email: $email, message: $message) {
            name
            email
            message
        }
    }
`;

export default function ContactForm() {
    const name = useRef('');
    const email = useRef('');
    const message = useRef('');
    const [addContact] = useMutation(ADD_CONTACT);
    return (
        <Wrap style={{margin: '100px 0 50px 0'}}>
            <FormWrap data-aos="fade-up">
                <LeftArea>
                    <Headline style={{color: 'black'}} className='small-text-bold' text='CONTACT FORM' />
                    <div className='contact-form-headline'>Drop us your message and I'll get back to you as soon as possible.</div>
                    <Form className='small-text-bold opacity6'>
                        <label htmlFor='name'>NAME</label>
                        <input placeholder='James Coffee' name='name' ref={name}/>
                        <label htmlFor='email'>EMAIL ADDRESS</label>
                        <input placeholder='customer@coffeestyle.io' name='email' ref={email}/>
                        <label htmlFor='message'>YOUR MESSAGE</label>
                        <textarea placeholder='Hi! I would like to ask something about mugs.' name='message' ref={message}/>
                    </Form>
                    <ButtonBlack onClick={() => {addContact({ variables: {name: name.current.value, email: email.current.value, message: message.current.value} }); alert('Отправлено')}}>SEND MESSAGE</ButtonBlack>
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
