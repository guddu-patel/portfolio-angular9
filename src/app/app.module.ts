import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appRoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminModule } from './admin/admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiinterceptInterceptor } from './interceptot/apiintercept.interceptor';
import { TimeAgoPipe } from './pipe/time-ago.pipe';

@NgModule({
  declarations: [
    AppComponent,
    appRoutingComponents,
    TimeAgoPipe,

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
