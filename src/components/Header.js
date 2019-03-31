import React from "react";
import "../styles/Header.scss";
import shoppingcart from "../images/shoppingcart.png";

class Header extends React.Component {
  render() {
    return (
      <header>
        <a className="logo">PRETTY GAL</a>
        <ul className="navbar">
          <li>Home</li>
          <li>Shop</li>
          <li>Sale</li>
          <li>Customer Care</li>
          <li>Stockists</li>
        </ul>
        <img className="shoppingCart" src={shoppingcart} alt="shoppingcart" />
      </header>
    );
  }
}

export default Header;