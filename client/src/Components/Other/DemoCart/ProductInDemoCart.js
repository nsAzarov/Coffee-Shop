import React from 'react'
import styled from 'styled-components';

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    img {
        height: 80px;
        width: 80px;
    }
    .description {
        color: #fff;
        font-size: 18px;
        line-height: 30px;
        font-weight: 400;
        width: 180px;
        .price {
            line-height: 28px;
            font-size: 16px;
            margin-bottom: 5px;
        }
        .remove {
            opacity: .3;
            transition: .4s;
            cursor: pointer;
            &:hover {
                opacity: .6;
            }
        }
    }
    input {
        width: 60px;
        height: 42px;
        text-align: center;
        margin-top: 19px;
        transition: border 400ms ease;
        background-color: transparent;
        transition: border 400ms ease;
        color: #ddd;
        border: 1px solid #2f303e;
        &:hover {
            border: 1px solid #ddd;
        }
    }
`;

export default function ProductInDemoCart() {
    return (
        <Product>
            <img src={require(`../../../images/mugPink.jpg`)} alt=""/>
            <div className="description">
                <div className='title'>Pink Premium Ceramic</div>
                <div className='price'>$ 99.00 USD</div>
                <div className='small-text-bold remove'>REMOVE</div>
            </div>
            <input type="text" className='small-text-bold' value='1' />
        </Product>
    )
}
