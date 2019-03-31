import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="block">
      <div className="connected">
        <p>STAY CONNECTED</p>
        <div className="social-icon">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-pinterest-p" />
          <i className="fab fa-instagram" />
        </div>
      </div>
      <div className="register">
        <form className="form-register" action="#">
          <p>BE OUR FRIEND</p>
          <input className="input-email" tpye="email" name="email" placeholder="Email" />
          <button className="form-button" type="button">Update Me</button>
        </form>
      </div>
      <div className="contact">
        <p>NEES ASSISSTANCE?</p>
        <p className="p-contact" href="tel:+1234567890">123-456-7890</p>
        <p className="p-contact" href="emailto:info@mysite.com">info@mysite.com</p>
      </div>
    </div>
    <div className="copy-right">
      <p>© 2023 by PRETTY GAL. Proudly created with Wix.com</p>
    </div>
  </div>
);
export default Footer;
