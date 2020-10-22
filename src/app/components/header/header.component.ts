import { Component, EventEmitter, OnInit, Output, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchBox: EventEmitter<any> = new EventEmitter<any> ();
  modalRef: BsModalRef;
  searchValue;
  constructor(private modalService: BsModalService ) { }

  ngOnInit(): void {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  searchMovie() {
    this.searchBox.emit(this.searchValue);
  }
}
