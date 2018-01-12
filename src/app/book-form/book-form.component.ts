import { Component, OnInit } from '@angular/core';
import { Book } from '../book.model';
@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  model= new Book (1, 'Stan Lee', 'The Amazing Spiderman', "https://www.stanleecomics/AmazingSpiderman");

  constructor() { }

  ngOnInit() {
  }

  get currentBook() {
    return JSON.stringify(this.model);
  }
}
