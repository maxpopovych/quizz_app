import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ResultService } from '../result.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentR implements OnInit {

  results!:Result[];

  constructor(public resultService: ResultService) { }

  ngOnInit(): void {
    this.resultService.getAll().subscribe((data: Result[])=>{
      this.results = data;
      console.log(this.results);
    })  
  }

}
