import { TestBed } from '@angular/core/testing';

import { ProdutoAlterarService } from './produto-alterar.service';

describe('ProdutoAlterarService', () => {
  let service: ProdutoAlterarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoAlterarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
