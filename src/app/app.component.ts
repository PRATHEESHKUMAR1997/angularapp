import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() callSearchFun: EventEmitter<any> = new EventEmitter<any> ();
  searchInputValue;
  title = 'my-app';

  passSearchValue(val){
    this.searchInputValue = val;
  }
}
