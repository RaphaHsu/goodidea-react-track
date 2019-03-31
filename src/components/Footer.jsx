import React from 'react';

const Footer = props => {
  return (
    <footer className="footer dark_bg">
      <div className="wrap clearfix light">
        <div className="span-4-of-12 footer_left">
          <div>STAY CONNETED</div>
          <ul className="social clearfix">
            <li>
              <a href="#">
                <i className="fab fa-facebook-f" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-pinterest-p" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fab fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
        <div className="span-4-of-12 footer_middle">
          <form action="#" className="clearfix">
            <label htmlFor="email">BE OUR FRIEND</label>
            <br />
            <input
              type="email"
              id="email"
              name="mail"
              placeholder="Email"
              required
            />
            <br />
            <button type="submit">Update Me</button>
          </form>
        </div>
        <div className="span-4-of-12 footer_right">
          <div className="info">
            <div>NEED ASSISTANCE?</div>
            <br />
            <div className="tel">
              <a href="tel:1234567890">123-456-7890</a>
            </div>
            <br />
            <div className="mail">
              <a href="mailto:info@mysite.com">info@mysite.com</a>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>
          &copy; 2023 by PRETTY GAL. Proudly created with{' '}
          <i className="fas fa-heart" /> at <a href="#">Wix.com</a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
