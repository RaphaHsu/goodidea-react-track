import React from 'react';

import '@/assets/css/footer.css'

class Footer extends React.Component {
  render() {
    return (<div className="footer">
      <ul className="horizontal_list_initial">
        <li className="footer_stay_connected">
          <p>STAY CONNECTED</p>
          <ul className="horizontal_list_initial">
            <li>
              <i className="fa fa-facebook"></i>
            </li>
            <li>
              <i className="fa fa-twitter"></i>
            </li>
            <li>
              <i className="fa fa-pinterest-p"></i>
            </li>
            <li>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </li>
          </ul>
        </li>
        <li className="footer_be_our_friend">
          <p>BE OUR FRIEND</p>
          <input className="update_me_text" type="text" placeholder="Email"/>
          <input className="update_me_button" type="button" value="Update Me"/>
        </li>
        <li className="need_assistance">
          <p className="text_center">NEED ASSISTANCE</p>
          <p className="text_center">123-456-7890</p>
          <p className="text_center">info@mysite.com</p>
        </li>
      </ul>
      <div className="text_center copy_right">
        (c)2023 by PRETTY GAL. Proudly created with Wix.com
      </div>
    </div>)
  }
}

export default Footer
