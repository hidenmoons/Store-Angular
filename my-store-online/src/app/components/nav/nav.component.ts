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
  profile: User | null=null;
 
  constructor(
    private storeService:StoreService,
    private authService: AuthService) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })
    
  }

  login() {
    // this.authService.login('sebas@mail.com', '1212')
    // .subscribe(rta => {
    //   this.token = rta.access_token;
    //   console.log(this.token);
    //   this.getProfile();
    // });
    this.authService.loginAndGet('alexis@fdfds.com', 'sadsad')
    .subscribe(user => {
      this.profile = user;
    });
  }
 toggleMenu(){
   this.showmenu = !this.showmenu;
 }
}
