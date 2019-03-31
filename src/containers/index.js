import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Header from './Header';
import Banner from './Banner';
import Media from './Media';
import Section from './Section/Section';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <div>
      <Header />
      <Banner />
      <Media />
      <Section />
    </div>
  );
};

export default hot(Main);
