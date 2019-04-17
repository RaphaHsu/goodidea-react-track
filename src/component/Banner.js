import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "../css/enviroment.css";
import "../css/main.css";

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
