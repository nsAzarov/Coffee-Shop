import React from 'react';
import {Content, WideWrap, Wrap, DecoBlock, Text} from '../../Other/ContentWrap';
import Introductions from './Introductions';
import Articles from './Articles';
import Authors from './Authors';

export default function index() {
    return (
        <Content>
            <WideWrap>
                <DecoBlock>
                    <Wrap style={{display: 'flex', justifyContent: 'center'}}>
                        <Text>
                            <h1>About</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        </Text>
                    </Wrap>
                </DecoBlock>
                <Introductions />
                <Articles />
                <Authors />
            </WideWrap>
        </Content>
    )
}
