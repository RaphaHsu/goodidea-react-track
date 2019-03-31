import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Banner from './Banner';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div>
      <Header />
      <Banner />
    </div>
  );
};

export default hot(Main);
