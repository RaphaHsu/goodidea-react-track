import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './Header';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div>
      <Header />
    </div>
  );
};

export default hot(Main);
