import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
export interface BookSearchResponse {
  docs: any[];
  numFound: number;
}
@Injectable({
  providedIn: 'root'
})


export class BooksService {
  baseUrl = 'https://openlibrary.org/';

  constructor(private http: HttpClient) {}

  
  searchBooks(query: string, offset: number, limit: number): Observable<BookSearchResponse> {
    return this.http.get<BookSearchResponse>(`https://openlibrary.org/search.json?q=${query}&offset=${offset}&limit=${limit}`);
  }

  getSubjects(subject: string, offset = 0, limit = 10) {
    const url = `${this.baseUrl}subjects/${subject}.json?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(map(res => res));
  }
}
