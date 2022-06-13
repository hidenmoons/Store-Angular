import { Component, OnInit } from '@angular/core';
import { AuthService } from 'store-angular/src/app/services/auth.service';
import { User } from 'store-angular/src/app/models/user.model';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit  {

  user : User | null=null;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.user$
    .subscribe(data=>{
    this.user=data;
    })
  }

}
