import { Component, OnInit } from "@angular/core";
import { AuthUserService } from "../../data.auth-user.service";
import { User } from "../../user.model";
import { BuzzesService } from "../../data.buzzes.service";
import { DataCommentService } from "../../data.comment.service";
import { MatDialogConfig, MatDialog } from "@angular/material";
import { UpdateUserComponent } from "./update-user/update-user.component";

@Component({
  selector: "app-account",
  templateUrl: "./account.component.html",
  styleUrls: ["./account.component.css"]
})
export class AccountComponent implements OnInit {
  users$;
  username: string;
  password: string;
  comment: any;
  buzzes: any;
  commentId: any;
  buzz: any;
  loggedIn

  constructor(
    private auth: AuthUserService,
    private data: DataCommentService,
    private buzzs: BuzzesService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth;
      this.loggedIn = this.auth.loggedIn()
      // console.log("here is the data", this.users$);
    });
    // let id = this.route.snapshot.paramMap.get("id");
    // this.buzzSvc.getBuzzById(id).subscribe(res => {
    //   this.buzz = res;
    //   console.log(this.buzz);
    // });
    // this.buzz.getBuzz(buzzerId).subscribe(buzz => {
    //   this.buzzes = buzz;
    // });
    // this.data.getOwnComment(this.users$.comment).subscribe(data => {
    //   this.comment = data;
    // });
  }
  delete(): void {
    this.auth.deleteUser(this.username, this.password).subscribe();
  }

  deleteBuzz(id: any): void {
    this.buzzs.deleteBuzz(id).subscribe(succ => {
      this.auth.getUser().subscribe(auth => {
        this.users$ = auth;
      });
    });
  }

  deleteComment(commentId: any): void {
    this.data.deleteComment(commentId).subscribe(succ => {
      this.auth.getUser().subscribe(auth => {
        this.users$ = auth;
      });
    });
  }

  updateUser() {
    const config = new MatDialogConfig();

    config.minHeight = "50vh";

    // this.dialog.open(CommentDialogComponent, config)
    const dialogRef = this.dialog.open(UpdateUserComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      this.auth.updateUser(data).subscribe(
        res => console.log(res)
      )
    });
  }
}
