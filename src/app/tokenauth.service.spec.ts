import { TestBed } from '@angular/core/testing';

import { TokenauthService } from './tokenauth.service';

describe('TokenauthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenauthService = TestBed.get(TokenauthService);
    expect(service).toBeTruthy();
  });
});
