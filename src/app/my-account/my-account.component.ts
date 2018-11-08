import { Component, OnInit } from '@angular/core';
import { UserService } from '../data.user.service';
import { AuthUserService } from '../data.auth-user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {

  users$: User;

  constructor(
    private auth: AuthUserService
  ) { }

  ngOnInit() {
    this.auth.getUser().subscribe(auth => {
      this.users$ = auth
      console.log("here is the data", this.users$) 
    })
  }

}
