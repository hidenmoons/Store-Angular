import { Component, OnInit } from '@angular/core';
import { AuthService } from 'my-store-online/src/app/services/auth.service';
import { User } from 'my-store-online/src/app/models/user.model';
<<<<<<< HEAD
=======

>>>>>>> origin/master
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
<<<<<<< HEAD
export class ProfileComponent implements OnInit  {

  user : User | null=null;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit(): void {
    this.auth.profile()
    .subscribe(data=>{
    this.user=data;
=======
export class ProfileComponent implements OnInit {

  user: User| null=null;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.authService.user$
    .subscribe(data => {
      this.user = data;
>>>>>>> origin/master
    })
  }

}
