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
                    if (loading) {
                        const product = {
                            img: 'default.jpg',
                            name: '',
                            description: 'Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus.',
                            details: 'Id cupiditate cum sequi eum neque dolorem dicta quisquam non. Quas vel perferendis accusantium eum cum voluptates libero doloribus voluptates. A et quia qui quia. Sunt tempore est sit facilis. Amet suscipit omnis eum necessitatibus quos doloribus. Ut placeat et corrupti. Reprehenderit quisquam omnis omnis velit commodi. Animi quaerat sed repellendus. Perspiciatis rerum commodi dolore consequatur voluptates accusantium velit. Aut dicta iusto neque ea voluptates. Ducimus est ut neque sunt eum iusto. Consequatur quia occaecati enim omnis repudiandae labore.', 
                            oldPrice: 0, newPrice: 0, length: 0, height: 0, width: 0, weight: 0};
                        return <ProductInfo data={product}/>
                    }
                    if (error) console.log(error);

                    return <ProductInfo data={data.product}/>
                }}
            </Query>
            <Premium />
            <Recommendations />
        </Content>
    )
}