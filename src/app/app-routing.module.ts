import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';


const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'blog', component: BlogComponent },
  { path: 'blog/list', component: BlogListComponent },
  { path: 'blog/detail/:id', component: BlogDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];
const components: any = [
  NavbarComponent,
  DashboardComponent,
  PageNotFoundComponent,
  FooterComponent,
  LoadingSpinnerComponent,
  PostListComponent,
  PostDetailComponent,
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
