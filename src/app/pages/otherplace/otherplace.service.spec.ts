import { TestBed, inject } from '@angular/core/testing';

import { OtherplaceService } from './otherplace.service';

describe('OtherplaceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OtherplaceService]
    });
  });

  it('should be created', inject([OtherplaceService], (service: OtherplaceService) => {
    expect(service).toBeTruthy();
  }));
});
