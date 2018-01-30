import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
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
    let response = prompt('Are you sure you want to delete? Y/N');
    if(response === 'n' || response === 'N') { 
      return; 
    }else{
      this.books = this.books.filter(b => b !== book);
      this.bookService.deleteBook(book).subscribe();
    }
  }
}
