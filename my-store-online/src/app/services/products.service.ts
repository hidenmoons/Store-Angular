import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http'
import {Product,CreateProductDTO,UpdateProductDTO} from './../models/product.models'
import { retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL='https://young-sands-07814.herokuapp.com/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getallProducts(limit?: number, offset?:number){
    let params= new HttpParams();
    if(limit&& offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Product[]>(this.apiURL, {params})
    .pipe(
      retry(3)
    )
  }
  getProduct(id:string)
  {
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }

  getProductsBtpage(limit: number, offset:number){
    return this.http.get<Product[]>(this.apiURL, {
      params:{limit , offset}
    })
  }

  create(dto:CreateProductDTO ){
    return this.http.post<Product>(this.apiURL,dto);
  }

  update(id: string,dto: UpdateProductDTO  ){

    return this.http.put<Product>(`${this.apiURL}/${id}`, dto);
  }

  delete(id: string){

    return this.http.delete<boolean>(`${this.apiURL}/${id}`);

  }

}
