import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from './service/login.service';

@NgModule({
  declarations: [adminRoutingComponents, NavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule

  ],
  providers: [LoginService]
})
export class AdminModule { }
