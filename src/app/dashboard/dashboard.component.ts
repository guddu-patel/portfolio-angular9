import { Component, OnInit } from '@angular/core';

declare function initJQ(): any;
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }
  ngOnInit() { }
  ngAfterViewInit(): void {
    // called custome js function to initialize after component ready
    initJQ();
  }

}
