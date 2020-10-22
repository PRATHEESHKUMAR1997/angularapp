import { Component, EventEmitter, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @Output() selectedIndex: EventEmitter<any> = new EventEmitter<any> ();
  @Output() sortDataCall: EventEmitter<any> = new EventEmitter<any> ();
  index = 0;
  menu = [
    { text: 'ALL' },
    { text: 'DOCUMENTARY' },
    { text: 'COMEDY' },
    { text: 'HORROR' },
    { text: 'CRIME' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  tabClick(index) {
    this.selectedIndex.emit(index);
    this.index = index;
  }
  sortData(sortBy){
    this.sortDataCall.emit({sortBy});
  }
}
