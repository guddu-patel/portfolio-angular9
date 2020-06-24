import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminModule } from './admin/admin.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiinterceptInterceptor } from './interceptot/apiintercept.interceptor';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    PageNotFoundComponent,
    FooterComponent,
    LoadingSpinnerComponent,
    PostListComponent,
    PostDetailComponent
  ],
  imports: [
    BrowserModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: ApiinterceptInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
