import { TestBed } from '@angular/core/testing';

import { ProdutoGetAllService } from './produto-get-all.service';

describe('ProdutoGetAllService', () => {
  let service: ProdutoGetAllService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoGetAllService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
