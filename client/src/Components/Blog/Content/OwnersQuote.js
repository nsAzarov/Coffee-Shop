import React from 'react';
import styled from 'styled-components';

const QuoteWrap = styled.div`
    height: 380px;
    width: 940px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    blockquote {
        display: block;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 35px;
        border-top: 1px none #ececed;
        border-bottom: 2px solid rgba(162, 95, 75, 0.2);
        border-left: 2px solid rgba(162, 95, 75, 0.2);
        background-color: transparent;
        color: #a25f4b;
        font-size: 20px;
        line-height: 32px;
        text-align: center;
    }
    .quote-author {

    }
`;

export default function OwnersQuote() {
    return (
        <QuoteWrap data-aos="fade-up">
            <blockquote>"I wake up some mornings and sit and have my coffee and look out at my beautiful garden, and I go, ’Remember how good this is. Because you can lose it."</blockquote>
            <div className="small-text-bold" style={{opacity: '0.3'}}>JASON JOHNSON - OWNER OF COFFEESHOP</div>
        </QuoteWrap>
    )
}
