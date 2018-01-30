import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { BookService }  from '../book.service';
// import { BooksComponent } from '../books/books.component'

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  books: Book[];

  constructor(
    private bookService: BookService  
  ) { }

  ngOnInit() {
  }
  add(author: string,date: string, title: string, image: string): void {
    author = author.trim();
    title = title.trim();
    image = image.trim();
    if (!author || !date || !title || !image) { return; }
    this.bookService.addBook({title} as Book)
      .subscribe(book => {
        this.books.push(book);
      });
  }
}
