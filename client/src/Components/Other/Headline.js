import React from 'react';
import styled from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

export const Headline = (props) => {
    AOS.init();
    return (
        <Wrap className={props.className} style={props.style} data-aos={props.dataAos}>
            <div className="deco-line"></div>
            {props.text}
            <div className="deco-line"></div>
        </Wrap>
    )
}