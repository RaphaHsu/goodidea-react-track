import React from "react";
import "../styles/Main.scss";
import product1 from "../images/left.png"
import product2 from "../images/middle.png"
import product3 from "../images/right.png"

class Main extends React.Component {
  render() {
    return (
      <section>
        <div className="title">
          <h2 className="title_main">YEAR ROUND</h2>
          <div className="title_line">—</div>
          <h3 className="title_sub">Must Have Items</h3>
        </div>

        <div className="products_group">
          <div className="product">
            <img src={product1} />
          </div>
          <div className="product">
            <img src={product2} />
          </div>
          <div className="product">
            <img src={product3} />
          </div>
        </div>
      </section>
    )
  }
}

export default Main;
