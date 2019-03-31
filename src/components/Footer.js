import React from "react";
import "../styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="footer_connected">
            <p className="footer_connected_title">STAY CONNECTED</p>
            <div className="footer_connected_icons">
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "facebook-f"]}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "twitter"]}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "pinterest-p"]}
                  color="white"
                  size="2x"
                />
              </a>
              <a href="#">
                <FontAwesomeIcon
                  icon={["fab", "instagram"]}
                  color="white"
                  size="2x"
                />
              </a>
            </div>
          </div>
          <div className="footer_email">
            <h5>BE OUR FRIEND</h5>
            <input type="text" placeholder="Email" />
            <button>Update Me</button>
          </div>
          <div className="footer_contact">
            <h5>NEED ASSISTANCE?</h5>
            <p>123-456-7890</p>
            <p>info@mysite.com</p>
          </div>
          <div className="copyright">
            <p>
              © 2023 by PRETTY GAL. Proudly created with
          <a href="#">Wix.com</a>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;