import { Component, OnInit } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  moviesListData: any;
  filterdData: any;
  totalCount: any;
  constructor(private movieDataService: MovieListService) { }

  ngOnInit(): void {
    this.movieDataService.getMoviesList().subscribe(Response => {
      this.moviesListData = Response;
      this.loadTabData('');
    });
  }

  loadTabData(e) {
    this.filterdData = e >= 1 ? this.filterdData = this.moviesListData.filter(movie => movie.userId === e) : this.filterdData = this.moviesListData;
    this.totalCount = this.filterdData.length;
  }
  shortData() {
    this.filterdData.sort();
  }
}


