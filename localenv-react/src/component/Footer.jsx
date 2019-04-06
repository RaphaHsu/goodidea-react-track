import React from 'react';
import ReactDOM from 'react-dom';
import igIcon from '../image/ig.png';
import fbIcon from '../image/fb.png';
import twitterIcon from '../image/twitter.png';
import pinterestIcon from '../image/pinterest.png';


export default function(){
  return (
    <footer>
        <div className="footerContainer">
          <div className="connected">
            <p className="subTitle">
              STAY CONNECTED
            </p>
            <img src={igIcon}/>
            <img src={fbIcon}/>
            <img src={twitterIcon}/>
            <img src={pinterestIcon}/>
          </div>
          <div className="email">
            <p className="subTitle">
              BE OUR FRIEND
            </p>
            <input type="text" placeholder="Email" />
            <button>
              Update Me
            </button>
            <div className="clearFix">
            </div>
          </div>
          <div className="contactUs">
            <p className="subTitle">
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
      <div className="copyright">
        © 2023 by PRETTY GAL. Proludly created with <span>Wix.com</span>
      </div>
    </footer>
  )
}
