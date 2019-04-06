import React, {Component} from "react";
import "../styles/homepage.scss";
import Search from "./components/Search.js";
import MainBooks from "./components/MainBooks.js";
import axios from 'axios';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookData: "",
      displayBookData:""
    };
  }
  getBookData() {
    axios.get('https://bookshelf.goodideas-studio.com/api').then(response => {
      this.setState({
        bookData:response.data.list,
        displayData:response.data.list
      });
    })
  }
  componentDidMount() {
    this.getBookData();
  }
  render() {
    return (<div className="homepage container">
      <div className="banner">
        <h1>好想工作室 X 天瓏書局</h1>
      </div>
      <Search></Search>
      <MainBooks bookData="this.state.displayData"></MainBooks>
    </div>);
  }
}

export default Homepage;
