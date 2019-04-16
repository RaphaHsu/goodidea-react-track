import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Header from "./component/Header.js"
import Banner from "./component/Banner.js"
import "./css/enviroment.css";
import "./css/main.css";
import leftImg from './img/left.png';
import middleImg from './img/middle.png';
import rightImg from './img/right.png';

class App extends Component {
  render() {
    return (
      <body>
        <Header />
        <Banner />
        
        
        <h4 class="waistband">free shipping worlwide</h4>

        <section id="buy">
          <h2>year round</h2>
          <hr width="3%" />
          <h3>must have items</h3>
          <img src={leftImg} alt="" />
          <img src={middleImg} alt="" />
          <img src={rightImg} alt="" />
        </section>

        <footer>
          <div class="info">
            <div class="col">
              <h6>stay connected</h6>
              <i class="fab fa-facebook-f"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-pinterest-p"></i>
              <i class="fab fa-instagram"></i>
            </div>
            <div class="col clearfix">
              <h6>subscribe for Updates</h6>
              <input action="text" placeholder="Email"></input>
              <button>subscrib now</button>
            </div>
            <div class="col">
              <h6>need assistance?</h6>
              <h6>123-456-7890</h6>
              <h6>info@mysit.com</h6>
            </div>
          </div>
          <h6>&copy; 2023 by PREETY GAL. Proudly created with Tony</h6>
        </footer>
      </body>
    );
  }
}

export default hot(module)(App);
