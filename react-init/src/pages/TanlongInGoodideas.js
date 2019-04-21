import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

import Book from '../components/Book'

function fetchTanlongBooks () {
  return axios.get(`https://bookshelf.goodideas-studio.com/api`)
  .then((res) => {
    return res.data
  })
}

function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

class TanlongInGoodideas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateAt: 0,
      books: [{
        image: '',
        ISBN: ''
      }],
      show: 8
    }

    fetchTanlongBooks().then((res) => {
      this.setState({
        updateAt: new Date(res.updateAt),
        books: res.list
      })
    })
    this.infiniteLoading = this.infiniteLoading.bind(this);
  }

  infiniteLoading (e) {
    const currTotal = !this.state.show || this.state.show;
    const maxTotal = !this.state.books || this.state.books.length;
    const currScroll = document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight;
    if (currTotal < maxTotal && Math.abs(maxScroll - currScroll) < 2000) {
      this.setState((state) => ({
        show: state.show + 8
      }))
    }
  }

  componentDidMount() {
    document.addEventListener('scroll', debounce(this.infiniteLoading, 20, false));
  }

  render() {
    return (<div>
      天瓏書局 x 好想工作室
      <div className="books">
        {this.state.books.slice(0, this.state.show).map((book) => (<Book key={book.ISBN.toString()} data={book}></Book>))}
      </div>
    </div>);
  }
}

export default TanlongInGoodideas;
