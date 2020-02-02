import React from 'react';
import styled from 'styled-components';

import {Wrap} from '../../Other/ContentWrap';
import ButtonBlack from '../../Other/ButtonBlack';

const ProductDescription = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    width: 400px;
    h1 {
        margin-top: 10px;
        margin-bottom: 15px;
        font-size: 36px;
        line-height: 50px;
        font-weight: 400;
        color: #1d1f2e;
    }
    p {
        color: rgba(29, 31, 46, 0.7);
        font-size: 18px;
        line-height: 30px;
    }
    form {
        margin: 30px 0;
        .price {
            font-size: 30px;
            line-height: 42px;
        }
        label {
            display: block;
            margin-bottom: 12px;
            color: #1d1f2e;
        }
        input {
            display: inline-block;
            max-width: 50px;
            margin-right: 10px;
            margin-bottom: 0px;
            border: 1px solid #1d1f2e;
            padding: 18px 24px;
            border: 1px solid #e5e5e7;
            background-color: #fafafa;
            transition: border 400ms ease, color 400ms ease;
        }
        &:hover {
            input {
                border: 1px solid #1d1f2e;
            }
        }
    }
`;

const InfoSection = styled.div`
    display: flex;
    margin: 100px 0;
    img {
        height: 460px;
        width: 460px;
        margin-right: 80px;
    }
    .details {
        width: 460px;
        margin-right: 80px;
        p {
            margin-top: 20px;
            color: rgba(29, 31, 46, 0.7);
            margin-bottom: 15px;
            line-height: 28px;
        }
    }
    .dimensions {
        ul {
            margin-top: 20px;
            li {
                span {
                    margin-right: 5px;
                    opacity: 0.7;
                }
                color: #1d1f2e;
                line-height: 28px;
            }
        }
    }
`;

export default function ProductInfo() {
    return (
        <Wrap>
            <InfoSection>
                <img src={require(`../../../images/mugPink.jpg`)} alt=""/>
                <ProductDescription>
                    <h1>Pink Premium Ceramic</h1>
                    <p>A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.</p>
                    <form>
                        <div className="price">$ 99.00 USD</div>
                        <label for='quantity' className='small-text-bold opacity6'>QUANTITY</label>
                        <input name='quantity' className='small-text-bold' type='number' value='1'/>
                        <ButtonBlack className='small-text-bold' text='ADD TO CART' style={{display: 'inline-block'}}/>
                    </form>
                </ProductDescription>
            </InfoSection>
            <InfoSection>
                <div className="details">
                    <div className="small-text-bold opacity6">DETAILS</div>
                    <p>
                    Aut dicta iusto neque ea voluptates. Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.
                    </p>
                </div>
                <div className="dimensions">
                    <div className="small-text-bold opacity6">DETAILS</div>
                    <ul>
                        <li><span>Lenght (in):</span>45.0</li>
                        <li><span>Height (in):</span>98.0</li>
                        <li><span>Width (in):</span>56.0</li>
                        <li><span>Weight (oz):</span>200.0</li>
                    </ul>
                </div>
            </InfoSection>
        </Wrap>
    )
}
