import React from 'react';

const Header = props => {
  return (
    <header className="header dark_bg">
      <div className="wrap">
        <ul className="nav-bar clearfix">
          <li>
            <a href="#" className="logo">
              pretty gal
            </a>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Sale</a>
          </li>
          <li>
            <a href="#">Customer Care</a>
          </li>
          <li>
            <a href="#">Stockists</a>
          </li>
          <li>
            <a href="#" className="shopping-bag">
              <i className="fas fa-shopping-bag" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
