import React from 'react'
import styled from 'styled-components';
import ButtonWhite from '../ButtonWhite';
import ProductInDemoCart from './ProductInDemoCart';

const CartFooter = styled.div`
    padding: 30px 40px 40px 40px;
    .subtotal-line {
        display: flex;
        justify-content: space-between;
        color: white;
        font-size: 20px;
        line-height: 32px;
        margin-bottom: 25px;
    }
`;

const CartList = styled.div`
    padding: 30px 40px 0 40px;
    overflow: auto;
    border-bottom: 1px solid rgba(210, 210, 213, 0.1);
    flex: 1;
`;

const CartHeader = styled.div`
    display: flex;
    justify-content: space-between;
    width: 400px;
    padding: 30px 40px;
    border-bottom: 1px solid rgba(210, 210, 213, 0.1);
    img {
        opacity: .6;
        transition: .4s;
        cursor: pointer;
        &:hover {
            opacity: 1;
        }
    }
`;

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 480px;
    background-color: #1d1f2e;
`;

const CartContainerWrapper = styled.div`
    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 100;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(29, 31, 46, 0.15);
`;

export default function DemoCart() {
    return (
        <CartContainerWrapper>
            <CartContainer>
                <CartHeader>
                    <div className='small-text-bold opacity6' style={{color: 'white'}}>YOUR CART</div>
                    <img src={require(`../../../images/close.png`)} alt="close" width='13' height='13'/>
                </CartHeader>
                <CartList>
                    <ProductInDemoCart />
                </CartList>
                <CartFooter>
                    <div className="subtotal-line">
                        <span>Subtotal</span>
                        <span>$ 99.00 USD</span>
                    </div>
                    <ButtonWhite text='CONTINUE TO CHECKOUT' style={{width: '100%'}}/>
                </CartFooter>
            </CartContainer>
        </CartContainerWrapper>
    )
}
