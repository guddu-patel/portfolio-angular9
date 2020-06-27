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
  constructor(private api: ApiHandlerService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.api.get('/posts').subscribe((data: any) => {
      console.log('All Posts:', data.posts);
      this.posts = data.posts;
    });
  }
  deletePost(id) {
    debugger;
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
