import React from 'react';
import ReactDOM from 'react-dom';
import bag from '../image/bag.png'

let navList = ['Home','Shop','Sale','Customer Care','Stockists']
let navListRender = navList.map(item=> <li key={item}>{item}</li>)

export default function(){
  return (
    <nav>
      <div className='navBarContainer'>
        <ul>
          <li className='logo'>
            PRETTY GAL
          </li>
          {navListRender}
          <li>
            <img src={bag}/>
          </li>
        </ul>
      </div>
    </nav>
  )
}
