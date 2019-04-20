import React from 'react';

import './assets/css/footer.css'
import './assets/css/index.css'
import './assets/css/navigation.css'
import './assets/css/news.css'
import './assets/css/sale.css'

class T2 extends React.Component {
  render() {
    return (<div>
      <div id="navigation_background">
        <div id="navigation" class="clear_fix">
          <ul class="menu horizontal_list_initial">
            <li id="logo">PRETTY GAL</li>
            <li class="menu_selected">Home</li>
            <li>Shop</li>
            <li>Sale</li>
            <li>Customer Care</li>
            <li>Stockists</li>
          </ul>
          <img class="view_shopping_cart" src="img/bag.png" alt="view_shopping_cart"/>
        </div>
      </div>
      <div id="news">
        <div id="news_background">
          <div id="news_content">
            <p>FALL & WINTER</p>
            <button>Shop Now</button>
          </div>
        </div>
        <div id="news_free_shipping_worlwide">
          <p>FREE SHIPPING WORLWIDE</p>
        </div>
      </div>
      <div id="sale_actie">
        <div class="text_center">
          <div class="sale_year_round">
            <h1>YEAR ROUND</h1>
            <div class="hr_line"></div>
            <h2>Must Have Items</h2>
          </div>
          <ul id="sale_img_list" class="horizontal_list_initial">
            <li><img src="img/left.png"/></li>
            <li><img src="img/middle.png"/></li>
            <li><img src="img/right.png"/></li>
          </ul>
        </div>
      </div>
      <div class="footer">
        <ul class="horizontal_list_initial">
          <li class="footer_stay_connected">
            <p>STAY CONNECTED</p>
            <ul class="horizontal_list_initial">
              <li>
                <i class="fa fa-facebook"></i>
              </li>
              <li>
                <i class="fa fa-twitter"></i>
              </li>
              <li>
                <i class="fa fa-pinterest-p"></i>
              </li>
              <li>
                <i class="fa fa-instagram" aria-hidden="true"></i>
              </li>
            </ul>
          </li>
          <li class="footer_be_our_friend">
            <p>BE OUR FRIEND</p>
            <input class="update_me_text" type="text" placeholder="Email"/>
            <input class="update_me_button" type="button" value="Update Me"/>
          </li>
          <li class="need_assistance">
            <p class="text_center">NEED ASSISTANCE</p>
            <p class="text_center">123-456-7890</p>
            <p class="text_center">info@mysite.com</p>
          </li>
        </ul>
        <div class="text_center copy_right">
          (c)2023 by PRETTY GAL. Proudly created with Wix.com
        </div>
      </div>
    </div>)
  }
}

export default T2;
