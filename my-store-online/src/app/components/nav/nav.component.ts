import { Component, OnInit, Input } from '@angular/core';

import {StoreService} from '../../services/store.service'
import { User } from '../../models/user.model'
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showmenu = false;
  count=0;
  token='';
  profile: User | null=null;
 
  constructor(
    private storeService:StoreService,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })
    
  }

  login(){
    this.authService.login('alexis@fdfds.com','sadsad')
    .subscribe(rta=>{
      this.token = rta.access_token;
      console.log(rta.access_token);
      console.log('toy en el nav');
      this.getProfile();
    });
  }

  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile=>{
      this.profile=profile
      console.log(profile, 'profile')
      console.log('toy en el nav profile');

    });
  }

 toggleMenu(){
   this.showmenu = !this.showmenu;
 }
}
