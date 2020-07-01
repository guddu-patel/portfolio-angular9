import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'blog', component: BlogComponent },
  { path: 'blog/list', component: BlogListComponent },
  { path: 'blog/detail/:id', component: BlogDetailComponent },
  { path: 'custom_error', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/custom_error' }
];
const components: any = [
  NavbarComponent,
  DashboardComponent,
  PageNotFoundComponent,
  FooterComponent,
  LoadingSpinnerComponent,
  BlogComponent,
  BlogListComponent,
  BlogDetailComponent
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const appRoutingComponents = components;
