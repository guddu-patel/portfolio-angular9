import { Injectable, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loggedUser = true;
  @Output() getLoggedEvent: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) {
    this.checkLogin();
  }
  loggedIn(tdata) {
    delete tdata.Password;
    localStorage.setItem("user", JSON.stringify(tdata));
    this.loggedUser = true;
    this.getLoggedEvent.emit();
    this.router.navigate(['admin/dashboard']);
  }
  checkLogin() {
    if (localStorage.getItem('user'))
      this.loggedUser = true;
    else
      this.loggedUser = false;
  }
  logout() {
    localStorage.removeItem('user');
    this.loggedUser = false;
    this.getLoggedEvent.emit();
    this.router.navigate(['/']);
  }
  isLogged() {
    return this.loggedUser;
  }
}
