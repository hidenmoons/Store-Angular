import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../../models/product.models'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent  {
@Output() addedProduct = new EventEmitter<Product>();
@Output() showProduct = new EventEmitter<string>();

@Input() product: Product= {
  id: '',
  title: '',
  price: 0,
  images: [],
  description: '',
  category:{
    id:'',
    name:'',
  }
  
};

  constructor() { }

  onAddtoCart(){
    this.addedProduct.emit(this.product)
  }
  onShowDetail(){
    this.showProduct.emit(this.product.id)
  }

}
