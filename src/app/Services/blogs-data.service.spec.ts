import { TestBed } from '@angular/core/testing';

import { BlogsDataService } from './blogs-data.service';

describe('BlogsDataService', () => {
  let service: BlogsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
