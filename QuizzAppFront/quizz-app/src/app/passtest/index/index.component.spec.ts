import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentP } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentP;
  let fixture: ComponentFixture<IndexComponentP>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentP ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentP);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
