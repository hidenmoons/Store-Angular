import { Injectable } from '@angular/core';
import {HttpClient,HttpParams, HttpErrorResponse,HttpStatusCode} from '@angular/common/http'
import { checktime } from '../interceptors/time.interceptor';
import {Product,CreateProductDTO,UpdateProductDTO} from './../models/product.models'
import { retry ,catchError,map } from 'rxjs';
import { throwError,zip } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiURL='https://young-sands-07814.herokuapp.com/api'

  constructor(
    private http: HttpClient
  ) { }

    getByCategory(categoryid:string , limit?:number, offset?:number){
      let params= new HttpParams();
      if(limit&& offset){
        params = params.set('limit', limit);
        params = params.set('offset', limit);
      }
      return this.http.get<Product[]>(`${this.apiURL}/categories/${categoryid}/products`,{params})
    }

  getallProducts(limit?: number, offset?:number){
    let params= new HttpParams();
    if(limit&& offset){
      params = params.set('limit', limit);
      params = params.set('offset', limit);
    }
    return this.http.get<Product[]>(`${this.apiURL}/products`, {params, context:checktime()})
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

  ferchAndUpdate(id:string, dto: UpdateProductDTO){
    return zip(
      this.getProduct(id),
      this.update(id,dto)
    );
  }

  getProduct(id:string)
  {
    return this.http.get<Product>(`${this.apiURL}/products/${id}`)
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
    return this.http.get<Product[]>(`${this.apiURL}/products`, {
      params:{limit , offset}
    })
  }

  create(dto:CreateProductDTO ){
    return this.http.post<Product>(`${this.apiURL}/products`,dto);
  }

  update(id: string,dto: UpdateProductDTO  ){

    return this.http.put<Product>(`${this.apiURL}/products/${id}`, dto);
  }

  delete(id: string){

    return this.http.delete<boolean>(`${this.apiURL}/products/${id}`);

  }

}
