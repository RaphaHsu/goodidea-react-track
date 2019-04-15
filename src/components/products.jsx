import React from "react";

const productsComponent = ({ searchItems }) => {
  let result = "";
  if (searchItems.length === 0) {
    result = <div>Sorry！We couldn't find it!</div>;
  } else {
    result = searchItems.map(book => (
      <a href={book.link} key={book.ISBN}>
        <div>
          <img src={book.image} />
        </div>
        <div>{book.name}</div>
        <div>原價：NT {book.originPrice}</div>
        <div>特價：NT{book.sellPrice}</div>
        <div>ISBN：{book.ISBN}</div>
      </a>
    ));
  }
  return result;
};
export default productsComponent;
