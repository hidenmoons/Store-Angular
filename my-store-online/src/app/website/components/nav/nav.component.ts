import { Component, OnInit, Input } from '@angular/core';

import {StoreService} from '../../../services/store.service'
import { User } from '../../../models/user.model'
import { AuthService } from '../../../services/auth.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Category } from '../../../models/categoria.model';
import { UsersService } from 'my-store-online/src/app/services/users.service';
import { Router } from '@angular/router';
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
  token='';
  constructor(
    private storeService:StoreService,
    private authService: AuthService,
    private categoriaservice: CategoriaService,
    private router: Router
    ) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })
    this.getallcategoies();
  }

  login() {
    this.authService.loginAndGet('alexis@angulartest.com','sadsad')
    .subscribe(() => {
      this.router.navigate(['/profile']);
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
