import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProdutoGetByIdService } from './produto-buscar-por-id.service';

describe('produto-buscar-por-id.service.spec | ProdutoGetByIdService', () => {

  let service: ProdutoGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoGetByIdService]
    });
    service = TestBed.inject(ProdutoGetByIdService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
