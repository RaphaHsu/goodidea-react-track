import React, { Component } from "react"
import Card from 'react-bootstrap/Card'
import "../styles/BooksDisplay.scss"

const BooksDisplay = ({ BooksData }) => {

  if (BooksData.length === 0) {
    return (
      <div className="loader-container">
        <div className="loader-group">
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
          <div className="loader-bar"></div>
        </div>
        <div>Loading...</div>
      </div>
    )
  } else if (BooksData[0] === "查無資料") {
    return (
      <section className="unfound-container">
        <div className="unfound">抱歉，你搜尋的關鍵字查無書籍
        </div>
        <div>請試試輸入其他關鍵字</div>
      </section>
    )
  } else {
    return (
      <section>
        <div className="data-result">共有{BooksData.length}筆結果</div>
        <div className="display-container">
          {BooksData.map((book, index) => (
            <Card key={book.name} className="book">
              <div className="book-image-container">
                <Card.Img variant="top" src={book.image} />
              </div>
              <Card.Body className="book-info">
                <Card.Title className="book-info-bookname">{book.name}</Card.Title>
                <Card.Text className="book-info-ISBN">
                  ISBN： {book.ISBN}
                </Card.Text>
                <Card.Text className="book-info-originprice">
                  原價：NT {book.originPrice}
                </Card.Text>
                <Card.Text className="book-info-sellprice">
                  特價：NT {book.sellPrice}
                </Card.Text>
                <a className="book-info-more" href={book.link}>詳細資訊</a>
              </Card.Body>
            </Card>
          ))}
        </div>
      </section>
    )
  }
}

export default BooksDisplay