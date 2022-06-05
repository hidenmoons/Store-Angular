import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import {Product} from '../../models/product.models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset=0;
  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.productsService.getallProducts(10,0)
    .subscribe(data =>{
      this.products= data;
    });
    
  }

}
