import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  userDetail = null;
  loggedUser = true;
  @Output() getLoggedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {
    this.checkLogin();
  }
  loggedIn(tdata) {
    delete tdata.Password;
    this.userDetail = tdata.user;
    // localStorage.setItem("tkn_log", JSON.stringify({ token: 'this is token' }));
    localStorage.setItem("tkn_log", tdata.token);
    localStorage.setItem("user", JSON.stringify(tdata.user));
    this.loggedUser = true;
    this.getLoggedEvent.emit();
    this.router.navigate(['admin/dashboard']);
  }
  checkLogin() {
    if (localStorage.getItem("tkn_log")) {
      this.loggedUser = true;
      this.userDetail = JSON.parse(localStorage.getItem('user'));
    }
    else
      this.loggedUser = false;
  }
  logout() {
    localStorage.removeItem("tkn_log");
    localStorage.removeItem("user");
    this.loggedUser = false;
    this.getLoggedEvent.emit();
    this.userDetail = null;
    this.router.navigate(['/']);
  }
  isLogged() {
    return this.loggedUser;
  }
}
