import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentQ } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentQ;
  let fixture: ComponentFixture<IndexComponentQ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentQ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentQ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
