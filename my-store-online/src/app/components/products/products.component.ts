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
  showProductdetail = false;
  productChosen:Product={
    id: '',
    title: '',
    price: 0,
    images: [],
    description: '',
    category:{
      id:'',
      name:'',
    }
  }

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
 toggleProductdetail(){
   this.showProductdetail = !this.showProductdetail
 }

 onShowDetail(id:string){

  this.productsService.getProduct(id)
  .subscribe(data=>{
    this.toggleProductdetail();
    this.productChosen=data;
  })

 }

}
