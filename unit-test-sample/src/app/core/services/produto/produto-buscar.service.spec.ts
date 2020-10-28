import { TestBed } from '@angular/core/testing';
import { ProdutoBuscarService } from './produto-buscar.service';


describe('ProdutoBuscarService', () => {
  let service: ProdutoBuscarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdutoBuscarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
