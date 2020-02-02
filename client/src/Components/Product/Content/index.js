import React from 'react';

import {Content} from '../../Other/ContentWrap';
import ProductInfo from './ProductInfo';
import Premium from './Premium';

export default function index() {
    return (
        <Content>
            <ProductInfo />
            <Premium />
        </Content>
    )
}