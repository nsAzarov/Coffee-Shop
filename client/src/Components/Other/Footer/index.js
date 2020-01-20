import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const GridElem = styled.div`
    .logo {
        font-size: 21px;
        letter-spacing: 0px;
        font-weight: bold;
    }
    .col-header {
    }
    a {
        text-decoration: none;
        display: block;
        margin-bottom: 10px;
        transition: .1s;
        &:hover {
            color: #a25f4b;
        }
    }
    .copyright {
        position: absolute;
        bottom: 35px;
        cursor: pointer;
    }
    h2 {
        color: grey;
        position: absolute;
        bottom: 100px;
    }
`;

const Wrap = styled.div`
    display: grid;
    grid-template-columns: 290px 150px 150px 290px;
    grid-template-rows: 25px 130px;
    grid-gap: 20px;
    margin: 100px 0px; 
    opacity: 0.7;
    cursor: default;
`;

const FooterSection = styled.div`
    display: flex;
    justify-content: center;
`;

export default function index() {
    return (
        <FooterSection>
            <Wrap  className='middle-text'>
                <GridElem>
                    <div className="logo">CoffeeShop</div>
                </GridElem>
                <GridElem>
                    <div className="col-header small-text-bold">MENU</div>
                </GridElem>
                <GridElem>
                    <div className="col-header small-text-bold">FOLLOW US</div>
                </GridElem>
                <GridElem>
                    <div className="col-header small-text-bold">CONTACT US</div>
                </GridElem>
                <GridElem className='middle-text'>
                    <p>Delivering the best coffee life since 1996.<br />From coffee geeks to the real ones.</p>
                    <a href='https://github.com/nsAzarov/Coffee-Shop' className='copyright'>github.com/nsAzarov</a>
                </GridElem>
                <GridElem>
                    <Link to='/'>Home</Link>
                    <Link to='/'>Our Products</Link>
                    <Link to='/'>About</Link>
                    <Link to='/'>Contact</Link>
                </GridElem>
                <GridElem>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Telegram</Link>
                    <Link to='/'>Twitter</Link>
                </GridElem>
                <GridElem>
                    <p>We’re Always Happy to Help</p>
                    <h2>qwe@gmail.com</h2>
                </GridElem>
            </Wrap>
        </FooterSection>
    )
}
