import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ApiHandlerService } from '../api-handler.service';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  blogs: any = [];
  showPostNo: string = "";
  imgBase = environment.baseUrl;
  activePage = 1;

  constructor(private router: Router,
    public location: Location,
    private api: ApiHandlerService) {
    // location.path();
    // debugger;
  }
  ngOnInit(): void {
    this.getPosts();
  }
  getTime() {
    return '0.2s';
  }
  ngAfterViewInit(): void {

  }
  getPosts() {
    this.api.get('/posts?page=' + this.activePage).subscribe((data: any) => {
      console.log('All Posts:', data.posts);
      debugger;
      this.blogs = this.blogs.concat(data.posts.docs);
      // this.activePage = data.posts.pages == this.activePage ? -1 : (data.posts.page + 1);
      this.activePage = data.posts.pages <= this.activePage ? -1 : (this.activePage + 1);
      if (this.location.path() == '') {
        this.blogs = this.blogs.slice(0, 3);
      }
    });
  }
  LoadMorePost() {

  }
  trackblog(index, blog) {
    console.log(blog);
    return blog ? blog.updatedAt : undefined;

  }
}
