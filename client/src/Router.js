import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import ScrollToTop from './Components/Other/ScrollToTop';
import Home from './Components/Home';
import OurProducts from './Components/OurProducts';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Route path="/" exact component={Home} />
                <Route path="/OurProducts" component={OurProducts} />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;