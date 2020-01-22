import React from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';
import CartButton from './CartButton';

const TopSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

const Wrap = styled.div`
    display: flex;
    width: 940px;
    padding: 25px;
`;

const Logo = styled.div`
    font-size: 21px;
    letter-spacing: 0px;
    font-weight: bold;
`;

const MenuIcon = styled.div`
    display: none;
`;

export default function index() {
    return (
        <TopSection>
            <Wrap>
                <Logo>CoffeeShop</Logo>
                <NavMenu />
                <CartButton />
                <MenuIcon></MenuIcon>
            </Wrap>
        </TopSection>
    )
}
