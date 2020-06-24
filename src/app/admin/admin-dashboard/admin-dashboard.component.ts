import { Component, OnInit } from '@angular/core';
import { ApiHandlerService } from 'src/app/api-handler.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  posts: any;
  constructor(private api: ApiHandlerService) { }

  ngOnInit(): void {
    this.getPosts();
  }
  getPosts() {
    this.api.get('/posts').subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }
  deletePost(id) {
    debugger;
    this.api.delete('/posts/' + id).subscribe(data => {
      console.log("post deleted", data);
      alert('post deleted');
    })
  }
}
