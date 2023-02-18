import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { BookSearchResponse, BooksService } from './books.service';
import { Book } from './book';

@Component({
  selector: 'app-root',
  template:` <body>   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"><h1><b>Library App</b></h1></a>
  
  <div class="collapse navbar-collapse" id="navbarNav">
   
    <div class="subjects-container">
    <h4>Trending Subjects:</h4>
    <button (click)="onHistoryClick()">History</button>
    <button (click)="onFantasyClick()">Fantasy</button>
    <button (click)="onHorrorClick()">Horror</button>
    <button (click)="onThrillerClick()">Thriller</button>
    <button (click)="onMajicClick()">Majic</button>

  </div>
  

  <a href="" ><b> Back to Home </b></a>
 
    
  </div>
</nav>
<div class="row mt-3">
    <div class="col-12">
      <router-outlet></router-outlet>
      <div class="text-center" *ngIf="searchInProgress">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    </div>
</div>

</body>`,
 styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Library';
  searchTerm: string ='';
  subjects = [' *History* ',
   ' *Fantasy* ',
   ' *Horror* ', 
   ' *Thriller* ', 
   ' *Majic* '];
  query: string='';
  offset: number = 0;
  limit: number = 10;
  books: any[] = [];
  searchInProgress: boolean = false;
  searchKey = '';
  
  loading = false;
  error = false;
  
  total = 0;
   BASE_URL = 'http://openlibrary.org/';
  
  constructor(private http: HttpClient, private router: Router, private booksService: BooksService) {}
  onHistoryClick() {
    this.router.navigate(['/History']);
    this.searchKey = 'history';
    this.searchBooks(this.searchKey,this.offset,this.limit);
  }
  onFantasyClick(){
    this.router.navigate(['/Fantasy']);
    this.searchKey = 'fantasy';
    this.searchBooks(this.searchKey,this.offset,this.limit);

  }
  onHorrorClick(){
    this.router.navigate(['/Horror']);
    this.searchKey = 'horror';
    this.searchBooks(this.searchKey,this.offset,this.limit);
  }
  onThrillerClick(){
    this.router.navigate(['/Thriller']);
    this.searchKey = 'thriller';
    this.searchBooks(this.searchKey,this.offset,this.limit);
  }
  onMajicClick(){
    this.router.navigate(['/Majic']);
    this.searchKey = 'majic';
    this.searchBooks(this.searchKey,this.offset,this.limit);
  }
  
  searchBooks(query: string, offset: number, limit: number): Observable<BookSearchResponse> {
    return this.http.get<BookSearchResponse>(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${limit}`);
  }

  
  

  subjectSelected(subject: string) {
    this.router.navigate([`/subject/${subject}`], { state: { subject } });
  }
    }



