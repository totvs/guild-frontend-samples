import { TestBed } from '@angular/core/testing';

import { ProdutoGetByIdService } from './produto-get-by-id.service';

describe('ProdutoGetByIdService', () => {
  let service: ProdutoGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoGetByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
