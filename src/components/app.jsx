import * as React from 'react';
import { hot } from 'react-hot-loader/root'
import Header from './header';
import Media from './media';
import Slogan from './slogan';
import Item from './Item';
import Footer from './footer';
import Item1 from '../images/left.png';
import Item2 from '../images/middle.png';
import Item3 from '../images/right.png';
const itemList = [Item1, Item2, Item3];
const AppComponent = () => {
  return <div>
    <Header />
    <Media />
    <Slogan />
    <div className="my-20" style={{ display: 'flex', justifyContent: 'center' }}>
      {itemList.map((x, i) => <Item key={i} image={x} />)}
    </div>
    <Footer />
  </div>
}
export default hot(AppComponent);