import React from 'react';

import {Content, WideWrap, Wrap, DecoBlock, Text} from '../../Other/ContentWrap';
import OurOffices from './OurOffices';

export default function index() {
    return (
        <Content>
            <WideWrap>
                <DecoBlock>
                    <Wrap style={{display: 'flex', justifyContent: 'center'}}>
                        <Text>
                            <h1>Let's Connect</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis.</p>
                        </Text>
                    </Wrap>
                </DecoBlock>
            </WideWrap>
            <OurOffices />
        </Content>
    )
}