import { Component, OnInit } from '@angular/core';
import { AuthUserService } from '../data.auth-user.service';
import { Router, NavigationEnd, Event } from '@angular/router';
import { LocationService } from '../data.location.service';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { MakebuzzComponent } from '../user-module/makebuzz/makebuzz.component';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  logStat: boolean
  loc

  constructor(
    private auth: AuthUserService,
    private router: Router,
    private geo: LocationService,
    private dialog: MatDialog
  ) {
    router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.logStat = auth.loggedIn()
      }
    })
  }

  ngOnInit() {
    this.logStat = this.auth.loggedIn()
    this.loc = this.geo.getLocation()
  }

  logout() {
    localStorage.clear()
    this.router.navigate([''])
  }

  openDialog() {
    const config = new MatDialogConfig;

    config.minHeight = "50vh";

    // this.dialog.open(CommentDialogComponent, config)
    const dialogRef = this.dialog.open(MakebuzzComponent, config);

    dialogRef.afterClosed().subscribe(data => {

    });
  }

}
