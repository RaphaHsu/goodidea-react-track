import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  image, name, originPrice, sellPrice, link, ISBN
}) => (
  <React.Fragment>
    <div className="book-block">
      <a href={link}><img src={image} alt={name} /></a>
      <div className="information-block">
        <p className="name"><a href={link}>{name}</a></p>
        <p className="sell-price">NT${sellPrice}</p>
        <p className="origin-price">NT${originPrice}</p>
        <p>ISBN：{ISBN}</p>
      </div>
    </div>
  </React.Fragment>
);

Book.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  originPrice: PropTypes.string.isRequired,
  sellPrice: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  ISBN: PropTypes.string.isRequired
};

export default Book;
