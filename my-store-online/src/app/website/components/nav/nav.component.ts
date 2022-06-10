import { Component, OnInit, Input } from '@angular/core';

import {StoreService} from '../../../services/store.service'
import { User } from '../../../models/user.model'
import { AuthService } from '../../../services/auth.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Category } from '../../../models/categoria.model';
import { UsersService } from 'my-store-online/src/app/services/users.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showmenu = false;
  count=0;
  profile: User | null=null;
  token='';

  categorie: Category[]=[]
  constructor(
    private storeService:StoreService,
    private authService: AuthService,
    private categoriaservice: CategoriaService,
    private userService:UsersService
    ) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })
    this.getallcategoies();
  }
  
  login() {
    // this.authService.login('sebas@mail.com', '1212')
    // .subscribe(rta => {
    //   this.token = rta.access_token;
    //   console.log(this.token);
    //   this.getProfile();
    // });
    this.authService.loginAndGet('sebas@mail.com', '1212')
    .subscribe(user => {
      this.profile = user;
      this.token = '---';
      this.getProfile();
    });
  }

  getProfile() {
    this.authService.getProfile(this.token)
    .subscribe(user => {
      this.profile = user;
    });
  }
 toggleMenu(){
   this.showmenu = !this.showmenu;
 }
 getallcategoies(){
   this.categoriaservice.getallProducts()
   .subscribe(data=>{
     this.categorie =data;
   });
 }
}
