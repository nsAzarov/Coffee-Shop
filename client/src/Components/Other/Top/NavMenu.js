import React from 'react';
import styled from 'styled-components';

const Nav = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
`;

const MenuItemWrap = styled.div`
    margin-right: 30px;
    padding: 4px 0px;
    transition: .2s;
    opacity: .6;
    &:hover {
        opacity: .9;
    }
`;

const MenuItem = styled.a`
    font-size: 12px;
    color: #1d1f2e;
    margin: 2px 0px;
    line-height: 18px;
    font-weight: 700;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    cursor: pointer;
`;

const MenuItemDecoLine = styled.div`
    height: 2px;
`;

export default function NavMenu() {
    return (
        <Nav>
            <MenuItemWrap>
                <MenuItem>
                HOME
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem>
                OUR PRODUCTS
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem>
                BLOG
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem>
                ABOUT
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem>
                CONTACT
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
        </Nav>
    )
}
