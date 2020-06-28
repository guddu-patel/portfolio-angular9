import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';

import { ReactiveFormsModule } from "@angular/forms";
import { LoginService } from './service/login.service';
import { PaginationComponent } from './pagination/pagination.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

@NgModule({
  declarations: [adminRoutingComponents, PaginationComponent, AdminNavbarComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule

  ],
  exports: [PaginationComponent],
  providers: [LoginService]
})
export class AdminModule { }
