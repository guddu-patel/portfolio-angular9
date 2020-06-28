import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/post', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
  { path: 'admin/post/:id', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
  // { path: 'admin/post', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
];
const components: any = [
  AdminNavbarComponent,
  AdminDashboardComponent,
  LoginComponent,
  AddUpdatePostComponent,
  AdminFooterComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminRoutingComponents = components;
