import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pages;
  @Output() pageChange = new EventEmitter();
  activePage = 1;
  totalPages = null;
  constructor() { }

  ngOnInit(): void {
    this.totalPages = this.pages;
  }
  paginate(page) {
    this.activePage = page;
    this.pageChange.emit(this.activePage);
  }
}
