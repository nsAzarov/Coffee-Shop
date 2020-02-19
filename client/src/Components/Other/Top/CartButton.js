import React from 'react';
import styled from 'styled-components';
import shoppingBag from '../../../images/shoppingBag.png';

const Cart = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left: 20px;
    transition: .2s;
    opacity: .6;
    &:hover {
        opacity: .9;
    }
`;

const CartIcon = styled.div`
    background: url(${shoppingBag}) no-repeat;
    background-size: cover;
    height: 20px;
    width: 16px;
    margin-right: 8px;
`;

const Quantity = styled.div`
    display: inline-block;
    margin-left: 8px;
    padding: 0 6px;
    border-radius: 9px;
    font-size: 11px;
    line-height: 18px;
    font-weight: 700;
    text-align: center;
    height: auto;
    background-color: #1d1f2e;
    color: #fff;
`;

export default function CartButton() {
    return (
        <Cart className="small-text-bold">
            <CartIcon />
            CART
            <Quantity>0</Quantity>
        </Cart>
    )
}
