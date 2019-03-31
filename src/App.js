import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Main from "./components/Main";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
        <Main />
      </div>
    )
  }
}

export default App;