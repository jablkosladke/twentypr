import { TestBed } from '@angular/core/testing';

import { SugarserviceService } from './sugarservice.service';

describe('SugarserviceService', () => {
  let service: SugarserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SugarserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
