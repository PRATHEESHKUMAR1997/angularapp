import { Component, EventEmitter, Input, OnInit, SimpleChange } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() passedSearchValue: any;
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
    if (e >= 1) {
      this.filterdData = this.moviesListData.filter(movie => movie.userId === e)
    } else {
      this.filterdData = this.moviesListData;
    }
    this.totalCount = this.filterdData.length;
  }
  shortData(sortBy) {
    switch (sortBy.sortBy) {
      case 1:
        this.filterdData.sort((a, b) => {

          let textA = a.title.toUpperCase();
          let textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        break;
      case 2:
        this.filterdData.reverse((a, b) => {

          let textA = a.title.toUpperCase();
          let textB = b.title.toUpperCase();
          return (textA < textB) ? -1 : (textA > textB) ? 1 : 0;
        });
        break;
      case 3:
        this.filterdData.sort((a, b) => a.id - b.id);
        break;
      case 4:
        this.filterdData.sort((a, b) => b.id - a.id);
        break;
      default:
        this.filterdData.sort((a, b) => a.id - b.id);
        break;
    }
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngOnChanges(changes: SimpleChange) {
    if (this.passedSearchValue) {
      this.filterdData = this.moviesListData.filter(movie => movie.title.includes(this.passedSearchValue));
      this.totalCount = this.filterdData.length;
    }

  }
}


