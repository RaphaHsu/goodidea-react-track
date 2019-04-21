import ReactDOM from 'react-dom';
import React from 'react';

import '../assets/css/Book.css'

function Book(props) {
  function isSell() {
    return (props.data.originPrice !== props.data.sellPrice)
  }

  function discount() {
    const origin = (typeof props.data.originPrice === 'string') && props.data.originPrice.replace(",", "")
    const sell = (typeof props.data.originPrice === 'string') && props.data.sellPrice.replace(",", "")
    return (parseInt(sell)/parseInt(origin) * 100).toFixed(0)
  }



  return (<div className="book">
    <a href={props.data.link} target="_blank">
      <div className="name">{props.data.name}</div>
      <img src={props.data.image} alt="" />
      <div className="price">
        <div className="isbn">{props.data.ISBN}</div>
        <span className={isSell()
            ? 'delete-me'
            : "hidden"}>{props.data.originPrice}元
        </span>
        <span className={isSell()
            ? ''
            : "hidden"}>({discount()}折)</span>
        <div className="sell-price">{props.data.sellPrice}元</div>
      </div>
      </a>
    </div>)
}

export default Book
