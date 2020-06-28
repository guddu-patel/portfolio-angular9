import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/api-handler.service';
import { environment } from "../../../environments/environment";
import * as alertify from 'alertify.js';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {
  public Editor = ClassicEditor;
  config = { placeholder: 'Type the content here!' };
  ckData = "";
  imgBase = environment.baseUrl;
  postForm: FormGroup;
  selectedFile: any = null;
  imagePreview: string;
  editMode = false;
  submitted = false;
  activeId = null;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiHandlerService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.paramMap.subscribe(paramMap => {
      this.activeId = paramMap.get('id');
      if (this.activeId) {
        debugger;
        this.api.get('/posts/' + this.activeId).subscribe((data: any) => {
          console.log('Single post:', data.post);
          this.patchFormValue(data.post);
        });
      }
    });

  }
  initializeForm() {
    this.postForm = this.fb.group({
      // _id: [],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      page_content: [],
      slug: [],
      post_image: ['', Validators.required]
    })
    this.editMode = false;
  }
  patchFormValue(data) {
    this.postForm.patchValue({
      // _id: data._id,
      title: data.title,
      slug: data.slug,
      description: data.description,
      page_content: data.page_content
    });
    this.postForm.get('post_image').clearValidators();
    this.postForm.get('post_image').updateValueAndValidity();
    // this.selectedFile.name = data.post_image;
    this.imagePreview = this.imgBase + '/' + data.post_image;
    this.editMode = true;
  }
  sendPost() {
    debugger;
    this.submitted = true;
    let formData = new FormData();
    let result = Object.assign({}, this.postForm.value);
    for (let o in result) {
      formData.append(o, result[o])
    }
    formData.set('post_image', this.selectedFile);
    formData.set('slug', this.convertToSlug(this.postForm.value.title));
    debugger;
    if (!this.editMode) {
      // formData.delete('_id');
      this.api.post('/posts', formData).subscribe(data => {
        console.log("post created", data);
        this.successPost();
      })
    }
    else {
      // if (this.selectedFile) formData.delete('post_image');
      this.api.put('/posts/' + this.activeId, formData).subscribe(data => {
        console.log("post updated", data);
        this.successPost();

      })
    }
    this.submitted = false;
  }
  successPost() {
    alertify.success("Post submitted successfully");
    this.router.navigate(['/admin/dashboard']);
  }

  changeFile(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.imagePreview = event.target.result;
      }
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  convertToSlug(Text) {
    return Text
      .replace(/[`~!@#$%^&*()_\-+=\[\]{};:'"\\|\/,.<>?\s]/g, ' ')
      .replace(/[0-9]/g, '')
      .toLowerCase()
      .trim()
      .replace(/\s\s+/g, ' ')
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '')
      ;
  }
}
