import React from 'react';
import TopSection from '../Other/Top';
import SubscribeSection from '../Other/Subscribe';
import FooterSection from '../Other/Footer';
import HeaderSection from './Header';
import ContentSection from './Content';

export default function Home() {
    return (
        <>
            <TopSection />
            <HeaderSection />
            <ContentSection />
            <SubscribeSection />
            <FooterSection />
        </>
    )
}
