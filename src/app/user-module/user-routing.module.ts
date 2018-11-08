import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserGuard } from '../user.guard';
import { AccountComponent } from './account/account.component';

const userRoutes: Routes = [
  {
    path: 'user/account',
    component: AccountComponent,
    canActivate: [UserGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule]
})
export class UserRoutingModule {}
