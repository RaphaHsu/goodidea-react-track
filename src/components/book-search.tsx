import * as React from 'react';
import { BooksApiResponse } from '../models/books-api';
import BookList from './book-list';
import { books$ } from '../services/books.service';

export default class BookSearchComponent extends React.Component {
  public componentDidMount() {
    this.fetchData();
  }

  public render() {
    return (
      <div>
        <BookList />
      </div>
    );
  }
  private async fetchData() {
    try {
      const res = await fetch('https://bookshelf.goodideas-studio.com/api');
      const result = (await res.json()) as BooksApiResponse;
      books$.next(result.list);
    } catch (e) {
      console.error(e);
    }
  }
}
