import { Component, OnInit, Input } from '@angular/core';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  message: string;
  @Input() moviesList: any;
  constructor(private movieDataService: MovieListService) { }

  ngOnInit(): void {
   
  }

}
