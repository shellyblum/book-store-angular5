import { Component, OnInit } from '@angular/core';
import { Book } from '../models/Book';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { BookService }  from '../book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  form: FormGroup;
  books: any;
  book: Book = new Book();
  constructor(
    private bookService: BookService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.books = this.bookService.getBooks(),
    this.form = this.formBuilder.group({
      author: [null, [Validators.required, Validators.pattern("[a-zA-Z0-9_.-]*")]],
      title: [null, [Validators.required, Validators.minLength(8)]],
      src: [null, [Validators.required]],
      date: [null, [Validators.required]],
    });
  }
  add(): void {
   console.log(this.form.value);
   this.book = this.form.value;
    this.bookService.addBook(this.book)
      .subscribe(book => {
        console.log(book)
        this.books = this.bookService.getBooks(),
        console.log(this.books)
      });
  }
}
