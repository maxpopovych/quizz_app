import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.css']
})
export class TestListComponent implements OnInit {

  tests: any;
  currentTest = null;
  currentIndex = -1;
  name = '';

  constructor(private testService: TestService) { }

  ngOnInit(): void {
    this.readTests();
  }

  readTests(): void {
    this.testService.readAll()
      .subscribe(
        tests => {
          this.tests = tests;
          console.log(tests);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readTests();
    this.currentTest = null;
    this.currentIndex = -1;
  }

  setCurrentTest(test: null, index: number): void {
    this.currentTest = test;
    this.currentIndex = index;
  }


} 