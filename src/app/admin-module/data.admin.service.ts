import { Injectable } from '@angular/core';
import { AuthUserService } from '../data.auth-user.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(
    private auth: AuthUserService,
    private http: HttpClient
  ) { }

  adminGetUsers(perPage: number, page: number): Observable<any> {
    return this.http.get(`/admin/users/${perPage}/${page}`)
  }
}
