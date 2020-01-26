import React from 'react';
import TopSection from '../Other/Top';
import SubscribeSection from '../Other/Subscribe';
import FooterSection from '../Other/Footer';
import ContentSection from './Content';

export default function Home() {
    return (
        <>
            <TopSection />
            <ContentSection />
            <SubscribeSection />
            <FooterSection />
        </>
    )
}
