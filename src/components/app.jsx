import React from 'react';
import { hot } from 'react-hot-loader/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Header from './header';
import Banner from './banner';
import Products from './products';
import Footer from './footer';

library.add(fab);
const App = () => (
  <div>
    <Header />
    <Banner />
    <Products />
    <Footer />
  </div>
);

export default hot(App);
