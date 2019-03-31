import React from 'react';
import ReactDOM from 'react-dom';
import left from '../image/left.png';
import middle from '../image/middle.png';
import right from '../image/right.png';

export default function(){
  return (
    <div className="content">
      <div className="contentContent">
        <p className="contentTitle">
          YEAR ROUND
        </p>
        <div className="separationLine">
        </div>
        <p className="contentSubTitle">
          Must Have Items
        </p>
        <div className="contentImage">
          <img src={left}/>
          <img src={middle}/>
          <img src={right}/>
        </div>
      </div>
    </div>
  )
}
