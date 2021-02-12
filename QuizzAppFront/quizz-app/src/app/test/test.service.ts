import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Test } from './test';
   
@Injectable({
  providedIn: 'root'
})
export class TestService {
   
  private apiURL = "https://localhost:5001/api";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(): Observable<Test[]> {
    return this.httpClient.get<Test[]>(this.apiURL + '/tests/', this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(test: Test): Observable<Test> {
    return this.httpClient.post<Test>(this.apiURL + '/tests/', JSON.stringify(test), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id: number): Observable<Test> {
    return this.httpClient.get<Test>(this.apiURL + '/tests/' + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(test: Test): Observable<Test> {
    return this.httpClient.put<Test>(this.apiURL + '/tests/', JSON.stringify(test), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id: number){
    return this.httpClient.delete<Test>(this.apiURL + '/tests/' + id, this.httpOptions)
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