import React from 'react';

import '@/assets/css/navigation.css'

class Navigation extends React.Component {
  render() {
    return (<div id="navigation_background">
      <div id="navigation" className="clear_fix">
        <ul className="menu horizontal_list_initial">
          <li id="logo">PRETTY GAL</li>
          <li className="menu_selected">Home</li>
          <li>Shop</li>
          <li>Sale</li>
          <li>Customer Care</li>
          <li>Stockists</li>
        </ul>
        <img className="view_shopping_cart" src={require('@/assets/img/bag.png')} alt="view_shopping_cart"/>
      </div>
    </div>)
  }
}

export default Navigation
