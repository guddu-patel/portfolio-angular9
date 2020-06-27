import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs = [1, 2, 3, 4, 5, 6];
  showPostNo: string = "";
  constructor(private router: Router, private location: Location) {
    // location.path();
    // debugger;
  }
  ngOnInit(): void {

  }
  ngAfterViewInit(): void {
    if (this.location.path() == '') {
      this.blogs.splice(0, 3);
    }
  }
  LoadMorePost() {

  }
}
