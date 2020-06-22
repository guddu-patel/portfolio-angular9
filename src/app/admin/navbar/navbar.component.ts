import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  logged = false;
  constructor(private loginSer: LoginService) { }

  ngOnInit(): void {
    this.logged = this.loginSer.loggedUser;
    this.loginSer.getLoggedEvent.subscribe(() => {
      this.logged = this.loginSer.loggedUser;
    })
  }
  logout() {
    this.loginSer.logout();
  }
  login() {
    this.loginSer.loggedIn({ id: 'id', email: 'som@gg', token: "asdhgasas6d5asd" });
  }
}
