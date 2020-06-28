import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.scss']
})
export class AdminNavbarComponent implements OnInit {

  logged = false;
  userDetail = null;
  constructor(private loginSer: LoginService) { }

  ngOnInit(): void {
    this.logged = this.loginSer.loggedUser;
    this.userDetail = this.loginSer.userDetail;
    this.loginSer.getLoggedEvent.subscribe(() => {
      this.logged = this.loginSer.loggedUser;
      this.userDetail = this.loginSer.userDetail;

    })
  }
  logout() {
    this.loginSer.logout();
  }
  login() {
    this.loginSer.loggedIn({ id: 'id', email: 'som@gg', token: "asdhgasas6d5asd" });
  }
}
