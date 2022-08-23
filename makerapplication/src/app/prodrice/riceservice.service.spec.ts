import { TestBed } from '@angular/core/testing';

import { RiceserviceService } from './riceservice.service';

describe('RiceserviceService', () => {
  let service: RiceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
