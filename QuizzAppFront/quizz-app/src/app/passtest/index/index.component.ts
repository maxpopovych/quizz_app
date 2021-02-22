import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from 'src/app/answer/answer';
import { AnswerService } from 'src/app/answer/answer.service';
import { Question } from 'src/app/question/question';
import { QuestionService } from 'src/app/question/question.service';
import { Test } from 'src/app/test/test';
import { TestService } from 'src/app/test/test.service';
import { AccessTestService } from '../access-test.service';
import { Passtest } from '../passtest';
import { PasstestService } from '../passtest.service';
import { SendResult } from '../send-result';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentP implements OnInit {

  form!:FormGroup;
  id!:number;
  test!:Test;
  questions!:Question[];
  passtest!:Passtest;
  send!:SendResult;
  hasName!:boolean;

  constructor(
    public accesstestService: AccessTestService,
    public answerService: AnswerService,
    public testService: TestService,
    public questionService: QuestionService,
    public sendService: PasstestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      intervieweeName:new FormControl('')
    });
    this.id = this.route.snapshot.params['testId'];

    this.accesstestService.start(this.id).subscribe(x=>{});

    this.testService.find(this.id).subscribe(x=> {this.test = x
      if(!(this.test.intervieweeName === null || this.test.intervieweeName === undefined || this.test.intervieweeName == ""))
      {
        this.hasName = true;
      }
      else
      {
        this.hasName = false;
      }
    });
      
    this.questionService.getAll(this.id).subscribe((data: Question[])=>{
      this.questions = data; 
      this.questions.forEach(element => {
        this.answerService.getAll(element.id).subscribe((data: Answer[])=>{
          element.answers = data;
          this.form.addControl(element.text,new FormControl('', Validators.required));
      });

    });
        
  });
  }
  submit():void {

    this.accesstestService.end(this.id);

    this.send = {testId:0,name:'',answers:{}}
    if(this.hasName)
    {
      this.send.name = this.test.intervieweeName ?? "";
    }
    else{
      this.send.name = this.form.controls['intervieweeName'].value;
    }
    
    this.send.testId = this.id;
    this.send.answers = this.form.value;
    delete this.send.answers['intervieweeName'];
    this.sendService.create(this.send).subscribe(res => {
      console.log('Result send Successfully!');
      this.router.navigateByUrl('/success');
 });
  }
}
