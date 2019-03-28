import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import Header from './header';
import Media from './media';
import Slogan from './slogan';

const AppComponent = () => {
  return <div>
    <Header />
    <Media />
    <Slogan />
  </div>
}
export default hot(AppComponent);