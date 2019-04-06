import React, {Component} from 'react';

// https://bookshelf.goodideas-studio.com/api

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
          <React.Fragment>
            <img key={element.name} src={element.image} alt={element.name} />
          </React.Fragment>
        ))}
      </React.Fragment>
    );
  }
  }
