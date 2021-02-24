import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Answer } from '../answer';
import { AnswerService } from '../answer.service';
import { Location } from '@angular/common'
import { QuestionService } from 'src/app/question/question.service';



@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentA implements OnInit {

  answers!: Answer[];
  id!: number;
  quest_id!:number;
  test_id!:number;

  constructor(
    public answerService: AnswerService,
    public questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['answerId'];
    this.answerService.getAll(this.id).subscribe((data: Answer[])=>{
      this.answers = data;
      if(!(data[0] == null || data[0] == undefined)){
        this.quest_id = data[0].questionId;
      }
      else{
        this.quest_id = 0;
      }
      this.questionService.find(this.quest_id).subscribe(x=>{this.test_id = x.testId;})
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
  
}
