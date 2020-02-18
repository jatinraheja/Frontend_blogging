import { TestBed } from '@angular/core/testing';

import { BlogsdataService } from './blogsdata.service';

describe('BlogsdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlogsdataService = TestBed.get(BlogsdataService);
    expect(service).toBeTruthy();
  });
});
