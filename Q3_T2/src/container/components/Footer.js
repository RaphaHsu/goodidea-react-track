import React, {Component} from "react";
import "../../styles/footer.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class Footer extends Component {
  render() {
    return (<footer>
      <div className="container footerContainer">
        <div className="connected">
          <h5>STAY CONNECTED</h5>
          <div className="connected_icons">
            <a href="#"><FontAwesomeIcon icon={['fab', 'facebook-f']} color="white" size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} color="white" size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'pinterest-p']} color="white" size="2x"/></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'instagram']} color="white" size="2x"/></a>
          </div>
        </div>
        <div className="email">
          <h5>BE OUR FRIEND</h5>
          <input placeholder="Email"></input>
          <button>Update Me</button>
        </div>
        <div className="assistance">
          <h5>NEED ASSISTANCE?</h5>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
        <p className="copyright">© 2023 by PRETTY GAL. Proudly created with
          <a href="#">Wix.com</a>
        </p>
      </div>
    </footer>);
  }
}

export default Footer;
