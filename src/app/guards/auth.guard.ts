import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable } from 'rxjs';
import { TokenService } from '../services/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private token:TokenService,
    private router:Router,
    private auth:AuthService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //   const token = this.token.getToken();
    //   if(!token)
    //   {
    //     this.router.navigate(['/home'])
    //     return false
    //   }
    // return true;
    return this.auth.user$
    .pipe(
      map(user=>{
        if(!user){
          this.router.navigate(['/home']);
          return false;
        }
        return true;
      })
    )
  }
  
}
