import React from 'react';

const Banner = props => {
  return (
    <React.Fragment>
      <section className="banner">
        <div className="topic">
          <h1 className="dark">Fall &amp; Winter</h1>
          <a href="#" className="btn_dark">
            Shop Now
          </a>
        </div>
      </section>
      <div className="shipping light_bg dark">
        <span>free shipping worldwide</span>
      </div>
    </React.Fragment>
  );
};

export default Banner;
