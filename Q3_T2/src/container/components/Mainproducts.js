import React, {Component} from "react";
import "../../styles/mainproducts.scss";
import product1 from "../../static/images/pic_01.png"
import product2 from "../../static/images/pic_02.png"
import product3 from "../../static/images/pic_03.png"


class Mainproducts extends Component {
  render() {
    return (<section className="container mainproducts">
      <div className="title">
        <div className="title_main">YEAR ROUND</div>
        <div className="title_line">—</div>
        <div className="title_sub">Must Have Items </div>
      </div>
      <div className="products">
        <div className="products_single">
          <img src={product1}/>
          <div className="imgIntro">EDITOR'S PICKS</div>
        </div>
        <div className="products_single">
          <img src={product2}/>
        </div>
        <div className="products_single">
          <img src={product3}/>
          <div className="imgIntro">GET IN FOCUS</div>
        </div>
      </div>
    </section>);
  }
}

export default Mainproducts;
