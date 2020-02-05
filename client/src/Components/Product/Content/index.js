import React from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

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

export default function index(props) {
    return (
        <Content>
            <Query query={GET_PRODUCT_QUERY} variables={{ ID: parseInt(props.ID) }}>
                {({ loading, error, data }) => {
                    if (loading) return <h1>adf</h1>;
                    if (error) console.log(error);

                    return <ProductInfo data={data}/>
                }}
            </Query>
            <Premium />
            <Recommendations />
        </Content>
    )
}