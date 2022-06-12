import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

<<<<<<< HEAD
  constructor(private token:TokenService){}
=======
  constructor(
    private tokenservice:TokenService
  ){

  }
>>>>>>> origin/master

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
<<<<<<< HEAD
      const token = this.token.getToken();
=======
    const token = this.tokenservice.getToken();
>>>>>>> origin/master
    return token? true:false;
  }
  
}
