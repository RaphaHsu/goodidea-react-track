import React from 'react';

import '@/assets/css/navigation.css'

class News extends React.Component {
  render() {
    return (<div id="navigation_background">
      <div id="navigation" class="clear_fix">
        <ul class="menu horizontal_list_initial">
          <li id="logo">PRETTY GAL</li>
          <li class="menu_selected">Home</li>
          <li>Shop</li>
          <li>Sale</li>
          <li>Customer Care</li>
          <li>Stockists</li>
        </ul>
        <img class="view_shopping_cart" src={require('@/assets/img/bag.png')} alt="view_shopping_cart"/>
      </div>
    </div>)
  }
}

export default News
