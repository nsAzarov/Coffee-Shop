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

const MenuItem = styled(Link)`
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
                <MenuItem className="small-text-bold" to='/'>HOME</MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold" to='/OurProducts'>OUR PRODUCTS</MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold" to='/Blog'>BLOG</MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold" to='/About'>ABOUT</MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
            <MenuItemWrap>
                <MenuItem className="small-text-bold" to='/Contacts'>CONTACT</MenuItem>
                <MenuItemDecoLine />
            </MenuItemWrap>
        </Nav>
    )
}
