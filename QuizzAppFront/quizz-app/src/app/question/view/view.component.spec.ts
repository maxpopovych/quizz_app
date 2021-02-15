import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentQ } from './view.component';

describe('ViewComponentQ', () => {
  let component: ViewComponentQ;
  let fixture: ComponentFixture<ViewComponentQ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentQ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentQ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
