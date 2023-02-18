
import { HttpClient } from '@angular/common/http';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';



@Component({
selector: 'app-pagination',
template: `<div *ngIf="total > limit"> 
<button (click)="previousPage()" [disabled]="offset === 0">Previous</button>
<button (click)="nextPage()" [disabled]="offset + limit >= total">Next</button>
<div style="text-align: center;">
<footer>
  <p >Copyright &copy; {{currentYear}}</p> 
  </footer>
</div> 
</div>

`,
styles :[`footer {

  bottom: 0;
  width: 100%;
  height: 30px; /* Height of the footer */
  background-color: #add8e6;
  
}`]

})

export class PaginationComponent {
@Input() offset: number=0;
@Input() limit: number=0;
@Input() total: number=0;
@Output() pageChange = new EventEmitter<number>();

currentYear = new Date().getFullYear();
  books=[];
  searchInProgress: boolean = false;

  constructor(private http: HttpClient, private router: Router) {}

previousPage() {
this.pageChange.emit(this.offset - this.limit);
}

nextPage() {
  this.books = [];
  this.searchInProgress = true;
this.pageChange.emit(this.offset + this.limit);



}
}