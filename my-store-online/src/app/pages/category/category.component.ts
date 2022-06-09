import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProductsService} from './../../services/products.service';
import {Product} from '../../models/product.models';
import {switchMap} from 'rxjs/operators'


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  products: Product[] = [];
  categoryID: string|null=null;
  limit = 10;
  productid: string|null=null;
  offset=0;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private activatedroute:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.
    pipe(
      switchMap(params=>{
        this.categoryID = params.get('id');
      if(this.categoryID){
       return this.productsService.
       getByCategory(this.categoryID ,this.limit,this.offset)
      }
      return[];
      })
    ).
    subscribe((data)=>{
      this.products=data
    }
     
    )

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
