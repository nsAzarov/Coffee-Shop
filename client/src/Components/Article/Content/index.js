import React from 'react';

import {Content} from '../../Other/ContentWrap';
import Head from './Head';
import Article from './Article';
import FurtherReading from './FurtherReading';

export default function index(props) {
    return (
        <Content>
            <Head article={props.article}/>
            <Article article={props.article}/>
            <FurtherReading />
        </Content>
    )
}
