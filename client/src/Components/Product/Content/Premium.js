import React from 'react';
import styled from 'styled-components';
const img = require(`../../../images/premium.jpg`);

const TextWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: 400px;
    margin-left: 80px;
    .premium-heading {
        margin-bottom: 10px;
        font-size: 24px;
        line-height: 36px;
        font-weight: 400;
        span {
            font-weight: 700;
        }
    }
    p {
        opacity: 0.9;
        margin-bottom: 30px;
        font-size: 18px;
        line-height: 30px;
    }
    .premium-content-article {
        display: flex;
        .icon {
            display: flex;
            width: 50px;
            height: 28px;
            margin-right: 20px;
            justify-content: center;
            align-items: center;
            img {
                display: inline-block;
                max-height: 28px;
                max-width: 100%;
                margin-top: 25px;
                margin-bottom: 25px;
            }
        }
        .text {
            .heading {
                font-size: 16px;
                line-height: 28px;
                font-weight: 400;
            }
            p {
                opacity: .7;
                font-size: 16px;
            }
        }
    }
`;

const ImageWrap = styled.div`
    display: inline-block;
    height: 100%;
    width: 50%;
    padding-right: 10px;
    background: url(${img});
    background-position: 50% 50%;
    background-size: cover;
`;

const PremiumSection = styled.div`
    display: flex;
    height: 460px;
    width: 100%;
    margin-bottom: 105px;
    background-color: #1d1f2e;
`;

export default function Premium() {
    return (
        <PremiumSection>
            <ImageWrap />
            <TextWrap>
                <div className='premium-heading'>Handmade by <span>CoffeeShop.</span></div>
                <p>The most versatile furniture system ever created. Designed to fit your life.</p>
                <div className="premium-content-article">
                    <div className="icon">
                        <img src={require(`../../../images/diamond.png`)} alt=''/>
                    </div>
                    <div className="text">
                        <div className="heading">Premium Quality</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
                    </div>
                </div>
                <div className="premium-content-article">
                    <div className="icon">
                        <img src={require(`../../../images/lamp.png`)} alt=''/>
                    </div>
                    <div className="text">
                        <div className="heading">Gentle to the Environment</div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in.</p>
                    </div>
                </div>
            </TextWrap>
        </PremiumSection>
    )
}
