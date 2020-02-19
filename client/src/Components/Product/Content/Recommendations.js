import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import {MoreProductsWrap, ProductsCollection, ProductSmall, ImageArea, Title, Price} from '../../Other/Products';
import { Headline } from '../../Other/Headline';
import ButtonWhite from '../../Other/ButtonWhite';

const GET_FIRST_N_PRODUCTS_QUERY = gql`
    query GetFirstNProducts($first: Int!) {
        n_products(first: $first) {
            productID
            img
            name
            oldPrice
            newPrice
        }
    }
`;

export default function Recommendations() {
    const { loading, data } = useQuery(GET_FIRST_N_PRODUCTS_QUERY, { variables: {first: 3} });
    return (
        <MoreProductsWrap>
            <Headline style={{color: 'black'}} className='small-text-bold' text='YOU MIGHT ALSO LIKE THESE' data-aos="fade-up"/>
            <ProductsCollection>
            {loading ? null : data.n_products.map((prod, i) => {
                return <ProductSmall key={i} data-aos="fade-up">
                    <ImageArea>
                        <img src={require(`../../../images/${prod.img}`)} alt=""/>
                        {prod.newPrice ? <ButtonWhite to='/' className='sale' text='On Sale'/> : null}
                        <div className="overlay">
                            <ButtonWhite to={{
                                pathname: `/Product/${prod.productID}`,
                                state: prod
                            }} className='btn' text='EXPLORE MUG'/>
                        </div>
                    </ImageArea>
                    <Title to={{
                        pathname: `/Product/${prod.productID}`,
                        state: prod
                    }}>
                    {prod.name}
                    </Title>
                    <Price>
                        {prod.newPrice ? <>
                            <div className="new price">${prod.newPrice}.00</div>{prod.newPrice ? null : null}
                            <div className="old price">$ {prod.oldPrice}.00 USD</div>
                        </> :
                        <div className="one price">$ {prod.oldPrice}.00 USD</div>}
                    </Price>
                </ProductSmall>
            })}
            </ProductsCollection>
        </MoreProductsWrap>
    )
}
