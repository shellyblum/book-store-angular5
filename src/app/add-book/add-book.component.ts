import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService }  from '../book.service';
import { Location } from '@angular/common';
// import { InMemoryDbService } from 'angular-in-memory-web-api';
import { BooksComponent } from '../books/books.component'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  // books = BooksComponent
  books: Book[] = [];

  constructor(
    // private books: BooksComponent[],
    private bookService: BookService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  goBack(): void {
    this.location.back();
  }
  add(title: string): void {
    title = title.trim();
    if (!title) { return; }
    this.bookService.addBook({ title } as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
}
