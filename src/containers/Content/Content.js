import React, {Component} from 'react';
import Book from './Book';
import Paging from './Paging';
import Search from './Search';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenlongBookDatas: [],
      pageOfItems: []
    };
  }

  getTenlongBookDatas = () => {
     fetch('https://bookshelf.goodideas-studio.com/api', {
      cache: 'no-cache',
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json().then((data) => {
      this.setState({
        tenlongBookDatas: data.list
      });
    })).catch(err => err);
  };

  onChangeData = (pageOfItems) => {
    this.setState({
      pageOfItems
    });
  }

  componentDidMount() {
    this.getTenlongBookDatas();
  }

  render() {
    const {tenlongBookDatas, pageOfItems} = this.state;
    return (
      <React.Fragment>
        <div className="search">
          <Search books={tenlongBookDatas} onChangeSearch={this.onChangeData} />
        </div>
        <div className="paging">
          <Paging books={tenlongBookDatas} onChangePage={this.onChangeData} />
        </div>
        <div className="books">
          { pageOfItems.length === 0 ? <p>Not Found!</p> : pageOfItems.map(element => (
            <Book
              image={element.image}
              name={element.name}
              originPrice={element.originPrice}
              sellPrice={element.sellPrice}
              link={element.link}
              ISBN={element.ISBN}
              key={element.ISBN}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}
