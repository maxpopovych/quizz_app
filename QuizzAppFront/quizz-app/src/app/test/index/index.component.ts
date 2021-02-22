import { Component, OnInit } from '@angular/core';

import { Test } from '../test';
import { TestService } from '../test.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentT implements OnInit {

  tests!: Test[];
  
  constructor(public testService: TestService) { }
  
  ngOnInit(): void {
    this.testService.getAll().subscribe((data: Test[])=>{
      this.tests = data;
      this.tests.forEach(element => {
        element.sstartDate = new Date(element.startDate).toDateString();
        element.sendDate = new Date(element.endDate).toDateString();
      });
      console.log(this.tests);
    })  
  }

  copyLink(id: number){
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = 'http://localhost:4200/passTest/'+id;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
  
  deleteTest(id: any){
    this.testService.delete(id).subscribe(res => {
         this.tests = this.tests.filter(item => item.id !== id);
         console.log('Test deleted successfully!');
    })
  }
}
