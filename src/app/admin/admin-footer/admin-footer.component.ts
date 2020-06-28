import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-footer',
  templateUrl: './admin-footer.component.html',
  styleUrls: ['./admin-footer.component.scss']
})
export class AdminFooterComponent implements OnInit {
  dateFooter;
  constructor() { }

  ngOnInit(): void {
    this.dateFooter = Date.now();
  }

}
