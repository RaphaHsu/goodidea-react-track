import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { BookInformation } from '../models/books-api';
export const books$ = new BehaviorSubject<BookInformation[]>([]);
export const booksLoadCount$ = new BehaviorSubject<number>(30);

export const booksWithFilter$ = combineLatest(books$, booksLoadCount$).pipe(
  map(x => x[0].slice(0, x[1]))
);
