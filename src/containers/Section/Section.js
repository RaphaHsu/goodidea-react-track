import React from 'react';
import Slogan from './Slogan';
import Product from './Product';

import firstProduct from '../../images/menu1.png';
import secondProduct from '../../images/menu2.png';
import thirdProduct from '../../images/menu3.png';

const Section = () => (
  <div className="section">
    <div className="block">
      <Slogan />
      <div className="product-list">
        <Product url={firstProduct} alt="first" />
        <Product url={secondProduct} alt="second" />
        <Product url={thirdProduct} alt="third" />
      </div>
    </div>
  </div>
);
export default Section;
