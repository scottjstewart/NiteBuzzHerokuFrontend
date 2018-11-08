import { Injectable } from "@angular/core";
import { Observable, of, Subject, BehaviorSubject, ReplaySubject } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, tap } from "rxjs/operators";
import { AuthUserService } from "./data.auth-user.service";
import { Buzz } from "./buzz.model";
import { errorHandler } from "@angular/platform-browser/src/browser";




@Injectable({
  providedIn: "root"
})
export class BuzzesService {
  private buzzr = new ReplaySubject<Buzz>();

  buzzr$ = this.buzzr.asObservable();

  constructor(private http: HttpClient, private auth: AuthUserService) {}

  getBuzzes(): Observable<any> {
    return this.http.get<any>("/buzz/get").pipe(
      tap(res => console.log(res)),
      catchError(this.handleError("getBuzzes", []))
    );
  }

  getBuzzById(id: string | number): Observable<Buzz> {
    return this.http.get<Buzz>(`/buzz/byId/${id}`);
  }

  getBuzz(buzzId) {
    return this.http.get("/buzz/own" + buzzId);
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  makeBuzz(buzz: Buzz): Observable<Buzz> {
    return this.http
      .post<Buzz>("/buzz/makeBuzz", buzz)
      .pipe(tap(res => this.buzzr.next(res)));
  }

  deleteBuzz(buzz: Buzz | number): Observable<any> {
    const id = typeof buzz === "number" ? buzz : buzz.id;
    return this.http
      .delete<Buzz>(`/buzz/delete/${id}`)
      .pipe(catchError(this.handleError("deleteBuzz", [])));
  }

  updateBuzz(buzz: Buzz | number): Observable<any> {
    const id = typeof buzz === "number" ? buzz : buzz.id;
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "applicatoin/json"
      })
    };
    return this.http
      .put(`buzz/update/${id}`, options)
      .pipe(catchError(this.handleError("updateBuzz", [])));
  }
}
