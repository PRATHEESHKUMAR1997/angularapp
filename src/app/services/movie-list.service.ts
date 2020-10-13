import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieListService {
  moviesData: any;
  constructor(private http: HttpClient) { }

  getMoviesList() {
    this.http.get('https://jsonplaceholder.typicode.com/todos').subscribe(Response => {
        this.moviesData = Response;
        return this.moviesData;
    });
  }
}
