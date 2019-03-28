import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import Header from './header';
import Media from './media';

const AppComponent = () => {
  return <div>
    <Header />
    <Media />
  </div>
}
export default hot(AppComponent);