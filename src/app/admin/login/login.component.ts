import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';
import { ApiHandlerService } from 'src/app/api-handler.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginSer: LoginService,
    private router: Router, private api: ApiHandlerService) { }

  ngOnInit(): void {
    if (this.loginSer.loggedUser) {
      this.router.navigate(['/admin/dashboard']);
    }
    this.initializeForm();
  }
  initializeForm() {
    this.loginForm = this.fb.group({
      email: ['admin@system.com', [Validators.required, Validators.email]],
      password: ['password', [Validators.required]]
    })
  }
  login() {
    debugger;
    let datal = this.loginForm.value;
    // this.api.post('/posts', { title: 'sa', body: 'asas', userId: 1 }).subscribe(
    //   data => {
    //     debugger;
    //     this.loginSer.loggedIn({ token: "this is api token" });
    //   },
    //   error => {
    //     debugger;
    //     console.log('oops', error)
    //   });

    this.api.post('/login', datal).subscribe(
      data => {
        debugger;
        this.loginSer.loggedIn(data);
      });
  }
}
