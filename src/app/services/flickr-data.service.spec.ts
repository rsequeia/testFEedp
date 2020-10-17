import { TestBed } from '@angular/core/testing';

import { FlickrDataService } from './flickr-data.service';

describe('FlickrDataService', () => {
  let service: FlickrDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlickrDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
