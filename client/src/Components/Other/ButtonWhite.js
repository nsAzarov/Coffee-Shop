import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
    padding: 18px 24px;
    color: #1d1f2e;
    background-color: #fff;
    text-align: center;
    letter-spacing: 2px;
    transition: .2s;
    &:hover {
        background-color: #f5f5f5;
    }
`;

export default function ButtonWhite(props) {
    return (
        <Button to={props.to ? props.to : '/'} onClick={() => props.onClick} className={props.className} style={props.style}>
            {props.text}
        </Button>
    )
}
