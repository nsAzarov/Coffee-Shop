import React from 'react';
import {Link} from 'react-router-dom';
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
    color: #1d1f2e;
    margin: 2px 0px;
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
                <MenuItem className="small-text-bold">
                <Link to='/'>HOME</Link>
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold">
                <Link to='/OurProducts'>OUR PRODUCTS</Link>
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold">
                <Link to='/Blog'>BLOG</Link>
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold">
                <Link to='/About'>ABOUT</Link>
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold">
                <Link to='/About'>CONTACT</Link>
                </MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
        </Nav>
    )
}
