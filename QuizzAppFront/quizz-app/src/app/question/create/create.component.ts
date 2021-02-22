import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Question } from '../question';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentQ implements OnInit {
  
  form!: FormGroup;
  question!: Question;
  id!: number;
   
  constructor(
    public questionService: QuestionService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      text: new FormControl('', Validators.required)
    });
    this.id = this.route.snapshot.params['questionId'];
    this.question = {id:0,text:'',testId:this.id};
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    this.question.text = this.form.controls['text'].value;
    this.question.testId = parseInt(this.route.snapshot.params['questionId']);
    console.log(this.question);
    this.questionService.create(this.question).subscribe(res => {
         console.log('Question created successfully!');
         this.router.navigateByUrl('question/'+this.id+'/index');
    })
  }
  
}