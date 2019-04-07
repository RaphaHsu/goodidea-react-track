import * as React from 'react';
import { BooksApiResponse } from '../models/books-api';
import BookList from './book-list';
import {
  books$,
  booksLoadCount$,
  booksFilter$,
} from '../services/books.service';
import TextField from '@material-ui/core/TextField';

interface BooksearchState {
  filter: string;
}
export default class BookSearchComponent extends React.Component<
  {},
  BooksearchState
> {
  private bookListDom = React.createRef<HTMLDivElement>();
  constructor(props: BooksearchState) {
    super(props);
    this.state = {
      filter: '',
    };
  }
  public componentDidMount() {
    if (this.bookListDom.current) {
      this.bookListDom.current.onscroll = () => {
        if (this.bookListDom.current) {
          const dom = this.bookListDom.current;
          const scroll = dom.scrollTop + dom.clientHeight;
          if (scroll + 100 > dom.scrollHeight) {
            this.loadMore();
          }
        }
      };
    }
    this.fetchData();
  }

  public render() {
    return (
      <div
        style={{
          background: '#eeeeee',
          padding: 10,
          fontSize: 20,
          height: 'calc(100% - 20px)',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div>好想天瓏書單</div>
        <TextField
          label="ISBN / Title"
          value={this.state.filter}
          onChange={this.handleChange}
          margin="normal"
        />
        <div
          ref={this.bookListDom}
          style={{ flex: '1 1 0', width: '100%', overflowY: 'scroll' }}
        >
          <BookList />
        </div>
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
  private loadMore() {
    const current = booksLoadCount$.getValue();
    if (current < books$.getValue().length) {
      booksLoadCount$.next(current + 20);
    }
  }
  private handleChange = (event: any) => {
    this.setState({ filter: event.target.value });
    booksFilter$.next(event.target.value);
  };
}
