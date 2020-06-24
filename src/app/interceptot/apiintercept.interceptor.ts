import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { LoginService } from '../admin/service/login.service';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, finalize } from 'rxjs/operators';
import { LoaderService } from '../loader.service';
import { Router } from '@angular/router';

import * as alertify from 'alertify.js';
@Injectable()
export class ApiinterceptInterceptor implements HttpInterceptor {

  constructor(private loginSer: LoginService,
    private loaderService: LoaderService,
    private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!this.loaderService.checkInternetConnection()) {
      return;
    }
    const token = localStorage.getItem("tkn_log");
    this.loaderService.isLoading.next(true);
    let finalReq;
    if (token) {
      const cloned = request.clone({
        headers: request.headers.set("Authorization",
          "Bearer " + token)
      });

      finalReq = next.handle(cloned);
    }
    else {
      finalReq = next.handle(request);
    }
    return finalReq.pipe(

      retry(1),

      catchError((error: HttpErrorResponse) => {

        let errorMessage = '';

        if (error.error instanceof ErrorEvent) {

          // client-side error
          debugger;
          errorMessage = `Error: ${error.error.message}`;

        } else {

          // server-side error
          debugger;
          errorMessage = `Error Code: ${error.status}\nMessage: ${error.error.message || error.error}`;
          if (error.status == 401 && error.statusText == "Unauthorized") {
            alertify.error("Token expired plese login again.");
            this.loginSer.logout();
            this.router.navigate(['/admin/login']);
            return throwError(errorMessage);
          }
        }
        debugger;
        window.alert(errorMessage);
        return throwError(errorMessage);

      }),
      finalize(() => this.loaderService.isLoading.next(false))

    )
  }
}
