import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateComponentT } from './create.component';

describe('CreateComponentT', () => {
  let component: CreateComponentT;
  let fixture: ComponentFixture<CreateComponentT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateComponentT ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateComponentT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
