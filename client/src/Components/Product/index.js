import React from 'react';

import TopSection from '../Other/Top';
import ContentSection from './Content';
import SubscribeSection from '../Other/Subscribe';
import FooterSection from '../Other/Footer';

export default function index(props) {
    return (
        <>
            <TopSection />
            <ContentSection ID={props.match.params.id} product={props.location.state}/>
            <SubscribeSection />
            <FooterSection />
        </>
    )
}
