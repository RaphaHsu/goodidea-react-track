import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const footerComponent = () => (
  <div id="footer">
    <div id="social">
      <p>stay connected</p>
      <a href="/#"><FontAwesomeIcon icon={['fab', 'facebook-f']} /></a>
      <a href="/#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
      <a href="/#"><FontAwesomeIcon icon={['fab', 'pinterest-p']} /></a>
      <a href="/#"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
    </div>
    <div id="subscribe">
      <p>Be our friend</p>
      <form action="" name="subscribeForm" id="subscribeForm">
        <input
          type="email"
          id="email"
          name="mail"
          placeholder="Email"
          required
        />
        <div id="button_position">
          <button type="submit">Update Me</button>
        </div>
      </form>
    </div>
    <div id="contact">
      <p>NEED ASSISTANCE?</p>
      <br />
      <div>
        <a href="tel:1234567890">123-456-7890</a>
      </div>
      <br />
      <div>
        <a href="mailto:info@mysite.com">info@mysite.com</a>
      </div>
    </div>
    <div>
      &copy; 2023 by PRETTY GAL. Proudly created with <a href="/#">Wix.com</a>
    </div>
  </div>
);
export default footerComponent;
