import React, {Component} from 'react';
import Header from './Header';
import Book from './Book';
import Paging from './Paging';
import Search from './Search';

export default class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenlongBookDatas: [],
      searchOfItems: [],
      pageOfItems: [],
      status: false,
      pagingAction: ''
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

  onPagingChangeAction = (pagingAction) => {
    this.setState({
      pagingAction
    });
  }

  showBookDatas = (pageOfItems, direction) => {
    if (direction === 'backward') {
      return pageOfItems.map((element, index) => (
        <Book
          image={element.image}
          name={element.name}
          originPrice={element.originPrice}
          sellPrice={element.sellPrice}
          link={element.link}
          ISBN={element.ISBN}
          key={element.ISBN}
          delay={`${((index + (pageOfItems.length - (index + (index - 1)))) * 0.05)}s`}
        />
      ));
    }
    return pageOfItems.map((element, index) => (
      <Book
        image={element.image}
        name={element.name}
        originPrice={element.originPrice}
        sellPrice={element.sellPrice}
        link={element.link}
        ISBN={element.ISBN}
        key={element.ISBN}
        delay={`${index * 0.05}s`}
      />
    ));
  }

  componentDidMount() {
    this.getTenlongBookDatas();
  }

  render() {
    const {
      tenlongBookDatas, searchOfItems, pageOfItems, status, pagingAction
    } = this.state;
    return (
      <React.Fragment>
        <Header>
          <div className="search">
            <Search books={tenlongBookDatas} onChangeSearch={this.onSearchData} />
          </div>
        </Header>
        <div className="books-block">
          <div className="books">
            { (status === true && pageOfItems.length === 0) ? <p>Not Found!</p> : this.showBookDatas(pageOfItems, pagingAction)}
          </div>
        </div>
        <div className="paging">
          <Paging books={searchOfItems} onChangePage={this.onPagingData} onChangeAction={this.onPagingChangeAction} />
        </div>
      </React.Fragment>
    );
  }
}
