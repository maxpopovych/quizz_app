import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexComponentR } from './index.component';

describe('IndexComponent', () => {
  let component: IndexComponentR;
  let fixture: ComponentFixture<IndexComponentR>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexComponentR ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexComponentR);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
