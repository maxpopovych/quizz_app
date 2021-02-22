import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewComponentR } from './view.component';

describe('ViewComponent', () => {
  let component: ViewComponentR;
  let fixture: ComponentFixture<ViewComponentR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewComponentR ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewComponentR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
