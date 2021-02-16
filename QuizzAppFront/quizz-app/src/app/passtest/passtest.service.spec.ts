import { TestBed } from '@angular/core/testing';

import { PasstestService } from './passtest.service';

describe('PasstestService', () => {
  let service: PasstestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PasstestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
