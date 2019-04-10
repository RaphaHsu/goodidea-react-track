import React, { Component } from "react";
import BooksDisplay from "./BooksDisplay"
import '../styles/Homepage.scss';
import '../styles/reset.scss';

class Homepage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      booksData: [],
      filterBooksData: [],
      isLoaded: false,
      searchInput: ''
    }
  }

  componentDidMount() {
    fetch('https://bookshelf.goodideas-studio.com/api')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          booksData: data.list,
          filterBooksData: data.list,
        })
      })
      .catch(error => console.log('Opps', error))
  }

  render() {
    const { booksData, filterBooksData } = this.state;
    return (
      <div>
        <div className="header">
          <div className="header-text">天瓏書局 書籍查詢</div>
        </div>
        <BooksDisplay BooksData={this.state.filterBooksData} />
      </div>
    );
  }
}

export default Homepage;