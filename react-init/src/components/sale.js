import React from 'react';

import '@/assets/css/sale.css'

class Sale extends React.Component {
  render() {
    return (<div id="sale_actie">
      <div class="text_center">
        <div class="sale_year_round">
          <h1>YEAR ROUND</h1>
          <div class="hr_line"></div>
          <h2>Must Have Items</h2>
        </div>
        <ul id="sale_img_list" class="horizontal_list_initial">
          <li><img src={require('@/assets/img/left.png')}/></li>
          <li><img src={require('@/assets/img/middle.png')}/></li>
          <li><img src={require('@/assets/img/right.png')}/></li>
        </ul>
      </div>
    </div>)
  }
}

export default Sale
