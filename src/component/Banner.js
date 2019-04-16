import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../css/enviroment.css";
import "../css/header.css";
import img from '../img/bag.png';

class Banner extends Component {
  render() {
    return (
      <section id="cover">
        <div class="shop">
          <h1>fall & winter</h1>
          <button>shop now</button>
        </div>
      </section>
    )
  }
}

export default hot(module)(Banner);
