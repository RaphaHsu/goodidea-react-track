import React from 'react';
import PropTypes from 'prop-types';

const Book = ({
  image, name, originPrice, sellPrice, link, ISBN
}) => (
  <React.Fragment>
    <img src={image} alt={name} />
    <a href={link}>{name}</a>
    <p>原始價位：{originPrice}</p>
    <p>打折價位：{sellPrice}</p>
    <p>ISBN：{ISBN}</p>
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
