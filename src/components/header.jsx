import React from 'react';
import bagImage from '../img/bag_img.png';

const headerComponent = () => (
  <header>
    <a href="/" className="brandName">Pretty gal</a>
    <a href="/#">Home</a>
    <a href="/#">Shop</a>
    <a href="/#">Sale</a>
    <a href="/#">Customer Care</a>
    <a href="/#">Stockists</a>
    <a href="/#"><img src={bagImage} alt="blue bag" /></a>
  </header>
    );
  export default headerComponent;
