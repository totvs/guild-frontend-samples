import { v4 } from 'uuid';
import { IProduto } from './../../src/app/core/entities/produto/produto.interface';

export const collectionName = 'produtos';
export const produtos: IProduto[] = [
  {
    id: v4(),
    codigo: 'PR001',
    descricao: 'Produto 001',
    codigoExterno: 'AFGW874'
  },
  {
    id: v4(),
    codigo: 'PR002',
    descricao: 'Produto 002',
    codigoExterno: 'SWYG571'
  },
  {
    id: v4(),
    codigo: 'PR003',
    descricao: 'Produto 003'
  },
  {
    id: v4(),
    codigo: 'PR004',
    descricao: 'Produto 004',
    codigoExterno: 'QPAV157'
  },
  {
    id: v4(),
    codigo: 'PR005',
    descricao: 'Produto 005'
  },
  {
    id: v4(),
    codigo: 'PR006',
    descricao: 'Produto 006'
  },
  {
    id: v4(),
    codigo: 'PR007',
    descricao: 'Produto 007'
  },
  {
    id: v4(),
    codigo: 'PR008',
    descricao: 'Produto 004',
    codigoExterno: 'QPAV157'
  },
  {
    id: v4(),
    codigo: 'PR009',
    descricao: 'Produto 009',
    codigoExterno: 'QSKF879'
  },
  {
    id: v4(),
    codigo: 'PR010',
    descricao: 'Produto 010',
    codigoExterno: 'PLFDK557'
  },
  {
    id: v4(),
    codigo: 'PR011',
    descricao: 'Produto 011',
    codigoExterno: 'QLKF157'
  }
];
