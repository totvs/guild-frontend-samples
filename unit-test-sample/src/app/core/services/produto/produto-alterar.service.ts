import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import { IProduto } from '../../entities/produto/produto.interface';

@Injectable()
export class ProdutoAlterarService {

  public static ENDPOINT = `${environment.backend}/api/v1/produtos/{0}`;

  constructor(private readonly httpClient: HttpClient) { }

  alterarProduto(produto: IProduto): Observable<IProduto> {
    return this.httpClient.post<void>(
      ProdutoAlterarService.ENDPOINT.replace('{0}', produto.id), produto
    ).pipe(map(() => produto));
  }
}
