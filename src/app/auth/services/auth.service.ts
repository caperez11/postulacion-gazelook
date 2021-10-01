import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { of, Observable } from 'rxjs';
import { catchError, map, } from 'rxjs/operators';

import { environment } from './../../../environments/environment';

import { DataResponse, UserResponse } from './../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private emailUser: string = 'tester@tester.com';
  private BASE_URL: string = environment.BASE_URL;
  constructor(private http: HttpClient) { }

  public login(email: string): Observable<UserResponse> {
    const url = `${this.BASE_URL}/user/${email}`;
    return this.http.get<UserResponse>(url).pipe(
      map(resp => resp),
      catchError(err => of(err.error))
    );
  }

  public getData() {
    const url = `${this.BASE_URL}/data`;
    return this.http.get<DataResponse>(url)
      .pipe(
        map(resp => resp.data),
        catchError(err => of(err.error.message))
      );
  }


}
