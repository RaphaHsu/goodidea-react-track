import React, { Component } from 'react';
import Header from './Header';
import Banner from './Banner';
import Products from './Products';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Banner />
        <Products />
        <Footer />
      </React.Fragment>
    );
  }
}
