import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccessTestService {

  private apiURL = "https://localhost:5001/api/access";  

  constructor(private httpClient: HttpClient) { }

  start(id: number){
    return this.httpClient.get(this.apiURL + '/start/' + id,{observe: 'response'});
  }

  end(id: number){
    return this.httpClient.get(this.apiURL + '/end/' + id,{observe: 'response'});
  }

  errorHandler(error:any) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }

}
