import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import {Content, WideWrap, Wrap, DecoBlock, Text} from '../../Other/ContentWrap';

const LinkLine = styled.div`
    color: #a25f4b;
    margin-bottom: 40px;
    p {
        font-size: 12px !important;
        display: inline-block;
        opacity: .6;
    }
    a {
        &:first-child {
            border-bottom: 2px solid rgba(162, 95, 75, 0.3);
        }
        transition: color 400ms ease, border 400ms ease, opacity 400ms ease;
        color: #a25f4b;
        text-decoration: none;
        cursor: pointer;
        &:hover {
            opacity: 1;
            border-bottom: 2px solid rgba(162, 95, 75, 0.5);
        }
    }
`;

const HeadPost = styled.div`
    width: 565px;
    margin: 80px 0;
    h1 {
        margin-top: 10px;
        margin-bottom: 20px;
        font-size: 44px;
        line-height: 54px;
        font-weight: 400;
        color: #1d1f2e;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 30px;
    }
`;

export default function Head() {
    return (
        <Wrap>
            <HeadPost>
                <LinkLine>
                    <Link to='/Blog' className='small-text-bold opacity6'>BLOG</Link><p>&nbsp;/&nbsp;</p><Link to='/Blog' className='small-text-bold opacity6'>COFFEE</Link>
                </LinkLine>
                <h1>Will drinking coffee prolong your life?</h1>
                <p>Aliquid aperiam accusantium quam ipsam. Velit rerum veniam optio illo dolor delectus et recusandae. Impedit aut cupiditate. Illumeveniet officiis ullam ipsam sed iste eius. Nam at quae ducimus dicta delectus</p>
            </HeadPost>
        </Wrap>
    )
}
