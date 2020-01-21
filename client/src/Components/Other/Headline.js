import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    opacity: 0.6;
    text-transform: uppercase;
    .deco-line {
        width: 30px;
        height: 1px;
        margin: 0px 15px;
        background-color: #d2d2d2;
    }
`;

export const Headline = (props) => 
    <Wrap className={props.className} style={props.style}>
        <div className="deco-line"></div>
        {props.text}
        <div className="deco-line"></div>
    </Wrap>