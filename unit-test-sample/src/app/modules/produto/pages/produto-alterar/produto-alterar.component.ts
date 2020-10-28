import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-produto-alterar',
  templateUrl: './produto-alterar.component.html',
  styleUrls: ['./produto-alterar.component.css']
})
export class ProdutoAlterarComponent implements OnInit {

  breadcrumb: PoBreadcrumb = {
    items: [
      {
        label: 'Início',
        link: '/'
      },
      {
        label: 'Produto',
        link: '/produto'
      },
      {
        label: 'Novo produto',
        link: '/produto/novo'
      }
    ]
  };

  acoesPagina: PoPageAction[] = [
    {
      label: 'Salvar',
      action: () => { }
    },
    {
      label: 'Cancelar',
      action: () => { }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
