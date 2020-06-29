import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/api-handler.service';
import { environment } from "../../../environments/environment";
import * as alertify from 'alertify.js';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  posts: any;
  imgBase = environment.baseUrl;
  categories = environment.postCategory;
  activePage = 1;
  limit = 10;
  originalPost = null;
  category = '';
  constructor(private api: ApiHandlerService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    let url = '/posts?page=' + this.activePage + '&limit=' + this.limit + '&category=' + this.category;
    this.api.get(url).subscribe((data: any) => {
      console.log('All Posts:', data.posts);
      this.originalPost = data.posts;
      this.posts = data.posts.docs;
    });
  }
  paginate(page) {
    this.activePage = page;
    this.getPosts();
  }
  deletePost(id) {
    if (confirm("Are you sure to delete this post?")) {

      this.api.delete('/posts/' + id).subscribe(data => {
        console.log("post deleted", data);
        // alert('post deleted');
        alertify.success("Post Deleted Successfilly");
        this.posts = this.posts.filter(function (obj) {
          return obj._id !== id;
        });
      })
    }

  }

}
