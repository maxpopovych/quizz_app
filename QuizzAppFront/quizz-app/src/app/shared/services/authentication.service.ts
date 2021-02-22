import { AuthResponse } from './../../_interfaces/response/AuthResponse.model';
import { UserForAuthentication } from './../../_interfaces/user/userForAuthentication.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EnvironmentUrlService } from './environment-url.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private _authChangeSub = new Subject<boolean>()
  public authChanged = this._authChangeSub.asObservable();
  
  constructor(private _http: HttpClient, private _envUrl: EnvironmentUrlService) { }

  public loginUser = (route: string, body: UserForAuthentication) => {
    return this._http.post<AuthResponse>(this.createCompleteRoute(route, this._envUrl.urlAddress), body);
  }

  public logout = () => {
    localStorage.removeItem("token");
    this.sendAuthStateChangeNotification(false);
  }

  public sendAuthStateChangeNotification = (isAuthenticated: boolean) => {
    this._authChangeSub.next(isAuthenticated);
  }

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  }
}