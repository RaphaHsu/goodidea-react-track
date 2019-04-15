import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

class searchComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };
  }

  filterData= (e) => {
    const { books, onChangeSearch } = this.props;
    let { searchInput } = this.state;
    searchInput = e.target.value;
    const filterResult = books.filter(
      book => book.name.toLowerCase().indexOf(searchInput) !== -1
        || book.ISBN.indexOf(searchInput) !== -1
    );
    onChangeSearch(filterResult);
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSearch} />
        <input
          type="text"
          name="Text"
          onChange={this.filterData}
          placeholder="書籍名稱 or ISBN"
        />
      </div>
    );
  }

  static propTypes = {
    onChangeSearch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };
}
export default searchComponent;
