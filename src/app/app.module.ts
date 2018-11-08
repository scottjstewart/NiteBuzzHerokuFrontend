import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { UserModule } from "./user-module/user.module";
import { ClientModule } from "./client-module/client.module";
import { AdminModule } from "./admin-module/admin.module";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CdkTableModule } from "@angular/cdk/table";
import { CdkTreeModule } from "@angular/cdk/tree";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { MaterialModule } from "./material";
import { SignupComponent } from "./signup/signup.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './not-found/not-found.component'
import { JwtModule } from "@auth0/angular-jwt";
import { BuzzDetailComponent } from './buzz-detail/buzz-detail.component';
import { CommentDialogComponent } from "./about/comment.dialog/comment.dialog.component";
import { MatDialogModule } from "@angular/material";
import { UrlInterceptor } from "./intercept.url";
import { MakebuzzComponent } from "./user-module/makebuzz/makebuzz.component";
import { MyAccountComponent } from './my-account/my-account.component';
import { UpdateUserComponent } from "./user-module/account/update-user/update-user.component";

export function tokenGetter() {
  return localStorage.getItem('sessionToken')
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SidebarComponent,
    SignupComponent,
    FooterComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    NotFoundComponent,
    BuzzDetailComponent,
    CommentDialogComponent,
    MyAccountComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    ClientModule,
    AdminModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CdkTableModule,
    CdkTreeModule,
    DragDropModule,
    ScrollingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          'localhost:3000'
        ],
        blacklistedRoutes: [
          'localhost:3000/user/login',
          'localhost:3000/user/signup',
        ],
        authScheme: '',
      }
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: UrlInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ],
  entryComponents: [
    CommentDialogComponent,
    MakebuzzComponent,
    UpdateUserComponent
  ]
})
export class AppModule { }

