import styled from 'styled-components';

export const ImageArea = styled.div`
    position: relative;
    img {
        object-fit: cover;
        height: 540px;
        width: 460px;
    }
    .sale {
        position: absolute;
        z-index: 10;
        top: 10px;
        right: 10px;
        font-size: 16px;
        padding: 12px 16px;
        letter-spacing: normal;
        color: #a25f4b;
        font-weight: 700;
    }
    .overlay {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        opacity: 0;
        transition: background-color .2s linear, opacity .4s;
        .btn {
            transition: .4s;
            margin: 1% 4%;
            width: 92%;
        }
        &:hover {
            .btn {
                margin: 4% 4%;
                width: 92%;
            }
            opacity: 1;
            background-color: rgb(50%,50%,50%, .2);
        }
    }
`;