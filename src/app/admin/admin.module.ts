import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { NavbarComponent } from './navbar/navbar.component';

import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from './service/login.service';
import { FooterComponent } from '../footer/footer.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [adminRoutingComponents, NavbarComponent, FooterComponent, PaginationComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule

  ],
  exports: [FooterComponent, PaginationComponent],
  providers: [LoginService]
})
export class AdminModule { }
