import { TestBed } from '@angular/core/testing';

import { Data.CommentService } from './data.comment.service';

describe('Data.CommentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Data.CommentService = TestBed.get(Data.CommentService);
    expect(service).toBeTruthy();
  });
});
