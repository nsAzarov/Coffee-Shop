import React from 'react';
import styled from 'styled-components';

import {Headline} from '../../Other/Headline';
import ButtonWhite from '../../Other/ButtonWhite';

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

export default function MoreProducts() {
    return (
        <MoreProductsWrap>
            <Headline style={{color: 'black'}} className='small-text-bold' text='MORE PRODUCTS' />
            <ProductsCollection>
                <ProductSmall>
                    <ImageArea>
                        <img src={require(`../../../images/img1.jpg`)} alt=""/>
                        <ButtonWhite className='sale' text='On Sale'/>
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <ButtonWhite className='sale' text='On Sale'/>
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
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
