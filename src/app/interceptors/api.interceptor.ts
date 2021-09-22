import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiInterceptor implements HttpInterceptor {

  constructor() {}

  private API_URL = environment.baseUrl;

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const finalUrl = `${this.API_URL}/${request.url}`
    const newRequest = request.clone({
      url: finalUrl,
      withCredentials: true,
    })
    return next.handle(newRequest);
  }
}
