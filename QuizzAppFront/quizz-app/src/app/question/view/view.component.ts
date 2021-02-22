import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
  
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponentQ implements OnInit {
   
  id!: number;
  question!: Question;
   
  constructor(
    public questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
   ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['questionId'];
      
    this.questionService.find(this.id).subscribe((data: Question)=>{
      this.question = data;
    });
  }
  
}