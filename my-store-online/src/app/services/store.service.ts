import { Injectable } from '@angular/core';
import {Product} from '../models/product.models';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class StoreService {
 private myShoppingCart: Product[]=[];
 private mycart = new BehaviorSubject<Product[]>([]);

 mycart$ = this.mycart.asObservable(); //observable signo pesos buenas practica


  constructor() { }

  addProduct(product: Product){

    this.myShoppingCart.push(product);
    this.mycart.next(this.myShoppingCart);

  }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getTotal(){

    return this.myShoppingCart.reduce((sum,item)=>sum + item.price,0);

  }
}
