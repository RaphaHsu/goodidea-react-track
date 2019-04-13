import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Book extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loader: false
    };
  }

  loaderComplete = () => this.setState({ loader: true});

  render() {
    const {loader} = this.state;
    const {
      image, name, originPrice, sellPrice, link, ISBN, delay
    } = this.props;
    const abbreviationName = name.substring(0, 15);

    return (
      <React.Fragment>
        <div
          className="book-block"
          style={{
            animationDelay: delay
          }}>
          <a href={link} title={name}>
            {loader ? null : <div className="loader" /> }
            <img style={loader ? {} : {display: 'none'}} src={image} alt={name} onLoad={this.loaderComplete} />
          </a>
          <div className="information-block">
            <p className="name"><a href={link}>{abbreviationName}...</a></p>
            <p className="sell-price">NT${sellPrice}</p>
            <p className="origin-price">NT${originPrice}</p>
            <p className="isbn">ISBN：{ISBN}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }

  static propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    originPrice: PropTypes.string.isRequired,
    sellPrice: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    ISBN: PropTypes.string.isRequired,
    delay: PropTypes.string.isRequired
  };
}
