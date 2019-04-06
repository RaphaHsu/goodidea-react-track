import React, {Component} from "react";
import "../../styles/mainbooks.scss";

const MainBooks = (Props) => {
  return (<section className="mainbooks">
    <div className="book">
      <div className="book-img">
        <img src="https://cf-assets1.tenlong.com.tw/images/32306/medium/9867794524.jpg"/>
      </div>
      <div className="book-info">
        <div className="book-info-name">深入淺出設計模式 (Head First Design Patterns)</div>
        <div className="book-info-originprice">原價：NT 800</div>
        <div className="book-info-sellprice">特價：NT 695</div>
        <div className="book-info-isbn">ISBN：9789867794529</div>
        <a className="book-info-more" href="https://www.tenlong.com.tw/products/9789867794529">Read more</a>
      </div>
    </div>
    <div className="book">
      <div className="book-img">
        <img src="https://cf-assets1.tenlong.com.tw/images/30777/medium/9867794737.jpg"/>
      </div>
      <div className="book-info">
        <div className="book-info-name">Linux 驅動程式, 3/e (Linux Device Drivers, 3/e)</div>
        <div className="book-info-originprice">原價：NT 800</div>
        <div className="book-info-sellprice">特價：NT 695</div>
        <div className="book-info-isbn">ISBN：9789867794529</div>
        <a className="book-info-more" href="https://www.tenlong.com.tw/products/9789867794529">Read more</a>
      </div>
    </div>
    <div className="book">
      <div className="book-img">
        <img src="https://cf-assets1.tenlong.com.tw/images/49583/medium/9789866761799.jpg"/>
      </div>
      <div className="book-info">
        <div className="book-info-name">大話設計模式</div>
        <div className="book-info-originprice">原價：NT 800</div>
        <div className="book-info-sellprice">特價：NT 695</div>
        <div className="book-info-isbn">ISBN：9789867794529</div>
        <a className="book-info-more" href="https://www.tenlong.com.tw/products/9789867794529">Read more</a>
      </div>
    </div>
  </section>);
}

export default MainBooks;
