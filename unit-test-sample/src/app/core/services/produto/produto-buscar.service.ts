import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiPadraoRespostaBuscar } from '../../entities/api/api-padrao-resposta-buscar.interface';
import { IProduto } from '../../entities/produto/produto.interface';
import { environment } from './../../../../environments/environment';

@Injectable()
export class ProdutoBuscarService {

  public static ENDPOINT = `${environment.backend}/api/v1/produtos`;

  private temProximaPaginaValor = false;
  get temProximaPagina(): boolean {
    return this.temProximaPaginaValor;
  }
  set temProximaPagina(valor: boolean) {
    this.temProximaPaginaValor = valor;
  }

  private paginaAtualValor = 1;
  get paginaAtual(): number {
    return this.paginaAtualValor;
  }

  private tamanhoPaginaValor = 10;
  get tamanhoPagina(): number {
    return this.tamanhoPaginaValor;
  }

  private itemsValor: IProduto[] = [];
  get items(): IProduto[] {
    return this.itemsValor;
  }
  set items(valor: IProduto[]) {
    this.itemsValor = valor;
  }

  constructor(private readonly httpClient: HttpClient) { }

  buscarProdutos(): Observable<IProduto[]> {

    this.paginaAtualValor = 1;
    const parametros: HttpParams = new HttpParams({
      fromObject: {
        pageSize: `${this.tamanhoPagina}`,
        page: `${this.paginaAtual}`
      }
    });

    return this.httpClient.get<ApiPadraoRespostaBuscar<IProduto>>(
      ProdutoBuscarService.ENDPOINT, { params: parametros }
    ).pipe(
      map((retorno: ApiPadraoRespostaBuscar<IProduto>) => {
        this.temProximaPaginaValor = retorno.hasNext;
        this.itemsValor = retorno.items;
        return this.itemsValor;
      })
    );
  }

  buscarMaisProdutos(): Observable<IProduto[]> {

    if (!this.temProximaPagina) {
      throw new Error('Não é possível buscar mais produtos, pois não há outra página');
    }

    this.paginaAtualValor++;

    const parametros: HttpParams = new HttpParams({
      fromObject: {
        pageSize: `${this.tamanhoPagina}`,
        page: `${this.paginaAtual}`
      }
    });

    return this.httpClient.get<ApiPadraoRespostaBuscar<IProduto>>(
      ProdutoBuscarService.ENDPOINT, { params: parametros }
    ).pipe(
      map((retorno: ApiPadraoRespostaBuscar<IProduto>) => {
        this.temProximaPaginaValor = retorno.hasNext;
        this.itemsValor = [...this.itemsValor, ...retorno.items];
        return retorno.items;
      })
    );
  }
}
