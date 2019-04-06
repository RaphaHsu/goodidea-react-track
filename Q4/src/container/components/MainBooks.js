import React, {Component} from "react";
import "../../styles/mainbooks.scss";

const MainBooks = ({bookData}) => {
  let bookList = "";
  if (bookData.length == 0) {
    bookList = <section className="mainbooks">
      <div className="loading">
      <div className="line"></div>
      <div className="line"></div>
      <div className="line"></div>
    </div>
    </section>
    return bookList
  }else {
    bookList = bookData.map(book => {
      return (<a href={book.link} className="book" key={book.ISBN}>
        <div className="book-img">
          <img src={book.image}/>
        </div>
        <div className="book-info">
          <div className="book-info-name">{book.name}</div>
          <div className="book-info-originprice">原價：NT {book.originPrice}</div>
          <div className="book-info-sellprice">特價：NT{book.sellPrice}</div>
          <div className="book-info-isbn">ISBN：{book.ISBN}</div>
          <a className="book-info-more" href={book.link}>Read more</a>
        </div>
      </a>)
    })
  }
  return (<section className="mainbooks container">
    {bookList}
  </section>);
}

export default MainBooks;
