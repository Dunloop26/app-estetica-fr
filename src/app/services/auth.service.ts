import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TokenResponse } from '../interfaces/token-response';

import { User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(user: User): Observable<TokenResponse> {
    return this.http
      .post<TokenResponse>('signin', JSON.stringify(user), {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  }

  signUp(user: User): Observable<TokenResponse> {
    return this.http.post<TokenResponse>('signup', JSON.stringify(user), {
      headers: {
        'Content-Type' : 'application/json',
      },
    });
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('token') != undefined;
  }

  logOut() {
    localStorage.removeItem('token')
  }
}
