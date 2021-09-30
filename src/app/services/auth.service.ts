import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { IUser } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signIn(user: IUser): Observable<IUser | any> {
    return this.http.post<IUser | any>('signin', JSON.stringify(user), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  isLoggedIn(): boolean {
    return false;
  }
}
