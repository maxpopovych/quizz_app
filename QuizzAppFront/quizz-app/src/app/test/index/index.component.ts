import { Component, OnInit } from '@angular/core';

import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  tests!: Test[];
  
  constructor(public testService: TestService) { }
  
  ngOnInit(): void {
    this.testService.getAll().subscribe((data: Test[])=>{
      this.tests = data;
      console.log(this.tests);
    })  
  }
  
  deleteTest(id: any){
    this.testService.delete(id).subscribe(res => {
         this.tests = this.tests.filter(item => item.id !== id);
         console.log('Test deleted successfully!');
    })
  }
}
