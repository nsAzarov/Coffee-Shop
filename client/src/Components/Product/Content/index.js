import React from 'react';
import gql from 'graphql-tag';
import {useQuery} from '@apollo/react-hooks';

import {Content} from '../../Other/ContentWrap';
import ProductInfo from './ProductInfo';
import Premium from './Premium';
import Recommendations from './Recommendations';

const GET_PRODUCT_QUERY = gql`
    query GetProduct($ID: Int!) {
        product(ID: $ID) {
            img
            name
            description
            details
            oldPrice
            newPrice
            length
            height
            width
            weight
        }
    }
`;

export default function Main(props) {
    const { loading, data } = useQuery(GET_PRODUCT_QUERY, { variables: {ID: parseInt(props.ID)} });
    const defaultProduct = {
        img: 'default.jpg', name: '', description: '', details: '', 
        oldPrice: 0, newPrice: 0, length: 0, height: 0, width: 0, weight: 0
    };
    return (
        <Content>
            {loading ? 
                props.product ? <ProductInfo data={props.product}/> : <ProductInfo data={defaultProduct}/>
            :
            <ProductInfo data={data.product}/>}
            <Premium />
            <Recommendations />
        </Content>
    )
}
