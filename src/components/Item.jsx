import * as React from 'react';
const ItemComponent = ({ image }) => {
  return <div className="item m-8">
    <img src={image} />
  </div>
}
export default ItemComponent;