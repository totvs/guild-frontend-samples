import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { IProduto } from '../../entities/produto/produto.interface';

@Injectable()
export class ProdutoGetByIdService {

  public static ENDPOINT = `${environment.backend}/api/v1/produtos/{0}`;

  constructor(private readonly httpClient: HttpClient) { }

  buscarProdutoPorId(id: string): Observable<IProduto> {
    return this.httpClient.get<IProduto>(
      ProdutoGetByIdService.ENDPOINT.replace('{0}', id)
    );
  }
}
