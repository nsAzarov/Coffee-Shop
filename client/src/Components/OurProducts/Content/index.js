import React from 'react';
import styled from 'styled-components';

import {Content, Wrap} from '../../Other/ContentWrap';
import Header from './Header';
import Slider from './Slider';

export default function index() {
    return (
        <Content>
            <Wrap>
                <Header />
                <Slider />
            </Wrap>
        </Content>
    )
}
