import { TestBed } from '@angular/core/testing';

import { AccessTestService } from './access-test.service';

describe('AccessTestService', () => {
  let service: AccessTestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessTestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
