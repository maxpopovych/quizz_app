import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../answer';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponentA implements OnInit {

  id!:number;
  answer!:Answer;

  constructor(
    public answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['answerId'];
      
    this.answerService.find(this.id).subscribe((data: Answer)=>{
      this.answer = data;
    });
  }

}
