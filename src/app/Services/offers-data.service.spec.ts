import { TestBed } from '@angular/core/testing';

import { OffersDataService } from './offers-data.service';

describe('OffersDataService', () => {
  let service: OffersDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffersDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
