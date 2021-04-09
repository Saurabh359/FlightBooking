import { TestBed } from '@angular/core/testing';

import { MarketingDataService } from './marketing-data.service';

describe('MarketingDataService', () => {
  let service: MarketingDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MarketingDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
