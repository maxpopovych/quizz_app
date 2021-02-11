import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/services/test.service';
import { Test } from '../models/test';
 
@Component({
    selector: 'test',
    templateUrl: './test.component.html',
    providers: [DataService]
})
export class TestComponent implements OnInit {
 
    test: Test = new Test();   
    tests: Test[] | undefined;               
    tableMode: boolean = true;          
 
    constructor(private dataService: DataService) { }
 
    ngOnInit() {
        this.loadTests();    
    }
    loadTests() {
        this.dataService.getTests()
            .subscribe((data:any) => this.tests = data);
    }
    save() {
        if (this.test.Id == null) {
            this.dataService.createTest(this.test)
                .subscribe((data: Test) => {
                    return this.tests?.push(data);
                });
        } else {
            this.dataService.updateTest(this.test)
                .subscribe(data => this.loadTests());
        }
        this.cancel();
    }
    editTest(p: Test) {
        this.test = p;
    }
    cancel() {
        this.test = new Test();
        this.tableMode = true;
    }
    delete(p: Test) {
        this.dataService.deleteTest(p.Id)
            .subscribe(data => this.loadTests());
    }
    add() {
        this.cancel();
        this.tableMode = false;
    }
}