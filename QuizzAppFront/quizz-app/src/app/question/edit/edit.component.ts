import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from '../question';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponentQ implements OnInit {
    
  id!: number;
  question!: Question;
  form!: FormGroup;
  
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
    
    this.form = new FormGroup({
      text: new FormControl('', [Validators.required])
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    this.question.text = this.form.controls['text'].value;
    //this.question.testId = this.route.snapshot.params['questionId'];
    console.log(this.form.value);
    console.log(this.question);
    this.questionService.update(this.question).subscribe(res => {
         console.log('Question updated successfully!');
         this.router.navigateByUrl('question/'+this.question.testId+'/index');
    })
  }
   
}