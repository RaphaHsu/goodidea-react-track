import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./css/enviroment.css";
import "./css/header.css";

class Header extends Component {
  render() {
    return (
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
    )
  }
}

export default hot(module)(Header);
