import React, {Component} from "react";
import "../../styles/banner.scss";

class Banner extends Component {
  render() {
    return (<section>
      <div className="banner">
        <div className="banner_intro">
          <div className="banner_intro_title">FALL & WINTER</div>
          <button>Shop Now</button>
        </div>
      </div>
      <div className="banner_free">FREE  SHIPPING  WORDWIDE</div>
    </section>);
  }
}

export default Banner;
