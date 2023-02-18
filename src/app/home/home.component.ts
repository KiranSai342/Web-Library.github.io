import { Component, OnInit } from '@angular/core';
import { BooksService } from '../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  template: `<body>
    <div>
      <input type="text" [(ngModel)]="searchTerm" placeholder="Search books by title/author or subject">
      <button (click)="search()">Search</button>
      <button (click)="clearSearch()">Clear</button>
    </div>
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error loading books</div>
    <div *ngIf="books">
      <app-book-details *ngFor="let book of books" [book]="book"></app-book-details>
      <app-pagination [offset]="offset" [limit]="limit" [total]="total" (pageChange)="changePage($event)"></app-pagination>
    </div>

   

  </body>  

  `,
  styleUrls:['home.component.css']
})
export class HomeComponent implements OnInit {
  searchTerm = '';
  books: any[] = [];
  loading = false;
  error = false;
  offset = 0;
  limit = 10;
  total = 0;
  

  constructor(private booksService: BooksService, private router:Router) {}
  subjects = [' *History* ',
  ' *Fantasy* ',
  ' *Horror* ', 
  ' *Thriller* ', 
  ' *Majic* '];

  ngOnInit() {}

  search() {
    this.loading = true;
    this.error = false;
    this.books = []; // clear previous search results
    this.booksService.searchBooks(this.searchTerm, this.offset, this.limit)
      .subscribe(res => {
        this.loading = false;
        this.books = res.docs;
        this.total = res.numFound;
      }, err => {
        this.loading = false;
        this.error = true;
      });
  }

  goToSubject(subject: string) {
    this.router.navigate(['/subject', subject]);
  }

  clearSearch() {
    this.searchTerm = '';
    this.books = [];
  }

  changePage(offset: number) {
    this.offset = offset;
    this.search();
}
}