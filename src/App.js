import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./css/enviroment.css";
import "./css/header.css";

class App extends Component {
  render() {
    return (
      <body>
        <header id="header">
          <ul class="nav">
            <li><a href="#logo">pretty gal</a></li>
            <li><a href="#home">home</a></li>
            <li><a href="#shop">shop</a></li>
            <li><a href="#sale">sale</a></li>
            <li><a href="#customer_care">customer care</a></li>
            <li><a href="#stockists">stockists</a></li>
            <li>
              <a href="#shop_car" id="shop-car">
                <img src="img/bag.png" alt="shop car" />
              </a>
            </li>
          </ul>
        </header>

        <section id="cover">
          <div class="shop">
            <h1>fall & winter</h1>
            <button>shop now</button>
          </div>
        </section>
        
        <h4 class="waistband">free shipping worlwide</h4>

        <section id="buy">
          <h2>year round</h2>
          <hr width="3%" />
          <h3>must have items</h3>
          <img src="img/left.png" alt="" />
          <img src="img/middle.png" alt="" />
          <img src="img/right.png" alt="" />
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
