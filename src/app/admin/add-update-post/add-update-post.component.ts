import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/api-handler.service';
@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {

  postForm: FormGroup;
  selectedFile: any = { name: "Choose a file" };
  editMode = false;
  submitted = false;
  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private api: ApiHandlerService,
    private router: Router) { }

  ngOnInit(): void {
    this.initializeForm();
    this.route.paramMap.subscribe(paramMap => {
      let id = paramMap.get('id');
      if (id) {
        this.api.get('/posts/' + id).subscribe(data => {

          this.patchFormValue(data);
        });
      }
    });

  }
  initializeForm() {
    this.postForm = this.fb.group({
      _id: [],
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      slug: [],
      post_image: ['', Validators.required]
    })
    this.editMode = false;
  }
  patchFormValue(data) {
    this.postForm.patchValue({
      _id: data._id,
      title: data.title,
      slug: data.slug,
      description: data.body
    });
    this.editMode = true;
  }
  sendPost() {
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

      formData.delete('_id');
      this.api.post('/posts', formData).subscribe(data => {
        console.log("post created", data);
        this.successPost();
      })
    }
    else {
      this.api.put('/posts/' + this.postForm.value.id, formData).subscribe(data => {
        console.log("post updated", data);
        this.successPost();

      })
    }
    this.submitted = false;
  }
  successPost() {
    alert('Post submitted successfully');
    this.router.navigate(['/admin/dashboard']);
  }

  changeFile(event) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.selectedFile = file;
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
