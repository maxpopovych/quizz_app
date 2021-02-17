import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { SendResult } from './send-result';

@Injectable({
  providedIn: 'root'
})
export class PasstestService {

  private apiURL = "https://localhost:5001/test/";  

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }

  constructor(private httpClient: HttpClient) { }

  
  create(answer : SendResult): Observable<SendResult> {
    console.log(JSON.stringify(answer));
    return this.httpClient.post<SendResult>(this.apiURL, JSON.stringify(answer), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
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
