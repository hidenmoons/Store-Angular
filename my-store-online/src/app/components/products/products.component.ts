import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.models';
import {StoreService} from '../../services/store.service';
import {ProductsService} from '../../services/products.service'


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[]=[];
  total=0;
  products: Product[] = [];
  today= new Date();
  date = new Date(2021, 1 ,10);

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) { 
    this.myShoppingCart= this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    this.productsService.getallProducts()
    .subscribe(data =>{
      this.products= data;
    });
  }

 onADDTocart(product: Product){

  this.storeService.addProduct(product);
  this.total= this.storeService.getTotal();

 }

}
