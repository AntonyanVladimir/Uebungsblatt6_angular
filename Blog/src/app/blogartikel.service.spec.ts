import { TestBed } from '@angular/core/testing';

import { BlogartikelService } from './blogartikel.service';

describe('BlogartikelService', () => {
  let service: BlogartikelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogartikelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
