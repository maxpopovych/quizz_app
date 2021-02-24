import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Answer } from './answer';
import { environment } from 'src/environments/environment';
   
@Injectable({
  providedIn: 'root'
})
export class AnswerService {
   
  private apiURL = `${environment.urlAddress}/api/Answers/`;
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(id:number): Observable<Answer[]> {
    return this.httpClient.get<Answer[]>(this.apiURL+ 'question/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(answer : Answer): Observable<Answer> {
    return this.httpClient.post<Answer>(this.apiURL, JSON.stringify(answer), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id:number): Observable<Answer> {
    return this.httpClient.get<Answer>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(answer:Answer): Observable<Answer> {
    return this.httpClient.put<Answer>(this.apiURL, JSON.stringify(answer), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id:number){
    return this.httpClient.delete<Answer>(this.apiURL + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  setTrue(id:number){
    console.log(this.httpOptions);
    console.log(this.apiURL +'setTrue/'+ id);
    return this.httpClient.put<Answer>(this.apiURL +'setTrue/'+ id, {} ,this.httpOptions)
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