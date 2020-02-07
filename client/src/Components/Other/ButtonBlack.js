import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Button = styled(Link)`
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

export default function ButtonWhite(props) {
    return (
        <Button to={props.to ? props.to : '/'} className={props.className}>
            {props.text}
        </Button>
    )
}
