import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentQ } from './create.component';

describe('CreateComponentQ', () => {
  let component: CreateComponentQ;
  let fixture: ComponentFixture<CreateComponentQ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentQ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentQ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
