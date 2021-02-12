import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  form!: FormGroup;
   
  constructor(
    public testService: TestService,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      intervieweeName: new FormControl('', Validators.required),
      numberOfRuns: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
    
  submit(){
    console.log(this.form.value);
    this.testService.create(this.form.value).subscribe(res => {
         console.log('Test created successfully!');
         this.router.navigateByUrl('test/index');
    })
  }
  
}