import React from 'react';
import ReactDOM from 'react-dom';
import igIcon from '../image/ig.png';
import fbIcon from '../image/fb.png';
import twitterIcon from '../image/twitter.png';
import pinterestIcon from '../image/pinterest.png';


export default function(){
  return (
    <div className="footer">
      <div className="footerContent">
        <div className="footerLayout">
          <div className="footerConnected">
            <p className="title">
              STAY CONNECTED
            </p>
            <img src={igIcon}/>
            <img src={fbIcon}/>
            <img src={twitterIcon}/>
            <img src={pinterestIcon}/>

          </div>
          <div className="footerEmail">
            <p className="title">
              BE OUR FRIEND
            </p>
            <div className="email">
              Email
            </div>
            <button>
              Update Me
            </button>
            <div className="clearFix">
            </div>
          </div>
          <div className="footerContactUs">
            <p className="title">
              NEED ASSISTANCE?
            </p>
            <p>
              123-456-7890
            </p>
            <p>
              info@mysite.com
            </p>
          </div>
        </div>
        <div className="noticeText">
          © 2023 by PRETTY GAL. Proludly created with <span>Wix.com</span>
        </div>
      </div>
    </div>
  )
}
