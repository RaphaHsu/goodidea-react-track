import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ''
    };
  }

  toSearch = async (event) => {
    const {books, onChangeSearch} = this.props;
    let {search} = this.state;
    search = event.target.value;
    const filterBooks = books.filter(book => book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 || book.ISBN.indexOf(search) !== -1);
    onChangeSearch(filterBooks);
  }

  render() {
    return (
      <React.Fragment>
        <input type="text" name="Text" onChange={this.toSearch} placeholder="book name or ISBN" />
      </React.Fragment>
    );
  }

  static propTypes = {
    onChangeSearch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };
}
