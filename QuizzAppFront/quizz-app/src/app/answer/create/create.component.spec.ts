import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentA } from './create.component';

describe('CreateComponentA', () => {
  let component: CreateComponentA;
  let fixture: ComponentFixture<CreateComponentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
