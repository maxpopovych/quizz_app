import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Question } from '../question';
import { QuestionService } from '../question.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponentQ implements OnInit {

  questions!: Question[];
  id!: number;

  constructor(
    public questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
    ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['questionId'];
    this.questionService.getAll(this.id).subscribe((data: Question[])=>{
      this.questions = data;
      console.log(this.questions);
    })  
  }
  
  deleteQuestion(id: any){
    this.questionService.delete(id).subscribe(res => {
         this.questions = this.questions.filter(item => item.id !== id);
         console.log('Question deleted successfully!');
    })
  }
}
