import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../styles/search.scss";

const Search = (Props) => {
  return (<section className="search">
    <form className="search-form">
      <label>Book search</label>
      <input></input>
      <span><FontAwesomeIcon icon={['fas', 'search']} size="2x"/></span>
    </form>
  </section>);
}

export default Search;
