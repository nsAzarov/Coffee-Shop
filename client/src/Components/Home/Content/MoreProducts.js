import React from 'react';

import {Headline} from '../../Other/Headline';
import ButtonWhite from '../../Other/ButtonWhite';
import {MoreProductsWrap, ProductsCollection, ProductSmall, ImageArea, Title, Price} from '../../Other/Products';

export default function MoreProducts() {
    return (
        <MoreProductsWrap data-aos="fade-up">
            <Headline style={{color: 'black'}} className='small-text-bold' text='MORE PRODUCTS' />
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
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price">$25.00</div>
                        <div className="old-price">$ 37.00 USD</div>
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
                    Red Love Cup
                    </Title>
                    <Price>
                        <div className="new-price"></div>
                        <div className="old-price">$ 19.00 USD</div>
                    </Price>
                </ProductSmall>
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
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
                <ProductSmall data-aos="fade-up">
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
