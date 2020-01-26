import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import ScrollToTop from './Components/Other/ScrollToTop';
import Home from './Components/Home';
import OurProducts from './Components/OurProducts';
import Blog from './Components/Blog';
import About from './Components/About';
import Contact from './Components/Contact';

const Router = () => {
    return (
        <BrowserRouter>
            <ScrollToTop>
                <Route path="/" exact component={Home} />
                <Route path="/OurProducts" component={OurProducts} />
                <Route path="/Blog" component={Blog} />
                <Route path="/About" component={About} />
                <Route path="/Contacts" component={Contact} />
            </ScrollToTop>
        </BrowserRouter>
    )
}

export default Router;