import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

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
    const { loading, data } = useQuery(GET_PRODUCTS_QUERY);
    return (
        <MoreProductsWrap>
            <ProductsCollection>
                {loading ? null : data.products.map((prod, i) => {
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
                        <Title>
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
