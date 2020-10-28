import { dataService, IBackendService } from 'web-backend-api';
import { IProduto } from './../../src/app/core/entities/produto/produto.interface';
import { collectionName, produtos } from './produto.mock';

dataService(collectionName, (dbService: IBackendService) => {
  produtos.forEach((produto: IProduto) => dbService.storeData(collectionName, produto));
});
