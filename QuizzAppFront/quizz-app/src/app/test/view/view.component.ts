import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponentT implements OnInit {
   
  id!: number;
  test!: Test;
   
  constructor(
    public testService: TestService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['testId'];
      
    this.testService.find(this.id).subscribe((data: Test)=>{
      this.test = data;
      this.test.sstartDate = new Date(this.test.startDate).toDateString();
      this.test.sendDate = new Date(this.test.endDate).toDateString();
    });
  }
  
}