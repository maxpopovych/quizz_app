import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponentQ } from './edit.component';

describe('EditComponent', () => {
  let component: EditComponentQ;
  let fixture: ComponentFixture<EditComponentQ>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditComponentQ ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponentQ);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
