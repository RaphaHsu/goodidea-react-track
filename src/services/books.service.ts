import { BehaviorSubject, combineLatest } from 'rxjs';
import { map, throttleTime, debounceTime } from 'rxjs/operators';
import { BookInformation } from '../models/books-api';
export const books$ = new BehaviorSubject<BookInformation[]>([]);
export const booksLoadCount$ = new BehaviorSubject<number>(30);
export const booksFilter$ = new BehaviorSubject<string>('');
const bookFilterDelay$ = booksFilter$.pipe(debounceTime(200));

const isPassFileter = (b: BookInformation, f: string): boolean => {
  return b.ISBN.includes(f) || b.name.toUpperCase().includes(f.toUpperCase());
};
export const booksWithFilter$ = combineLatest(
  books$,
  booksLoadCount$,
  bookFilterDelay$
).pipe(map(x => x[0].filter(b => isPassFileter(b, x[2])).slice(0, x[1])));
