import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IProduto } from './../../entities/produto/produto.interface';

@Injectable()
export class ProdutoIncluirService {

  public static ENDPOINT = `${environment.backend}/api/v1/produtos`;

  constructor(private readonly httpClient: HttpClient) { }

  criarProduto(produto: IProduto): Observable<IProduto> {
    return this.httpClient.post<void>(
      ProdutoIncluirService.ENDPOINT,
      produto,
      { observe: 'response' }
    ).pipe(
      map((resposta: HttpResponse<void>) => {
        produto.id = resposta.headers.get('location');
        return produto;
      })
    );
  }
}
