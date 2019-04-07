import * as React from 'react';
import { books$ } from '../services/books.service';
import { useObservable } from 'rxjs-hooks';
import BookInfo from './book-info';

const BookListComponent = ({}) => {
  const books = useObservable(() => books$);
  if (books == null) {
    return <div>No books found</div>;
  }
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
      }}
    >
      {books.map((b, i) => (
        <div
          key={i}
          style={{
            width: 300,
            margin: 10,
          }}
        >
          <BookInfo data={b} />
        </div>
      ))}
    </div>
  );
};

export default BookListComponent;
