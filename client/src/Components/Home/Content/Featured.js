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
        height: 540px;
        width: 460px;
    }
`;

const ProductBig = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 460px;
    &:first-child {
        padding-right: 20px;
    }
`;

const FeaturedCollection = styled.div`
    display: flex;
    margin: 100px 0;
`;

const FeaturedWrap = styled.div`
    display: flex;
    flex-direction: column;
`;

export default function Featured() {
    return (
        <FeaturedWrap>
            <Headline style={{color: 'black'}} className='small-text-bold' text='FEATURED MUGS'/>
            <FeaturedCollection>
                <ProductBig>
                    <ImageArea>
                        <img src={require(`../../../images/mugPink.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Pink Premium Ceramic
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 99.00 USD</div>
                    </Price>
                </ProductBig>
                <ProductBig>
                    <ImageArea>
                        <img src={require(`../../../images/mugBeige.jpg`)} alt=""/>
                    </ImageArea>
                    <Title>
                    Golden Designers Mug
                    </Title>
                    <Price>
                        <div className="new-price">$50.00</div>
                        <div className="old-price" style={{textDecoration: 'line-through'}}>$ 69.00 USD</div>
                    </Price>
                </ProductBig>
            </FeaturedCollection>
        </FeaturedWrap>
    )
}
