import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, switchMap, tap } from 'rxjs';

import {Auth} from '../models/auth.model'
import {User} from '../models/user.model'

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user = new BehaviorSubject<User | null>(null);
  user$ = this.user.asObservable();
  private apiURL='https://young-sands-07814.herokuapp.com/api/auth'
  

  constructor(
    private http:HttpClient,
    private tokenservice: TokenService
  ) { }

  login(email:string , password: string){
    return this.http.post<Auth>(`${this.apiURL}/login`, {email,password})
    .pipe(
      tap(response => this.tokenservice.saveToken(response.access_token))
      
    );
  }

  getProfile(token: string) {
    // const headers = new HttpHeaders();
    // headers.set('Authorization',  `Bearer ${token}`);
    return this.http.get<User>(`${this.apiURL}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
        // 'Content-type': 'application/json'
      }
    });
  }


  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile()),
    )
  }

  profile(){
    //const headers = new HttpHeaders();
    //headers.set(`Authorization`, `Bearer ${token}`);
    return this.http.get<User>(`${this.apiURL}/profile`,{
    // headers:{
    //   Authorization: `Bearer ${token}`,
    //   //'Content-type': 'application/json'
    // }
    });
  }
}
