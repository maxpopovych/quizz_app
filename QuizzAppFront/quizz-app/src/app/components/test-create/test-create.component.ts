import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-create',
  templateUrl: './test-create.component.html',
  styleUrls: ['./test-create.component.css']
})
export class TestCreateComponent implements OnInit {
  test = {
    name: '',
    startDate: new Date,
    endDate: new Date,
    intervieweeName: '',
    numberOfRuns : 0
  };
  submitted = false;

  constructor(private testService: TestService) { }

  ngOnInit(): void {
  }

  createTest(): void {
    const data = {
      name: this.test.name,
      startDate: this.test.startDate,
      endDate: this.test.endDate,
      intervieweeName: this.test.intervieweeName,
      numberOfRuns : this.test.numberOfRuns
    };

    this.testService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newTest(): void {
    this.submitted = false;
    this.test = {
      name: '',
      startDate: new Date,
      endDate: new Date,
      intervieweeName: '',
      numberOfRuns : 0
    };
  }

}