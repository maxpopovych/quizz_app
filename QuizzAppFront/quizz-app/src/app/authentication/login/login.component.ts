import { UserForAuthentication } from './../../_interfaces/user/userForAuthentication.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from './../../shared/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });
  public errorMessage: string = '';
  public showError: boolean = false;
  private _returnUrl: string = this._route.snapshot.queryParams['returnUrl'] || '/';

  constructor(private _authService: AuthenticationService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })

    this._returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';
  }

  public validateControl = (controlName: string) => {
    return this.loginForm.controls[controlName].invalid && this.loginForm.controls[controlName].touched
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.loginForm.controls[controlName].hasError(errorName)
  }

  public loginUser = (loginFormValue: any) => {
    this.showError = false;
    const login = {... loginFormValue };
    const userForAuth: UserForAuthentication = {
      username: login.username,
      password: login.password
    }

    this._authService.loginUser('api/users/authenticate', userForAuth)
    .subscribe(res => {
       localStorage.setItem("token", res.token);
       this._authService.sendAuthStateChangeNotification(res.isAuthSuccessful);
       this._router.navigate([this._returnUrl]);
    },
    (error) => {
      this.errorMessage = error;
      this.showError = true;
    })
  }

}