import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'
import { User } from './user.model';
import { UserGuard } from "./user.guard";


@Injectable({
  providedIn: "root"
})
export class AuthUserService {
  constructor(private http: HttpClient, private jwt: JwtHelperService) {}

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
  getUser(): Observable<User> {
    console.log("get user start");
    return this.http
      .get<User>("/user/get")
      .pipe(tap(auth => console.log(auth)));
  }

  updateUser(user: User): Observable<any> {
    return this.http.put('/user/update', user).pipe(
      catchError(this.handleError('updateUser', []))
    )
  }


  deleteUser(username: string, password: string): Observable<any> {
    return this.http.delete<any>(`/user/delete`).pipe(
      tap(),
      catchError(this.handleError("deletUser", []))
    );
  }

  loggedIn(): boolean {
    let token = localStorage.getItem("sessionToken");
    if (token && token !== null && token !== "") {
      return !this.jwt.isTokenExpired();
    } else {
      return false;
    }
  }
}
