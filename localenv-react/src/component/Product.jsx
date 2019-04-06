import React from 'react';
import ReactDOM from 'react-dom';
import left from '../image/left.png';
import middle from '../image/middle.png';
import right from '../image/right.png';

export default function(){
  return (
    <div className="product">
        <h1>
          YEAR ROUND
        </h1>
        <h2>
          Must Have Items
        </h2>
        <div className="productShowcase">
          <img src={left}/>
          <img src={middle}/>
          <img src={right}/>
        </div>
    </div>
  )
}
