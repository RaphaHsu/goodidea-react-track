import React from "react";

const productsComponent = ({ searchItems }) => {
  let result = "";
  if (searchItems.length === 0) {
    result = <h3 className="text-white">Sorry！We couldn't find it...</h3>;
  } else {
    result = searchItems.map(book => (
      <div className="col-sm-6 col-md-4 col-lg-3 items" key={book.ISBN}>
        <a href={book.link}>
          <div className="card">
            <img className="card-img-top" src={book.image} />
            <div className="card-body">
              <h5 className="card-title book-title">{book.name}</h5>
              <h6 className="sellPrice text-success">
                NT{book.sellPrice}
                <small className="originPrice text-secondary">NT {book.originPrice}</small>
              </h6>
              <p className="card-text text-dark">ISBN：{book.ISBN}</p>
            </div>
          </div>
        </a>
      </div>
    ));
  }
  return result;
};
export default productsComponent;
