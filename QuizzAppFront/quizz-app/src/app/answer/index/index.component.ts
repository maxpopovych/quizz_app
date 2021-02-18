import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Location } from '@angular/common'



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentA implements OnInit {

  answers!: Answer[];
  id!: number;

  constructor(
    public answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location
    ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['answerId'];
    this.answerService.getAll(this.id).subscribe((data: Answer[])=>{
      this.answers = data;
      console.log(this.answers);
    })  
  }
  
  deleteAnswer(id: any){
    this.answerService.delete(id).subscribe(res => {
         this.answers = this.answers.filter(item => item.id !== id);
         console.log('Answer deleted successfully!');
    })
  }

  setTrue(id: number){
    this.answerService.setTrue(id).subscribe(res => {
         console.log('Answer set true successfully!');
    })
  }

  back(): void {
    this.location.back()
  }
  
}
