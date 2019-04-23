import { TestBed } from '@angular/core/testing';

import { MovieApiProviderService } from './movie-api-provider.service';

describe('MovieApiProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieApiProviderService = TestBed.get(MovieApiProviderService);
    expect(service).toBeTruthy();
  });
});
