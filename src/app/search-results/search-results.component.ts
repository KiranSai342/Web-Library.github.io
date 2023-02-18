import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-search-results',
templateUrl: './search-results.component.html',
styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit {

books = [];
keyword: string='';
offset: number=0;
totalPages: number=0;
currentPage: number=0;

constructor(private route: ActivatedRoute, private http: HttpClient) { }

ngOnInit(): void {
this.route.params.subscribe(params => {
this.keyword = params['keyword'];
this.offset = parseInt(params['offset'], 10);
});
this.http.get(`https://openlibrary.org/search.json?q=${this.keyword}&offset=${this.offset}&limit=10`)
  .subscribe((response: any) => {
    this.books = response.docs;
    this.totalPages = Math.ceil(response.numFound / 10);
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