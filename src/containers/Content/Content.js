import React, {Component} from 'react';
import Book from './Book';
import Paging from './Paging';
import Search from './Search';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenlongBookDatas: [],
      searchOfItems: [],
      pageOfItems: [],
      status: false
    };
  }

  getTenlongBookDatas = () => {
    fetch('https://bookshelf.goodideas-studio.com/api', {
      cache: 'no-cache',
      method: 'GET',
      mode: 'cors'
    })
    .then(response => response.json().then((data) => {
      const bookDatas = data.list;
      this.setState({
        tenlongBookDatas: bookDatas,
        searchOfItems: bookDatas,
        status: true
      });
    })).catch(err => err);
  };

  onSearchData = (searchOfItems) => {
    this.setState({
      searchOfItems
    });
  }

  onPagingData = (pageOfItems) => {
    this.setState({
      pageOfItems
    });
  }

  componentDidMount() {
    this.getTenlongBookDatas();
  }

  render() {
    const {
      tenlongBookDatas, searchOfItems, pageOfItems, status
    } = this.state;
    return (
      <React.Fragment>
        <div className="search">
          <Search books={tenlongBookDatas} onChangeSearch={this.onSearchData} />
        </div>
        <div className="paging">
          <Paging books={searchOfItems} onChangePage={this.onPagingData} />
        </div>
        <div className="books">
          { (status === true && pageOfItems.length === 0) ? <p>Not Found!</p> : pageOfItems.map(element => (
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
