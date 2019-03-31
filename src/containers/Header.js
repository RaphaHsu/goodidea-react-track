import React from 'react';
import bag from '../images/car.png';

const Header = () => (
  <div className="header">
    <div className="block">
      <div className="icon">PRETTY GAL</div>
      <button className="button" type="button">Home</button>
      <button className="button" type="button">Shop</button>
      <button className="button" type="button">Sale</button>
      <button className="button" type="button">Customer Care</button>
      <button className="button" type="button">Stockists</button>
      <img className="image-bag" src={bag} alt="bag" />
    </div>
  </div>
);
export default Header;
