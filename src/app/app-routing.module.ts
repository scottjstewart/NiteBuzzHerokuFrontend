import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SignupComponent } from "../app/signup/signup.component";
import { LoginComponent } from "../app/login/login.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { AboutComponent } from "./about/about.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { MyAccountComponent } from './my-account/my-account.component'
import { BuzzDetailComponent } from "./buzz-detail/buzz-detail.component";

const routes: Routes = [
  {
    path: "signup",
    component: SignupComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: 'buzz/detail/:id',
    component: BuzzDetailComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "user/account",
    component: MyAccountComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
