import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  constructor(private http: HttpClient) { }

  getMoviesList() {
   return this.http.get('https://jsonplaceholder.typicode.com/todos');
  }
}
