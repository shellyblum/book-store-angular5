import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  books: Book[];

  constructor(private bookService: BookService) {}
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }
  ngOnInit() {
    this.getBooks();
  }
  delete(book: Book): void {
    if(!confirm("Are you sure?")) { 
      return; 
    }else{
      this.books = this.books.filter(b => b !== book);
      this.bookService.deleteBook(book).subscribe();
    }
  }
}
