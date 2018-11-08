import { TestBed } from '@angular/core/testing';

import { BuzzesService } from './data.buzzes.service';

describe('Data.BuzzService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BuzzesService = TestBed.get(BuzzesService);
    expect(service).toBeTruthy();
  });
});
