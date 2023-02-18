import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';


@Component({
selector: 'app-popular-subjects',
templateUrl: './popular-subjects.component.html',
styleUrls: ['./popular-subjects.component.css']
})
export class PopularSubjectsComponent implements OnInit {

books = [];
subject: string='';
offset: number=0;
totalPages: number=0;
currentPage: number=0;
subjects: string[] = [];

constructor(private route: ActivatedRoute, private http: HttpClient) { }

ngOnInit(): void {
this.route.params.subscribe(params => {
this.subject = params['subject'];
this.offset = parseInt(params['offset'], 10);
});
this.http.get(`https://openlibrary.org/subjects/${this.subject}.json?offset=${this.offset}&limit=10`)
  .subscribe((response: any) => {
    this.books = response.works;
    this.totalPages = Math.ceil(response.works.length / 10);
    this.currentPage = Math.floor(this.offset / 10) + 1;
  });
}

getPrevPage(): void {
if (this.offset >= 10) {
this.offset -= 10;
}
}

getNextPage(): void {
if (this.offset + 10 < this.totalPages * 10) {
this.offset += 10;
}
}



}