import React, { useEffect } from 'react';
import { hot } from 'react-hot-loader/root';
import Content from './Content/Content';

const Main = () => {
  useEffect(() => {
    console.log('componentDidMount');
  });
  return (
    <React.Fragment>
      <Content />
    </React.Fragment>
  );
};

export default hot(Main);
