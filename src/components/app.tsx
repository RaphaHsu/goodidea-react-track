import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import BookSearch from './book-search';
const AppComponent = () => {
  return <div>
    <BookSearch />  
  </div>
}
export default hot(AppComponent);