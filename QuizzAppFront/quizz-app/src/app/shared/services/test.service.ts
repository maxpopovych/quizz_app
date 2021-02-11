import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Test } from './../../models/test';
 
@Injectable()
export class DataService {
 
    private url = "https://localhost:5001/api/tests";
 
    constructor(private http: HttpClient) {
    }
 
    getTests() {
        return this.http.get(this.url);
    }
     
    getTest(id: number) {
        return this.http.get(this.url + '/' + id);
    }
     
    createTest(Test: Test) {
        return this.http.post(this.url, Test);
    }
    updateTest(Test: Test) {
  
        return this.http.put(this.url, Test);
    }
    deleteTest(id: number|undefined) {
        return this.http.delete(this.url + '/' + id);
    }
}