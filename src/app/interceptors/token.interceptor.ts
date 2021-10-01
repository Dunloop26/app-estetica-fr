import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Le paso el token de autorización JWT
    const token = localStorage.getItem('token');

    const requestOptions : any = {}

    // Si existe el token
    if (token) {
      requestOptions.setHeaders = {
        'Authorization': `Bearer ${token}`
      }
    }

    const modifiedRequest = request.clone(requestOptions);
    return next.handle(modifiedRequest);
  }
}
