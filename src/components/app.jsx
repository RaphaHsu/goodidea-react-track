import React from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './header';
import Banner from './banner';

const App = () => (
  <div>
    <Header />
    <Banner />
  </div>
);

export default hot(App);
