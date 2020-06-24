import { Component, OnInit } from '@angular/core';
import * as alertify from 'alertify.js';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'myProfile';
  ngOnInit() {
    // this.InitialSetting();
  }
  InitialSetting() {
    alertify.logPosition('bottom right');//example
  }
}
