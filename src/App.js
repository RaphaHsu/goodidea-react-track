import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./component/Header.js"
import Banner from "./component/Banner.js"
import Products from "./component/Products.js"
import Footer from "./component/Footer.js"
import "./css/enviroment.css";
import "./css/main.css";

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Banner />
        <h4 class="waistband">free shipping worlwide</h4>
        <Products />
        <Footer />
      </body>
    );
  }
}

export default hot(module)(App);
