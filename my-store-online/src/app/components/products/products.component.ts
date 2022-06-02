import { Component, OnInit } from '@angular/core';
import {Product} from '../../models/product.models'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[]=[];
  total=0;
  products: Product[] = [{
    id: '1',
    name: 'EL mejor juguete',
    price: 565,
    image: './assets/img/agucate.png'
  },
  {
    id: '2',
    name: 'Bicicleta casi nueva',
    price: 356,
    image: './assets/img/perrito3.jpg'
  },
  {
    id: '3',
    name: 'Colleción de albumnes',
    price: 34,
    image: './assets/img/perrito2.webp'
  },
  {
    id: '4',
    name: 'Mis libros',
    price: 23,
    image: './assets/img/perrito1.jpg'
  },];
  constructor() { }

  ngOnInit(): void {
  }
 onADDTocart(product: Product){

   this.myShoppingCart.push(product);
    this.total= this.myShoppingCart.reduce((sum,item)=>sum + item.price,0);
 }
}
