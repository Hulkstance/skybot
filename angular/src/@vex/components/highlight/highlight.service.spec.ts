import { TestBed } from '@angular/core/testing';

import { HighlightService } from '@vex';

describe('HighlightService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighlightService = TestBed.get(HighlightService);
    expect(service).toBeTruthy();
  });
});
