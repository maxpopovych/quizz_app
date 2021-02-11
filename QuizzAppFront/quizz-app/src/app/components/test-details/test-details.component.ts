import { Component, OnInit } from '@angular/core';
import { TestService } from 'src/app/services/test.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from 'src/app/app.module';


@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit {
  test : any;
  message = '';

  constructor(
    private testService: TestService,
    private route: ActivatedRoute,
    private router: Router) { }
 
  ngOnInit(): void {
    this.message = '';
    this.getTest(this.route.snapshot.paramMap.get('id'));
  }

  getTest(id: string | null): void {
    this.testService.read(id)
      .subscribe(
        test => {
          this.test = test;
          console.log(test);
        },
        error => {
          console.log(error);
        });
  }

  setAvailableStatus(status: any): void {
    const data = {
      name: this.test.name,
      description: this.test.description,
      available: status
    };

    this.testService.update(this.test.id, data)
      .subscribe(
        response => {
          this.test.available = status;
          console.log(response);
        },
        error => {
          console.log(error);
        });
  }

  updateTest(): void {
    this.testService.update(this.test.id, this.test)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The test was updated!';
        },
        error => {
          console.log(error);
        });
  }

  deleteTest(): void {
    this.testService.delete(this.test.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/tests']);
        },
        error => {
          console.log(error);
        });
  }
}
