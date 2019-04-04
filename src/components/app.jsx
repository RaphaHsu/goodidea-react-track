import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './header';
import Banner from './banner';
import Products from './products';

const App = () => (
  <div>
    <Header />
    <Banner />
    <Products />
  </div>
);

export default hot(App);
