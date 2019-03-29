import React, {Component} from "react";
import "../../styles/banner.scss";

class Banner extends Component {
  render() {
    return (<section>
      <div class="banner">
        <div class="banner_intro">
          <div class="banner_intro_title">FALL & WINTER</div>
          <button>Shop Now</button>
        </div>
      </div>
      <div class="banner_free">FREE  SHIPPING  WORDWIDE</div>
    </section>);
  }
}

export default Banner;
