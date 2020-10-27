import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { MovieListService } from 'src/app/services/movie-list.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchBox: EventEmitter<any> = new EventEmitter<any> ();
  modalRef: BsModalRef;
  searchValue:any;
  newReCord: any={
    userId: null,
    id: null,
    title: null,
    completed: true
  }
  constructor(private modalService: BsModalService ,private movieDataService: MovieListService) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  searchMovie() {
    this.searchBox.emit(this.searchValue);
  }
  addNewMovie(){
    this.newReCord = {userId:this.newReCord.userId, id:201, title:this.newReCord.title, complated: this.newReCord.completed};
    //let convertString = JSON.stringify(this.newReCord);
    this.movieDataService.setMoviesList(this.newReCord).subscribe(response => {
      console.log(response);
      
    });;
  }
}
