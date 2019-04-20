import React from 'react';

import '@/assets/css/footer.css'

class Footer extends React.Component {
  render() {
    return (<div class="footer">
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
    </div>)
  }
}

export default Footer
