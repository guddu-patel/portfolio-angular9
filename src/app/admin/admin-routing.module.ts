import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AddUpdatePostComponent } from './add-update-post/add-update-post.component';

const routes: Routes = [
  { path: 'admin/login', component: LoginComponent },
  { path: 'admin/dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { path: 'admin/post', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
  { path: 'admin/post/:id', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
  // { path: 'admin/post', component: AddUpdatePostComponent, canActivate: [AuthGuard] },
];
const components: any = [
  AdminDashboardComponent,
  LoginComponent,
  AddUpdatePostComponent
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
export const adminRoutingComponents = components;
