import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {StoreService} from '../../../services/store.service'
import { User } from '../../../models/user.model'
import { AuthService } from '../../../services/auth.service';
import { CategoriaService } from '../../../services/categoria.service';
import { Category } from '../../../models/categoria.model';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showmenu = false;
  count=0;
  profile: User | null=null;
  categorie: Category[]=[]
  token='';
  constructor(
    private storeService:StoreService,
    private authService: AuthService,
    private categoriaservice: CategoriaService,
    private route:Router
    ) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })
    this.getallcategoies();
    this.authService.user$
    .subscribe(data=>{
      this.profile=data
    })
  }

  login() {
  
    this.authService.loginAndGet('alexis@fdfds.com', 'sadsad')
    .subscribe(() => {
      this.route.navigate(['/profile']);
    });
  }

  logout(){
    this.authService.logout()
    this.profile=null;
    this.route.navigate(['/home']);
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
