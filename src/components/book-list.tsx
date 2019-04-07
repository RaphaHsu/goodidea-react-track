import * as React from 'react';
import { booksWithFilter$ } from '../services/books.service';
import { useObservable } from 'rxjs-hooks';
import BookInfo from './book-info';
import '../styles/_book-list.scss';

const BookListComponent = ({}) => {
  const books = useObservable(() => booksWithFilter$);
  if (books == null || books.length === 0) {
    return <div>No books found</div>;
  }
  return (
    <div
      className="book-list"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {books.map((b, i) => (
        <div className="book-card" key={i}>
          <BookInfo data={b} />
        </div>
      ))}
    </div>
  );
};

export default BookListComponent;
