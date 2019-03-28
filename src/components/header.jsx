import * as React from 'react';
import bagImage from '../images/bag_img.png';

const HeaderComponent = () => {
  return <div className="header px-52">
    <div className="icon font-size-20">PRETTY GAL</div>
    <div>Home</div>
    <div>Shop</div>
    <div>Sale</div>
    <div>Customer Care</div>
    <div>Stockists</div>
    <img src={bagImage} alt="blue bag" />
  </div>
}
export default HeaderComponent;