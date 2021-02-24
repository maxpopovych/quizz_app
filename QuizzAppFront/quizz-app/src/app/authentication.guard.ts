import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthguardServiceService } from './authguard-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {

  /*canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }*/
  constructor(private Authguardservice: AuthguardServiceService, private router: Router) {}  

  canActivate(): boolean
  {
    if (!this.Authguardservice.gettoken()) {  
      this.router.navigateByUrl("/authentication/login");  
    }  
  return this.Authguardservice.gettoken(); 
  }
  
}
