import React from 'react';
import styled from 'styled-components';
import { BlogHeader } from './BlogHeader';

const Authors = styled.div``;

const Categories = styled.div``;

const AboutUs = styled.div``;

const Container = styled.div`
    height: 1000px;
    width: 300px;
    border: 1px dotted purple;
`;

export default function RightArea() {
    return (
        <Container>
            <AboutUs>
                <BlogHeader>About Us</BlogHeader>
            </AboutUs>
            <Categories>
                <BlogHeader>Categories</BlogHeader>
            </Categories>
            <Authors>
                <BlogHeader>Authors</BlogHeader>
            </Authors>
        </Container>
    )
}
