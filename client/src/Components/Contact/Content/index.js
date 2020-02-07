import React from 'react';

import {Content, WideWrap, Wrap, DecoBlock, Text} from '../../Other/ContentWrap';
import OurOffices from './OurOffices';
import ContactForm from './ContactForm';
import Directory from './Directory';

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
            <ContactForm />
            <iframe title='map' src="https://yandex.ru/map-widget/v1/?um=constructor%3A6609e0843b3351b00119782ad7538deee1ba873d921040f4a3eddd75899baead&amp;source=constructor" width="100%" height="400" frameBorder="0"></iframe>
            <Directory />
        </Content>
    )
}