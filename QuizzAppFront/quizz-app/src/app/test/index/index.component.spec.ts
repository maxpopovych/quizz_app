import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentT } from './index.component';

describe('IndexComponentT', () => {
  let component: IndexComponentT;
  let fixture: ComponentFixture<IndexComponentT>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentT ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentT);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
