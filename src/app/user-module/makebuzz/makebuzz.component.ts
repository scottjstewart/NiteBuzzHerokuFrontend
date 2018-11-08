import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AuthUserService } from 'src/app/data.auth-user.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { BuzzesService } from 'src/app/data.buzzes.service';
import { Buzz } from 'src/app/buzz.model';
import { LocationService } from 'src/app/data.location.service';


@Component({
  selector: 'app-makebuzz',
  templateUrl: './makebuzz.component.html',
  styleUrls: ['./makebuzz.component.css']
})
export class MakebuzzComponent implements OnInit {
  user
  form: FormGroup
  loc
  
  constructor(
    private Buzz: BuzzesService,
    private fb: FormBuilder,
    private auth: AuthUserService,
    private ref: MatDialogRef<MakebuzzComponent>,
    private geo: LocationService,
    
    @Inject(MAT_DIALOG_DATA) data
  ) {
    if (data) {
      this.form.controls.location = data.location
      this.form.controls.price = data.price
      this.form.controls.funFactor = data.funFactor
      this.form.controls.details = data.details
    }
  }

  ngOnInit() {
    this.form = this.fb.group({
      location: new FormControl,
      price: new FormControl,
      funFactor: new FormControl,
      details: new FormControl
    })
    this.geo.getLocation().subscribe(
      res => {
        this.loc = res
      }

    )
  }

  submit(comment: string) {
    let buzz: Buzz = this.form.value
    buzz.longitude = this.loc.coords.longitude
    buzz.latitude = this.loc.coords.latitude

    this.Buzz.makeBuzz(buzz).subscribe()
    this.ref.close(this.form.value)
  }

  close() {
    this.ref.close()
  }

}
