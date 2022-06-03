import { Injectable } from '@angular/core';
import {HttpClient,HttpParams, HttpErrorResponse,HttpStatusCode} from '@angular/common/http'
import {Product,CreateProductDTO,UpdateProductDTO} from './../models/product.models'
import { retry ,catchError,map } from 'rxjs';
import { throwError } from 'rxjs';
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
      retry(3),
      map(products=>products.map(item=>{
        return{
          
          ...item,
          taxes: .19 * item.price
          
        }
        
      }))
    )
    
  }
  getProduct(id:string)
  {
    return this.http.get<Product>(`${this.apiURL}/${id}`)
    .pipe(
      catchError((error:HttpErrorResponse)=>{
        if(error.status==HttpStatusCode.Conflict){
          return throwError('ups algo se rompio en el server')
        }  if(error.status==HttpStatusCode.NotFound){
          return throwError('el producto no existe')
        }
        if(error.status==HttpStatusCode.Unauthorized){
          return throwError('no estas autorizado')
        }
        return throwError('ups algo se rompio')
      })
    )
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
