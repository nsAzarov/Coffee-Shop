import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Price = styled.div`
    display: flex;
    align-items: center;
    cursor: default;
    .new {
        margin-right: 10px;
        color: #a25f4b;
        font-size: 20px;
        line-height: 32px;
    }
    .old {
        text-decoration: line-through;
        color: rgba(29, 31, 46, 0.7);
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
    }
    .one {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 28px;
        font-weight: 400;
    }
`;

const Title = styled(Link)`
    color: #1d1f2e;
    font-size: 20px;
    line-height: 30px;
    font-weight: 400;
    text-align: center;
    margin: 30px 0px 5px 0px;
`;

const ImageArea = styled.div`
    img {
        object-fit: cover;
        height: 380px;
        width: 300px;
    }
    position: relative;
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
        height: 99%;
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
            }
            opacity: 1;
            background-color: rgb(50%,50%,50%, .2);
        }
    }
`;

const ProductSmall = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    padding-right: 20px;
    margin-bottom: 60px;
    &:nth-child(3n) {
        padding-right: 0px;
    }
`;

const ProductsCollection = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 100px;
`;

const MoreProductsWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
`;

export {MoreProductsWrap, ProductsCollection, ProductSmall, ImageArea, Title, Price}