import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BookSearchResponse } from '../books.service';


@Component({
  selector: 'app-subject-books',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th>Author</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let book of books">
          <td>{{book.author_name}}</td>
          <td>{{book.title}}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: []
})
export class SubjectBooksComponent implements OnInit {
  books: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const subject = params['subject'];
      this.http.get<BookSearchResponse>(`https://openlibrary.org/search.json?subject=${subject}&limit=10`).subscribe(response => {
        this.books = response.docs;
      });
    });
  }

  getBooksForSubject(subject: string) {
    this.http.get(`http://openlibrary.org/subjects/${subject}.json?limit=10`)
      .subscribe((data: any) => {
        this.books = data.works;
      });
  }
}
