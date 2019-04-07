import { BehaviorSubject } from 'rxjs';
import { BookInformation } from '../models/books-api';
export const books$ = new BehaviorSubject<BookInformation[]>([]);