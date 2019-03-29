import React, {Component} from "react";
import "../../styles/mainproducts.scss";
import product1 from "../../static/images/pic_01.png"
import product2 from "../../static/images/pic_02.png"
import product3 from "../../static/images/pic_03.png"


class Mainproducts extends Component {
  render() {
    return (<section class="container mainproducts">
      <div class="title">
        <div class="title_main">YEAR ROUND</div>
        <div class="title_line">—</div>
        <div class="title_sub">Must Have Items </div>
      </div>
      <div class="products">
        <div class="products_single">
          <img src={product1}/>
          <div class="imgIntro">EDITOR'S PICKS</div>
        </div>
        <div class="products_single">
          <img src={product2}/>
        </div>
        <div class="products_single">
          <img src={product3}/>
          <div class="imgIntro">GET IN FOCUS</div>
        </div>
      </div>
    </section>);
  }
}

export default Mainproducts;
