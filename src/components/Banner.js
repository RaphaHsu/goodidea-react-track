import React from "react";
import "../styles/Banner.scss";

class Banner extends React.Component {
  render() {
    return (
      <div>
        <div className="banner">
          <div className="banner_intro">
            <h1 className="banner_intro_title">FALL & WINTER</h1>
            <button>Shop now</button>
          </div>
        </div>
        <div className="banner_bottom">FREE SHIPPING WORLDWIDE</div>
      </div>
    );
  }
}

export default Banner;