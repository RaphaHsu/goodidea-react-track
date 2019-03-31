import React from 'react';

const productLeft = require('../images/product_left.png');
const productMiddle = require('../images/product_middle.png');
const productRight = require('../images/product_right.png');

const Products = props => {
  return (
    <section className="products">
      <h2 className="title">YEAR ROUND</h2>
      <h3 className="subtitle">Must Have Items</h3>
      <div className="wrap clearfix">
        <div className="span-4-of-12 light_bg product_left">
          <img src={productLeft} alt="dress" width="auto" height="400" />
          <a href="#" className="btn_dark">
            editor's pick
          </a>
        </div>
        <div className="span-4-of-12 light_bg product_middle">
          <div>sale</div>
          <img src={productMiddle} alt="handbag" width="238" height="auto" />
        </div>
        <div className="span-4-of-12 light_bg product_right">
          <img src={productRight} alt="shades" width="268" height="auto" />
          <a href="#" className="btn_dark">
            get in focus
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
