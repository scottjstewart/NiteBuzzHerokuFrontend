// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
// import { AuthUserService } from '../../data.auth-user.service';
// import { User } from 'src/app/user.model';
// import { BuzzesService } from '../../data.buzzes.service';
// import { AdminServiceService} from '../../admin-service.service';

// @Component({
//   selector: 'app-admin',
//   templateUrl: './admin.component.html',
//   styleUrls: ['./admin.component.css']
// })
// export class AdminComponent implements OnInit {

//   form: FormGroup

//   constructor(
//     private auth: AuthUserService,
//     private fb: FormBuilder,
//     private buzz: BuzzesService,
//     private admin: AdminServiceService,

//   ) { }

//   ngOnInit() {
//     this.admin.adminGetUsers().subscribe(admin => {
//       this.users = admin;
//     })
    
//   }
//       deleteUser(): void {
//         this.admin.adminDeleteUser().subscribe();
//   }

// }
