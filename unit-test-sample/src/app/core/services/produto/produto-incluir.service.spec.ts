import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProdutoIncluirService } from './produto-incluir.service';

describe('produto-incluir.service.spec | ProdutoIncluirService', () => {

  let service: ProdutoIncluirService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoIncluirService]
    });
    service = TestBed.inject(ProdutoIncluirService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
