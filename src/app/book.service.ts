import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './models/Book';
import { InMemoryDataService }  from './in-memory-data.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class BookService {
  books: Book[] = [];

  constructor( private http: HttpClient ) { }
  private booksUrl = 'api/books';
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); // log to console instead
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  } 
  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.booksUrl)
      .pipe(
        catchError(this.handleError('getBooks', []))
      );
  }
  getBook(id: number): Observable<Book> {
    const url = `${this.booksUrl}/${id}`;
    return this.http.get<Book>(url).pipe(
      catchError(this.handleError<Book>(`getBook id=${id}`))
    );
  }
  updateBook (book: Book): Observable<any> {
    return this.http.put(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<any>('updateBook'))
    );
  }
  addBook (book: Book): Observable<Book> {
    return this.http.post<Book>(this.booksUrl, book, httpOptions).pipe(
      catchError(this.handleError<Book>('addBook'))
    );
  }
  deleteBook (book: Book | number): Observable<Book> {
    const id = typeof book === 'number' ? book : book.id;
    const url = `${this.booksUrl}/${id}`;
    return this.http.delete<Book>(url, httpOptions).pipe(
      catchError(this.handleError<Book>('deleteBook'))
    );
  }
  searchBooks(term: string): Observable<Book[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Book[]>(`api/books/?title=${term}`).pipe(
      catchError(this.handleError<Book[]>('searchBooks', []))
    );
  }

}
