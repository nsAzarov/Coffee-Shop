import React from 'react';
import styled from 'styled-components';
import { BlogHeader } from './BlogHeader';
import { Link } from 'react-router-dom';

const Authors = styled.div``;

const Item = styled.li`
    display: flex;
    align-items: center;
    border-left: 2px solid rgba(162, 95, 75, 0.2);
    padding: 8px 0 8px 20px;
    margin: 5px 0;
    line-height: 28px;
    transition: .4s;
    color: grey !important;
    &:hover {
        color: #1d1f2e !important;
        background-color: rgba(162, 95, 75, 0.05);
        border-left: 2px solid rgba(162, 95, 75);
    }
    img {
        height: 60px;
        width: 60px;
        object-fit: cover;
        margin-right: 20px;
    }
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

const Categories = styled.div``;

const AboutUs = styled.div`
    .logo {
        font-size: 21px;
        letter-spacing: 0px;
        font-weight: bold;
        margin-bottom: 15px;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        line-height: 28px;
        margin-bottom: 15px;
    }
    a {
        display: inline-block;
        border-bottom: 2px solid rgba(162, 95, 75, 0.2);
        transition: color 400ms ease, border-color 400ms ease;
        color: #a25f4b;
        text-decoration: none;
        line-height: 28px;
        margin-bottom: 30px;
        &:hover {
            border-bottom: 2px solid rgba(162, 95, 75, .8);
        }
    }
`;

const Container = styled.div`
    width: 300px;
`;

export default function RightArea() {
    return (
        <Container>
            <AboutUs>
                <BlogHeader>About Us</BlogHeader>
                <div className="logo">CoffeeShop</div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <Link to='/'>Read the full Story</Link>
            </AboutUs>
            <Categories>
                <BlogHeader>Categories</BlogHeader>
                <List>
                    <Item>Barista</Item>
                    <Item>Coffee</Item>
                    <Item>LifeStyle</Item>
                    <Item>Mugs</Item>
                </List>
            </Categories>
            <Authors>
                <BlogHeader>Authors</BlogHeader>
                <List>
                    <Item>
                        <img src={require(`../../../images/photo1.jpg`)} alt=""/>
                        Fred Gleason
                    </Item>
                    <Item>
                        <img src={require(`../../../images/photo2.jpg`)} alt=""/>
                        Isabel Hamill
                    </Item>
                    <Item>
                        <img src={require(`../../../images/photo3.jpg`)} alt=""/>
                        Maurice Herman
                    </Item>
                </List>
            </Authors>
        </Container>
    )
}
