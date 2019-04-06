import React, {Component} from 'react';
import Book from './Book';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tenlongBookDatas: []
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

  componentDidMount() {
    this.getTenlongBookDatas();
  }

  render() {
    const {tenlongBookDatas} = this.state;
    return (
      <React.Fragment>
        {tenlongBookDatas.map(element => (
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
      </React.Fragment>
    );
  }
}
