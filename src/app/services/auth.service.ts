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

  private apiURL='https://young-sands-07814.herokuapp.com/api/auth'


  private user = new BehaviorSubject<User | null>(null);

  user$ = this.user.asObservable(); //observable signo pesos buenas practica



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

  loginAndGet(email: string, password: string) {
    return this.login(email, password)
    .pipe(
      switchMap(() => this.profile()),
    )
  }

  profile(){
    return this.http.get<User>(`${this.apiURL}/profile`).
    pipe(
      tap(user =>this.user.next(user))
    );
  }
  logout(){
    this.tokenservice.deleteToken();
  }
}
