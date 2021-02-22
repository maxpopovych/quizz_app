import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
   
import {  Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
  
import { Question } from './question';
   
@Injectable({
  providedIn: 'root'
})
export class QuestionService {
   
  private apiURL = "https://localhost:5001/api/Questions/";
   
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem("token")}`
    })
  }
  
  constructor(private httpClient: HttpClient) { }
   
  getAll(id:number): Observable<Question[]> {
    return this.httpClient.get<Question[]>(this.apiURL+ 'test/' + id, this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  create(question : Question): Observable<Question> {
    return this.httpClient.post<Question>(this.apiURL, JSON.stringify(question), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }  
   
  find(id:number): Observable<Question> {
    return this.httpClient.get<Question>(this.apiURL + id)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  update(question:Question): Observable<Question> {
    return this.httpClient.put<Question>(this.apiURL, JSON.stringify(question), this.httpOptions)
    .pipe(
      catchError(this.errorHandler)
    )
  }
   
  delete(id:number){
    return this.httpClient.delete<Question>(this.apiURL + id, this.httpOptions)
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