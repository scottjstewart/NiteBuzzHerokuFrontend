import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormControl } from "@angular/forms";
import { AuthUserService } from "src/app/data.auth-user.service";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { User } from "src/app/user.model";


@Component({
  selector: "app-update-user",
  templateUrl: "./update-user.component.html",
  styleUrls: ["./update-user.component.css"]
})
export class UpdateUserComponent implements OnInit {
  form: FormGroup;

  constructor(
    private auth: AuthUserService,
    private fb: FormBuilder,
    private ref: MatDialogRef<UpdateUserComponent>,

  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      userName: new FormControl,
      firstName: new FormControl,
      lastName: new FormControl,
      email: new FormControl
    })
  }
  submit() {
    return this.ref.close(this.form.value)
  }
  // submit() {
  //   let user: User = this.form.value
  //   console.log(user)
  //   this.auth.updateUser(user).subscribe()
  //   this.ref.close(this.form.value)
  // }
  close() {
    this.ref.close()
  }
}
