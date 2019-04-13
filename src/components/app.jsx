import React, { Component } from "react";
import { hot } from 'react-hot-loader/root';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';


import Search from './search';
import Products from './products';

library.add(fab);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
        <Search />
        <Products />
      </div>
    );
  }
}

export default hot(App);
