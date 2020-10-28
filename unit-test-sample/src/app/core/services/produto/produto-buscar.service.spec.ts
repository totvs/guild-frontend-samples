import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { IProduto } from './../../entities/produto/produto.interface';
import { ProdutoBuscarService } from './produto-buscar.service';

fdescribe('ProdutoBuscarService', () => {

  let service: ProdutoBuscarService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ProdutoBuscarService
      ]
    });
    service = TestBed.inject(ProdutoBuscarService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('Deve instanciar o serviço', () => {
    expect(service).toBeTruthy();
    expect(service.items).toEqual([]);
    expect(service.tamanhoPagina).toBe(10);
    expect(service.temProximaPagina).toBe(false, 'A próxima página deveria ser false');
    expect(service.paginaAtual).toBe(1);
  });

  it('Deve buscar produtos da primeira página', () => {

    const retornoEsperado: IProduto[] = [
      {
        id: 'id1',
        codigo: 'PR001',
        descricao: 'Produto 001',
        codigoExterno: 'AFGW874'
      },
      {
        id: 'id2',
        codigo: 'PR002',
        descricao: 'Produto 002',
        codigoExterno: 'SWYG571'
      }
    ];

    service.buscarProdutos().subscribe(resultado => {
      expect(resultado.length).toBe(2);
      expect(service.temProximaPagina).toBeTrue();
      expect(resultado).toEqual(retornoEsperado);
      expect(service.items).toEqual(retornoEsperado);
    });

    httpMock.expectOne((requisicao) => {
      return requisicao.method === 'GET' &&
        requisicao.params.has('page') &&
        requisicao.params.get('page') === '1' &&
        requisicao.params.has('pageSize') &&
        requisicao.params.get('pageSize') === '10' &&
        requisicao.url.indexOf(ProdutoBuscarService.ENDPOINT) !== -1;
    }).flush({
      hasNext: true,
      items: retornoEsperado
    });
  });

  it('Não deve buscar produtos da primeira página quando ocorre erro no servidor', () => {

    service.buscarProdutos().subscribe(() => { }, (error) => {
      expect(error.error.code).toBe('1');
    });

    httpMock.expectOne((requisicao) => {
      return requisicao.method === 'GET' &&
        requisicao.params.has('page') &&
        requisicao.params.get('page') === '1' &&
        requisicao.params.has('pageSize') &&
        requisicao.params.get('pageSize') === '10' &&
        requisicao.url.indexOf(ProdutoBuscarService.ENDPOINT) !== -1;
    }).flush({
      code: '1',
      message: 'Error'
    }, {
      status: 400,
      statusText: 'Error'
    });
  });

  it('Deve buscar mais produtos da segunda página', () => {

    const itemJaCarregado: IProduto = {
      id: 'id1',
      codigo: 'PR001',
      descricao: 'Produto 001',
      codigoExterno: 'AFGW874'
    };
    service.temProximaPagina = true;
    service.items = [itemJaCarregado];

    const retornoEsperado: IProduto[] = [
      {
        id: 'id2',
        codigo: 'PR002',
        descricao: 'Produto 002',
        codigoExterno: 'SWYG571'
      }
    ];

    service.buscarMaisProdutos().subscribe(resultado => {
      expect(resultado.length).toBe(1);
      expect(service.temProximaPagina).toBeFalse();
      expect(service.paginaAtual).toBe(2);
      expect(service.items).toEqual([itemJaCarregado, ...retornoEsperado]);
    });

    httpMock.expectOne((requisicao) => {
      return requisicao.method === 'GET' &&
        requisicao.params.has('page') &&
        requisicao.params.get('page') === '2' &&
        requisicao.params.has('pageSize') &&
        requisicao.params.get('pageSize') === '10' &&
        requisicao.url.indexOf(ProdutoBuscarService.ENDPOINT) !== -1;
    }).flush({
      hasNext: false,
      items: retornoEsperado
    });
  });

  it('Não deve buscar mais produtos se não houver próxima página', () => {

    expect(() => service.buscarMaisProdutos().subscribe()).toThrow(
      new Error('Não é possível buscar mais produtos, pois não há outra página')
    );
  });
});
