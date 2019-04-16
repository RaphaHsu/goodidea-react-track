import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../css/enviroment.css";
import "../css/main.css";
import leftImg from '../img/left.png';
import middleImg from '../img/middle.png';
import rightImg from '../img/right.png';

class Products extends Component {
  render() {
    return (
      <section id="buy">
        <h2>year round</h2>
        <hr width="3%" />
        <h3>must have items</h3>
        <img src={leftImg} alt="" />
        <img src={middleImg} alt="" />
        <img src={rightImg} alt="" />
      </section>
    )
  }
}

export default hot(module)(Products);
