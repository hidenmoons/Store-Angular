import { Component, OnInit } from '@angular/core';
import { AuthService } from 'my-store-online/src/app/services/auth.service';
import { User } from 'my-store-online/src/app/models/user.model';
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
