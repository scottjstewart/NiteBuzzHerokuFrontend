import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { BuzzesService } from 'src/app/data.buzzes.service';
import { DataCommentService } from 'src/app/data.comment.service';


@Component({
  selector: "app-comment.dialog",
  templateUrl: "./comment.dialog.component.html",
  styleUrls: ["./comment.dialog.component.css"]
})
export class CommentDialogComponent implements OnInit {
  id: number;
  title: string;
  form: FormGroup;
  original: string;

  constructor(
    private fb: FormBuilder,
    private ref: MatDialogRef<CommentDialogComponent>,
    private Buzz: BuzzesService,
    private comment: DataCommentService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.id = data.id;
    this.title = data.title;
    this.original = data.original;
  }

  ngOnInit() {
    this.form = this.fb.group({
      comment: new FormControl(),
      id: new FormControl()
    });
  }

  submit() {
    this.comment
      .addComment(this.form.controls.comment.value, this.id)
      .subscribe();
    this.ref.close(this.form.value);
  }
  close() {
    this.ref.close();
  }
}
