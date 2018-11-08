import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { Observable } from "rxjs";
import { AuthUserService } from "./data.auth-user.service";

@Injectable({
  providedIn: "root"
})
export class DataCommentService {
  newComment: Object;

  constructor(private http: HttpClient, private auth: AuthUserService) {}

  addComment(comment: string, id: string | number): Observable<any> {
    return this.http
      .post(`/comment/add/${id}`, { text: comment })
      .pipe(tap(ret => console.log(ret)));
  }

  getComments() {
    return this.http.get("/comment/get").pipe(tap(data => console.log(data)));
  }

  getOwnComment(commentId) {
    return this.http.get("/comment/own" + commentId);
  }

  createComment(comment) {
    return this.http.post("/comment/create", comment);
  }

  updateComment(commentId, newComment) {
    return this.http.put("/comment/update" + commentId, newComment);
  }

  deleteComment(commentId): Observable<any> {
    return this.http.delete("/comment/delete/" + commentId);
  }
}
