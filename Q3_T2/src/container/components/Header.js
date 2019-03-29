import React, {Component} from "react";
import "../../styles/header.scss"

class Header extends Component {
  render() {
    return (<header>
      <div class="container header_container">
        <div class="logo">PRETTY GAL</div>
        <nav>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Shop</a>
          </li>
          <li>
            <a href="">Sale</a>
          </li>
          <li>
            <a href="">Customer Care</a>
          </li>
          <li>
            <a href="">Stockists</a>
          </li>
        </nav>
      </div>
    </header>);
  }
}

export default Header;
