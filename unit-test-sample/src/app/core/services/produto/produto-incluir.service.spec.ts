import { TestBed } from '@angular/core/testing';

import { ProdutoIncluirService } from './produto-incluir.service';

describe('ProdutoIncluirService', () => {
  let service: ProdutoIncluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoIncluirService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
