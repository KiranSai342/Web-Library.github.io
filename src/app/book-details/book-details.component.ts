import { Component, Input } from '@angular/core';

@Component({
selector: 'app-book-details',
template: `<div> <h3>{{book.title}}</h3> <p>Author: {{book.author_name}}</p> <p>Subject: {{book.subject}}</p> </div>` })
export class BookDetailsComponent {
@Input() book: any;
}