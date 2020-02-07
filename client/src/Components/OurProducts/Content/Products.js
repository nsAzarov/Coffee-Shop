import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import ButtonWhite from '../../Other/ButtonWhite';
import {MoreProductsWrap, ProductsCollection, ProductSmall, ImageArea, Title, Price} from '../../Other/Products';

const GET_PRODUCTS_QUERY = gql`
    query GetProducts {
        products {
            productID
            img
            name
            oldPrice
            newPrice
        }
    }
`;

export default function Products() {
    return (
        <MoreProductsWrap>
            <ProductsCollection>
                <Query query={GET_PRODUCTS_QUERY}>
                    {({ loading, error, data }) => {
                        if (loading) return null;
                        if (error) console.log(error);
                        return data.products.map((prod, i) => {
                            return <ProductSmall key={i} data-aos="fade-up">
                                <ImageArea>
                                    <img src={require(`../../../images/${prod.img}`)} alt=""/>
                                    {prod.newPrice ? <ButtonWhite to='/' className='sale' text='On Sale'/> : null}
                                    <div className="overlay">
                                        <ButtonWhite to={`/Product/${prod.productID}`} className='btn' text='EXPLORE MUG'/>
                                    </div>
                                </ImageArea>
                                <Title>
                                {prod.name}
                                </Title>
                                <Price>
                                    {prod.newPrice ? <div className="new-price">${prod.newPrice}.00</div> : null}
                                    <div className="old-price">$ {prod.oldPrice}.00 USD</div>
                                </Price>
                            </ProductSmall>
                        })
                    }}
                </Query>
            </ProductsCollection>
        </MoreProductsWrap>
    )
}
