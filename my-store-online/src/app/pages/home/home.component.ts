import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../../services/products.service'
import {Product} from '../../models/product.models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  products: Product[] = [];
  limit = 10;
  offset=0;

  productid: string|null=null;

  constructor(
    private productsService:ProductsService,
    private activatedroute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.productsService.getallProducts(10,0)
    .subscribe(data =>{
      this.products= data;
    });

    this.activatedroute.queryParamMap.subscribe(params=>{   
      this.productid=params.get('product');
      console.log(params,'parametros')
    })
  }

  onLoadmore(){
  this.productsService.getProductsBtpage(this.limit,this.offset)
  .subscribe(data =>{
   this.products = this.products.concat(data);
    this.offset+=this.limit;
  });
  }
}
