import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Test } from '../test';
import { FormGroup, FormControl, Validators} from '@angular/forms';
   
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
    
  id!: number;
  test!: Test;
  form!: FormGroup;
  
  constructor(
    public testService: TestService,
    private route: ActivatedRoute,
    private router: Router
  ) { }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['testId'];
    
    this.testService.find(this.id).subscribe((data: Test)=>{
      this.test = data;
    });
    
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      intervieweeName: new FormControl('', Validators.required),
      numberOfRuns: new FormControl('', [Validators.required]),
      startDate: new FormControl('', Validators.required),
      endDate: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }
     
  submit(){
    this.test.name = this.form.controls['name'].value;
    this.test.intervieweeName = this.form.controls['intervieweeName'].value;
    this.test.numberOfRuns = this.form.controls['numberOfRuns'].value;
    this.test.startDate = this.form.controls['startDate'].value;
    this.test.endDate = this.form.controls['endDate'].value;
    this.testService.update(this.test).subscribe(res => {
         console.log('Test updated successfully!');
         this.router.navigateByUrl('test/index');
    })
  }
   
}