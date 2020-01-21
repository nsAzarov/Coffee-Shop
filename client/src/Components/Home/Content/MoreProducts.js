import React from 'react';
import styled from 'styled-components';

import {Headline} from '../../Other/Headline';

const Price = styled.div`
    display: flex;
    align-items: center;
    .new-price {
        margin-right: 10px;
        color: #a25f4b;
        font-size: 20px;
        line-height: 32px;
    }
    .old-price {
        color: rgba(29, 31, 46, 0.7);
        font-size: 16px;
        line-height: 28px;
        font-weight: 400;
    }
`;

const Title = styled.div`
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
`;

export default function MoreProducts() {
    return (
        <MoreProductsWrap>
            <Headline style={{color: 'black'}} className='small-text-bold' text='MORE PRODUCTS' />
            <ProductsCollection>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img1.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price">$25.00</div>
                        <div className="old-price">$ 37.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img2.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price">$25.00</div>
                        <div className="old-price">$ 37.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img3.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img4.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img5.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img6.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img7.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/mugPink.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img9.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
            </ProductsCollection>
        </MoreProductsWrap>
    )
}
