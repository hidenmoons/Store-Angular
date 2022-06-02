import { Component, OnInit } from '@angular/core';
import {StoreService} from '../../services/store.service'

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showmenu = false;
  count=0;
  constructor(
    private storeService:StoreService) { }

  ngOnInit(): void {

    this.storeService.mycart$.subscribe(products=>{
      this.count=products.length;
    })

  }

 toggleMenu(){
   this.showmenu = !this.showmenu;
 }
}
