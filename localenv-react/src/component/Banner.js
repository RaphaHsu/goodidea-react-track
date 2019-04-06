import React from 'react';
import ReactDOM from 'react-dom';
import cover from '../image/cover.jpg';
export default function(){
  return (
    <div className="banner">
      <img src={cover}/>
      <div className="slogan">
        <h1>FALL & WINTER</h1>
        <button>Shop Now</button>
      </div>
      <div className="shipping">
        FREE SHIPPING WORLWIDE
      </div>
    </div>
  )
}
