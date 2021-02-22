import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Answer } from '../answer';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponentA implements OnInit {
  
  form!: FormGroup;
  answer!: Answer;
  id!: number;
   
  constructor(
    public answerService: AnswerService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      test: new FormControl('', Validators.required)
    });
    this.id = this.route.snapshot.params['answerId'];
    this.answer = {id:0,test:'',questionId:this.id};
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    this.answer.test = this.form.controls['test'].value;
    this.answer.questionId = parseInt(this.route.snapshot.params['answerId']);
    console.log(this.answer);
    this.answerService.create(this.answer).subscribe(res => {
         console.log('Answer created successfully!');
         this.router.navigateByUrl('answer/'+this.id+'/index');
    })
  }
  
}