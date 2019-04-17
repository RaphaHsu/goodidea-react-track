import React from "react";

const productsComponent = ({ searchItems }) => {
  let result = "";
  if (searchItems.length === 0) {
    result = <div>Sorry！We couldn't find it!</div>;
  } else {
    result = searchItems.map(book => (
      <div className="col col-lg-3">
        <a href={book.link} key={book.ISBN}>
          <div className="card">
            <img className="card-img-top" src={book.image} />
            <div className="card-body">
              <h5 className="card-title">{book.name}</h5>
              <div className="card-text">原價：NT {book.originPrice}</div>
              <div className="card-text">特價：NT{book.sellPrice}</div>
              <div className="card-text">ISBN：{book.ISBN}</div>
            </div>
          </div>
        </a>
      </div>
    ));
  }
  return result;
};
export default productsComponent;
