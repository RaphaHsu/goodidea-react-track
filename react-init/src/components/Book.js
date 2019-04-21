import ReactDOM from 'react-dom';
import React from 'react';

import '../assets/css/book.css'

function Book(props) {
  function isSell() {
    return (props.data.originPrice !== props.data.sellPrice)
  }

  return (<div className="book">
    <a href={props.data.link} target="_blank">
      <div className="name">{props.data.name}</div>
      <img src={props.data.image} alt="" />
        <div className="price">
          <div className="isbn">{props.data.ISBN}</div>
          <span className={isSell()
              ? 'delete-me'
              : ""}>{props.data.originPrice}元</span>
          <span>(78折)</span>
          <div className="sell-price">{props.data.sellPrice}元</div>
        </div>
      </a>
    </div>)
}

export default Book
