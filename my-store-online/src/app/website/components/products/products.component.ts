import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product,CreateProductDTO,UpdateProductDTO} from '../../../models/product.models';
import {StoreService} from '../../../services/store.service';
import {ProductsService} from '../../../services/products.service'
import { switchMap } from 'rxjs/operators';
import { zip } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent  {
  myShoppingCart: Product[]=[];
  total=0;
 @Input() products: Product[] = [];
 //@Input() productid: string| null = null;
 @Input()set productid(id: string | null){
  if(id){
    this.onShowDetail(id);
  }
 };
 @Output() loadmore = new EventEmitter();
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
  limit = 10;
  offset=0;
  statusDetail: 'loading'|'succes'|'error'|'init' ='init';
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
    
  ) { 
    this.myShoppingCart= this.storeService.getShoppingCart();
  }


 onADDTocart(product: Product){

  this.storeService.addProduct(product);
  this.total= this.storeService.getTotal();

 }
 toggleProductdetail(){
   this.showProductdetail = !this.showProductdetail
 }

 onShowDetail(id:string){
  this.statusDetail='loading';
  if(this.showProductdetail){
    this.showProductdetail=true;
  }
  this.productsService.getProduct(id)
  .subscribe(data=>{
    this.toggleProductdetail();
    this.productChosen=data;
    this.statusDetail='succes';

  },errormsg=>{ 
    window.alert(errormsg);
    this.statusDetail='error';
  }
  )

 }

 readAndUpdate(id:string){
  this.productsService.getProduct(id)
  .pipe(
    switchMap((product)=>
       this.productsService.update(product.id,{title:'change'})
    )
  )
  .subscribe(data=>{
    console.log(data);
    })
    this.productsService.ferchAndUpdate(id,{title:'change'})
    .subscribe(response=>{
      const read = response[0];
      const update = response[1];

    })
  }
 

 createNewProduct(){

  const product: CreateProductDTO={
    title:'nuevo producto',
    description:'cosa nueva',
    images:['https://placeimg.com/640/480/any?random=${Math.random()}'],
    price: 5000,
    categoryId:2,
  }

   this.productsService.create(product)
   .subscribe(data=>{
     this.products.unshift(data);
   });
 }

 updateProduct(){

  const changes={
   title:'nuevo tittle'
  } 

  const id = this.productChosen.id;
  this.productsService.update(id , changes)
  .subscribe(data=>{
    const productindex= this.products.findIndex(item=> item.id==this.productChosen.id)
    this.products[productindex]= data;
  });

 }

 deleteProduct(){
     const id = this.productChosen.id;
     this.productsService.delete(id)
     .subscribe(()=>{
      const productindex= this.products.findIndex(item=> item.id==this.productChosen.id)
      this.products.splice(productindex,1);
      this.showProductdetail = false;
     })
 }

  onloadmore(){
    this.loadmore.emit();
  }

}
