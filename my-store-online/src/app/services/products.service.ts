import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from './../models/product.models'
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL='https://young-sands-07814.herokuapp.com/api/products'

  constructor(
    private http: HttpClient
  ) { }

  getallProducts(){
    return this.http.get<Product[]>(this.apiURL)
  }
  getProduct(id:string)
  {
    return this.http.get<Product>(`${this.apiURL}/${id}`)
  }
}
