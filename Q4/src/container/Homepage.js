import React, {Component} from "react";
import "../styles/homepage.scss";
import Search from "./components/Search.js";
import MainBooks from "./components/MainBooks.js";

class Homepage extends Component {
  render() {
    return (<div className="homepage container">
      <div className="banner">
        <h1>好想工作室 X 天瓏書局</h1>
      </div>
      <Search></Search>
      <MainBooks></MainBooks>
    </div>);
  }
}

export default Homepage;
