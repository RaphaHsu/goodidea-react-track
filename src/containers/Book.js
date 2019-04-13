import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  image, name, originPrice, sellPrice, link, ISBN, delay
}) => (
  <React.Fragment>
    <div
      className="book-block"
      style={{
        animationDelay: delay
      }}>
      <a href={link} title={name}><img src={image} alt={name} /></a>
      <div className="information-block">
        <p className="name"><a href={link}>{`${name.substring(0, 15)}...`}</a></p>
        <p className="sell-price">NT${sellPrice}</p>
        <p className="origin-price">NT${originPrice}</p>
        <p className="isbn">ISBN：{ISBN}</p>
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
  ISBN: PropTypes.string.isRequired,
  delay: PropTypes.string.isRequired
};

export default Book;
