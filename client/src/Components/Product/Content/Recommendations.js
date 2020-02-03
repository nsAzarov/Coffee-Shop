import React from 'react'
import styled from 'styled-components';

import {MoreProductsWrap, ProductsCollection, ProductSmall, ImageArea, Title, Price} from '../../Other/Products';
import { Headline } from '../../Other/Headline';
import ButtonWhite from '../../Other/ButtonWhite';

export default function Recommendations() {
    return (
        <MoreProductsWrap>
            <Headline style={{color: 'black'}} className='small-text-bold' text='YOU MIGHT ALSO LIKE THESE' />
            <ProductsCollection>
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
                    <ImageArea>
                        <img src={require(`../../../images/img2.jpg`)} alt=""/>
                        <ButtonWhite className='sale' text='On Sale'/>
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
                    </ImageArea>
                    <Title>
                    Black Tea Cup
                    </Title>
                    <Price>
                        <div className="new-price">$25.00</div>
                        <div className="old-price">$ 29.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall data-aos="fade-up">
                    <ImageArea>
                        <img src={require(`../../../images/img3.jpg`)} alt=""/>
                        <div className="overlay">
                            <ButtonWhite className='btn' text='EXPLORE MUG'/>
                        </div>
                    </ImageArea>
                    <Title>
                    B&W Essentials Mug
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
