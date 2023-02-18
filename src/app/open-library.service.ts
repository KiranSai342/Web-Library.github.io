import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OpenLibraryService {
  private baseUrl = 'http://openlibrary.org';

  constructor(private http: HttpClient) {}

  searchBooks(query: string, offset: number, limit: number): Observable<any> {
    const url = `${this.baseUrl}/search.json?q=${query}&limit=${limit}&offset=${offset}`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const books = res.docs.map((doc: any) => ({
          id: doc.key.split('/').pop(),
          title: doc.title,
          author: doc.author_name?.join(', ') || 'Unknown',
          first_publish_year: doc.first_publish_year,
        }));
        const numFound = res.numFound;
        return { books, numFound };
      })
    );
  }

  getBooksBySubject(subject: string): Observable<any> {
    const url = `${this.baseUrl}/subjects/${subject}.json?limit=10`;

    return this.http.get(url).pipe(
      map((res: any) => {
        const books = res.works?.map((work: any) => ({
          id: work.cover_edition_key,
          title: work.title,
          author: work.authors?.map((author: any) => author.name).join(', ') || 'Unknown',
          first_publish_year: work.first_publish_year,
        }));
        const numFound = res.works_count;
        return { books, numFound };
      })
    );
  }

  getTrendingSubjects(): Observable<string[]> {
    const url = `${this.baseUrl}/subjects.json?limit=5`;

    return this.http.get(url).pipe(
      map((res: any) => {
        return res.slice(0, 5);
      })
    );
  }
}
