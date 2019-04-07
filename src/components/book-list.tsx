import * as React from 'react';
import { books$ } from '../services/books.service';
import { useObservable } from 'rxjs-hooks';

const BookListComponent = ({}) => {
  const books = useObservable(() => books$);
  if (books == null) {
    return <div>Not books found</div>;
  }
  return (
    <div>
      {books.map((b, i) => (
        <div key={i}>{b.name}</div>
      ))}
    </div>
  );
};

export default BookListComponent;
