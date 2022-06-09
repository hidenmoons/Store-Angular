import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Location } from '@angular/common';

import { Product } from '../../models/product.models';
import { ProductsService } from '../../services/products.service';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  
  productID: string | null=null;
  product: Product | null=null;


  constructor(
    private route:ActivatedRoute,
    private productservice: ProductsService,
    private location:Location
    ) { }

  ngOnInit(): void {
    this.route.paramMap.
    pipe(
      switchMap(params=>{
        this.productID = params.get('id');
      if(this.productID){
       return this.productservice.getProduct(this.productID)
      }
      return[null];
      })
    ).
    subscribe((data)=>{
      this.product=data
    }
     
    )
  }
  back(){
    this.location.back();
  }
}
