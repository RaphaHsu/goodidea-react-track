import React from 'react';

const productLeft = require('../img/left.png');
const productMiddle = require('../img/middle.png');
const productRight = require('../img/right.png');

const productsComponent = () => (
  <div id="products">
    <h2>year round</h2>
    <p>Must Have Items</p>
    <div className="items">
      <img src={productLeft} alt="dress" />
      <img src={productMiddle} alt="handbag" />
      <img src={productRight} alt="shades" />
    </div>
  </div>
);
export default productsComponent;
