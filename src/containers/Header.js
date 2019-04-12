import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Search from './Search';

export default class Header extends Component {
  render() {
    const {books, onChangeSearch} = this.props;
    return (
      <div className="header-block">
        <div className="logo">
          <p>天瓏書局 <i className="fas fa-times" /> 好想工作室</p>
        </div>
        <div className="search">
          <Search books={books} onChangeSearch={onChangeSearch} />
        </div>
      </div>
    );
  }

  static propTypes = {
    onChangeSearch: PropTypes.func.isRequired,
    books: PropTypes.array.isRequired
  };
}
