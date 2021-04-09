import { TestBed } from '@angular/core/testing';

import { FeedbackDataService } from './feedback-data.service';

describe('FeedbackDataService', () => {
  let service: FeedbackDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeedbackDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
