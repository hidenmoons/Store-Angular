import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Category } from '../models/categoria.model';
@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiurl='https://young-sands-07814.herokuapp.com/api/categories';
  
  constructor(
    private http:HttpClient,
    ) { }

    getallProducts(limit?: number, offset?:number){
      let params= new HttpParams();
      if(limit&& offset){
        params = params.set('limit', limit);
        params = params.set('offset', limit);
      }
      return this.http.get<Category[]>(this.apiurl,{params})
}
}