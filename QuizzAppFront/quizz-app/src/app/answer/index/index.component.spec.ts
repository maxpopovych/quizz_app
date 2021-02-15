import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentA } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentA;
  let fixture: ComponentFixture<IndexComponentA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentA);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
