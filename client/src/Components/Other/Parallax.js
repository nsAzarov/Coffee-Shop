import styled from 'styled-components';

export const Parallax = styled.div`
    height: 340px;
    width: 100%;
    margin-bottom: 100px;
    background-image: url(${props => props.Image});
    background-position: 50% 50%;
    background-size: cover;
    background-attachment: fixed;
`;