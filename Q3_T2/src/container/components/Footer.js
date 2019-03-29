import React, {Component} from "react";
import "../../styles/footer.scss";

class Footer extends Component {
  render() {
    return (<footer>
      <div class="container footerContainer">
        <div class="connected">
          <h5>STAY CONNECTED</h5>
        </div>
        <div class="email">
          <h5>BE OUR FRIEND</h5>
          <input placeholder="Email"></input>
          <button>Update Me</button>
        </div>
        <div class="assistance">
          <h5>NEED ASSISTANCE?</h5>
          <p>123-456-7890</p>
          <p>info@mysite.com</p>
        </div>
        <p class="copyright">© 2023 by PRETTY GAL. Proudly created with <a href="#">Wix.com</a></p>
      </div>
    </footer>);
  }
}

export default Footer;
