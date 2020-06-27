import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiHandlerService } from '../api-handler.service';
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  selectedPost: any = null;
  imgBase = environment.baseUrl;
  otherPosts = null;
  constructor(private route: ActivatedRoute, private api: ApiHandlerService) { }

  ngOnInit(): void {
    this.getPost();
  }
  getPost() {
    this.route.paramMap.subscribe((data: any) => {
      let id = data.params.id
      this.api.get('/posts/' + id).subscribe((data: any) => {
        console.log('selected post:', data);
        this.selectedPost = data.post;
        this.otherPosts = data;
        debugger;
      });
    })
  }

}
