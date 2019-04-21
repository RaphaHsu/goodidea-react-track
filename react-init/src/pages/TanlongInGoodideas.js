import ReactDOM from 'react-dom';
import React from 'react';
import axios from 'axios';

function fetchTanlongBooks () {
  return axios.get(`https://bookshelf.goodideas-studio.com/api`)
  .then((res) => {
    return res.data
  })
}

class TanlongInGoodideas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      updateAt: 0,
      books: [{
        image: ''
      }]
    }

    fetchTanlongBooks().then((res) => {
      this.setState({
        updateAt: new Date(res.updateAt),
        books: res.list
      })
    })
  }

  render() {
    return (<div>
      天瓏書局 x 好想工作室
      {this.state.books.length}
    </div>);
  }
}

export default TanlongInGoodideas;
