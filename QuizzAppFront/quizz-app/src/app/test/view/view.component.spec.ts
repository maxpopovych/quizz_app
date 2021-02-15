import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentT } from './view.component';

describe('ViewComponentT', () => {
  let component: ViewComponentT;
  let fixture: ComponentFixture<ViewComponentT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentT ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
