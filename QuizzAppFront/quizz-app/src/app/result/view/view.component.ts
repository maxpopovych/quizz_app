import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/answer/answer';
import { AnswerService } from 'src/app/answer/answer.service';
import { Question } from 'src/app/question/question';
import { QuestionService } from 'src/app/question/question.service';
import { Test } from 'src/app/test/test';
import { Result } from '../result';
import { ResultService } from '../result.service';
import { Userchoice } from '../userchoice';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponentR implements OnInit {


  userchoices!: Userchoice[];
  id!: number;
  questions!:Question[];
  answers!:Answer[];
  test!:Test;
  result!:Result;


  constructor(
    public resultService: ResultService,
    public questionService: QuestionService,
    public answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['resultId'];
    this.resultService.find(this.id).subscribe((data: Userchoice[])=>{
      this.userchoices = data;
      this.userchoices.forEach(element => {
        this.questionService.find(element.questionId).subscribe((data: Question)=>{
          element.questionText = data.text;
        });
        this.answerService.find(element.answerId).subscribe((data: Answer)=>{
          element.answerText = data.text;
        });
      });
      console.log(this.userchoices);
    });
    this.resultService.findRes(this.id).subscribe((data: Result)=>{
      this.result = data;
      console.log(this.result);
    });
  }

}
