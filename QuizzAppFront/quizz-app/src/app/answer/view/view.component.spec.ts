import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentA } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponentA;
  let fixture: ComponentFixture<ViewComponentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
