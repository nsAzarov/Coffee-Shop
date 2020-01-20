import React from 'react';
import TopSection from '../Other/Top';
import SubscribeSection from '../Other/Subscribe';
import FooterSection from '../Other/Footer';
import HeaderSection from './Header';

export default function Home() {
    return (
        <>
            <TopSection />
            <HeaderSection />
            <SubscribeSection />
            <FooterSection />
        </>
    )
}
