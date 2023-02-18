import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BooksService } from '../books.service';

@Component({
  selector: 'app-majic',
  template :`<body>
    <button (click)=search()> Click to View Top  Trending Books on Majic</button>
    <div *ngIf="loading">Loading...</div>
    <div *ngIf="error">Error loading books</div>
    <div *ngIf="books">
      <app-book-details *ngFor="let book of books" [book]="book"></app-book-details>
      <app-pagination [offset]="offset" [limit]="limit" [total]="total" (pageChange)="changePage($event)"></app-pagination>
    </div>

   

  </body>  `,
  styleUrls: ['./majic.component.css']
})
export class MajicComponent implements OnInit {
  searchTerm = 'Majic';
  books: any[] = [];
  loading = false;
  error = false;
  offset = 0;
  limit = 10;
  total = 0;
  

  constructor(private booksService: BooksService, private router:Router) {}
  

  ngOnInit() {
  }
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
