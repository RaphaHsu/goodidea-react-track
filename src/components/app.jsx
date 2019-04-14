import React, { Component } from "react";
import { hot } from "react-hot-loader/root";

import Search from "./search";
import Products from "./products";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      searchItems: [],
    };
  }

  getBooksList = () => {
    fetch("https://bookshelf.goodideas-studio.com/api")
      .then(response => response.json())
      .then((data) => {
        const booksList = data.list;
        this.setState({
          booksData: booksList,
          searchItems: booksList
        });
      })
      .catch(error => console.log("Opps", error));
  };

  filterbooks = (searchItems) => {
    this.setState({
      searchItems
    });
  }

  componentDidMount() {
    this.getBooksList();
  }

  render() {
    const {booksData, searchItems} = this.state;
    return (
      <div>
        <Search books={booksData} onChangeSearch={this.filterbooks} />
        <Products searchItems={searchItems} />
      </div>
    );
  }
}

export default hot(App);
