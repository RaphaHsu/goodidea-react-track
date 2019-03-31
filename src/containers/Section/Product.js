import React from 'react';
import PropTypes from 'prop-types';

const Product = ({url, alt}) => (
  <div>
    <img src={url} alt={alt} />
  </div>
);
Product.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired
};

export default Product;
