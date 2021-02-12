import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
   
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
    });
  }
  
}