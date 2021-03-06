import React from 'react';

import {Content, Wrap} from '../../Other/ContentWrap';
import Header from './Header';
import Slider from './Slider';
import Products from './Products';

export default function index() {
    return (
        <Content>
            <Wrap>
                <Header />
                <Slider />
                <Products />
            </Wrap>
        </Content>
    )
}
