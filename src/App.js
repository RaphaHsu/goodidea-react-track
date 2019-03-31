import React, { Component } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Banner />
      </div>
    )
  }
}

export default App;