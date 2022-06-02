import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Product } from '../../models/product.models'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
@Output() addedProduct = new EventEmitter<Product>();

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

  ngOnInit(): void {
      
  }
  onAddtoCart(){
    this.addedProduct.emit(this.product)
  }

}
