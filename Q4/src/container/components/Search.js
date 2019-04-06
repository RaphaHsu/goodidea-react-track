import React, {Component} from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import "../../styles/search.scss";

const Search = (Props) => {
  return (<section className="search container">
    <form className="search-form">
      <label>Book search</label>
      <input placeholder="請輸入書名" onChange={(e)=>{Props.searchBook(e)}}></input>
      <span><FontAwesomeIcon icon={['fas', 'search']} size="2x"/></span>
    </form>
  </section>);
}

export default Search;
