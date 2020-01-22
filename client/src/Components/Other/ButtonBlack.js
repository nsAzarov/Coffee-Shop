import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
    padding: 18px 24px;
    background-color: #2f3247;
    box-shadow: 0 3px 8px 0 rgba(29, 31, 46, 0.15);
    opacity: 0.96;
    color: #fff;
    text-align: center;
    letter-spacing: 2px;
    transition: .2s;
    &:hover {
        background-color: #444866;
    }
`;

export default function ButtonWhite(props) {
    return (
        <Button onClick={() => props.onClick} className={props.className}>
            {props.text}
        </Button>
    )
}
