import React, {Component} from "react";
import "../styles/homepage.scss";

import Mainproducts from "./components/Mainproducts.js";

class Homepage extends Component {
  render() {
    return (<div className="homepage container">
      <div className="banner">
        <h1>好想工作室 X 天瓏書局</h1>
      </div>
      <Mainproducts></Mainproducts>
    </div>);
  }
}

export default Homepage;
