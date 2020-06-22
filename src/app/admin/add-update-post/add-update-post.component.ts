import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-post',
  templateUrl: './add-update-post.component.html',
  styleUrls: ['./add-update-post.component.scss']
})
export class AddUpdatePostComponent implements OnInit {

  postForm: FormGroup;
  selectedFile: string = "Choose a file";
  editMode = false;
  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
  }
  ngOnInit(): void {
    this.initializeForm();
    this.route.paramMap.subscribe(paramMap => {
      if (paramMap.get('id')) {
        this.patchFormValue();
      }
    });

  }
  initializeForm() {
    this.postForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: []
    })
    this.editMode = false;
  }
  patchFormValue() {
    this.postForm.patchValue({
      title: "patched title",
      description: "this is patched vale description"
    });
    this.editMode = true;
  }
  sendPost() {
    console.log(this.postForm.value);
  }
  changeFile() {
    this.selectedFile = this.postForm.value.image;
  }
}
