import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ProdutoAlterarService } from './produto-alterar.service';

describe('produto-alterar.service.spec | ProdutoAlterarService', () => {

  let service: ProdutoAlterarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProdutoAlterarService]
    });
    service = TestBed.inject(ProdutoAlterarService);
  });

  it('deve criar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
