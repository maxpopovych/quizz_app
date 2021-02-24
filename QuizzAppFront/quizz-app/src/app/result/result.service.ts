import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Userchoice } from './userchoice';
import { Result } from './result';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ResultService {

  private apiURL = environment.urlAddress+ "/test";

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Result[]> {
    return this.httpClient.get<Result[]>(this.apiURL, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  find(id: number): Observable<Userchoice[]> {
    return this.httpClient.get<Userchoice[]>(this.apiURL + '/user/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  findRes(id: number): Observable<Result> {
    return this.httpClient.get<Result>(this.apiURL + '/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }

  errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
 }
 
}
