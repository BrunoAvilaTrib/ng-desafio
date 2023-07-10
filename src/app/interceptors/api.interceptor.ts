import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilService } from './../services/util.service';

import { Observable, throwError } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthStore } from '../lib/store/auth.store';

@Injectable({
  providedIn: 'root'
})
export class ApiInterceptor implements HttpInterceptor{

  constructor(
    private tokenService: AuthStore,
    private router: Router,
      ) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let intReq = req;
    const token = this.tokenService.getToken();
    if (token) {
      intReq = req.clone({
        headers: req.headers.set(
          'Authorization',
          'Bearer ' + this.tokenService.getToken()
        )
      });
    }
    return next.handle(intReq);
  }
}
