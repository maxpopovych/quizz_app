import { Component, OnInit } from '@angular/core';
import { AnswerService } from '../answer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Answer } from '../answer';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  id!: number;
  answer!: Answer;
  form!: FormGroup;
  
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
    
    this.form = new FormGroup({
      test: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    this.answer.test = this.form.controls['test'].value;
    //this.answer.testId = this.route.snapshot.params['answerId'];
    console.log(this.form.value);
    console.log(this.answer);
    this.answerService.update(this.answer).subscribe(res => {
         console.log('Answer updated successfully!');
         this.router.navigateByUrl('answer/'+this.answer.questionId+'/index');
    })
  }
   
}