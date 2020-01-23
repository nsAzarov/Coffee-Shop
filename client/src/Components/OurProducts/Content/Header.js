import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
    margin: 0 5px;
    padding: 10px 16px;
    border: 1px solid  rgba(162, 95, 75, 0.4);
    opacity: 1;
    color: #a25f4b;
`;

const Btn = (props) => {
    return (
        <Button className={props.className}>
            {props.text}
        </Button>
    )
}

const Buttons = styled.div`
    display: flex;
    margin-top: 40px;
`;

const HeaderArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 390px;
    h1 {
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 30px;
    }
`;

export default function Header() {
    return (
        <HeaderArea>
            <h1>Our Products</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <Buttons>
                <Btn className='small-text-bold' text='ALL PRODUCTS' />
                <Btn className='small-text' text='COFFEE MUGS' />
                <Btn className='small-text' text='OTHERS' />
                <Btn className='small-text' text='PREMIUM' />
                <Btn className='small-text' text='TEA MUGS' />
            </Buttons>
        </HeaderArea>
    )
}
