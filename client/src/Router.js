import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import ScrollToTop from './Components/Other/ScrollToTop';
import Home from './Components/Home';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
            <Route path="/" exact component={Home} />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;