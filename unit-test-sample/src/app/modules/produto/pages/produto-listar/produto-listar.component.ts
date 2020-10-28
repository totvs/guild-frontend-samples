import { Component, OnInit } from '@angular/core';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';
import { ProdutoBuscarService } from './../../../../core/services/produto/produto-buscar.service';

@Component({
  selector: 'app-produto-listar',
  templateUrl: './produto-listar.component.html',
  styleUrls: ['./produto-listar.component.css']
})
export class ProdutoListarComponent implements OnInit {

  carregando = false;
  carregandoMaisProdutos = false;

  breadcrumb: PoBreadcrumb = {
    items: [
      {
        label: 'Início',
        link: '/'
      },
      {
        label: 'Produto',
        link: '/produto'
      }
    ]
  };

  acoesPagina: PoPageAction[] = [
    {
      label: 'Novo produto',
      icon: 'po-icon-plus',
      action: () => {}
    }
  ];

  constructor(public produtoBuscarService: ProdutoBuscarService) { }

  ngOnInit(): void {
    this.carregando = true;
    this.produtoBuscarService.buscarProdutos().subscribe(
      () => { },
      () => { },
      () => this.carregando = false
    );
  }

  carregarMaisProdutos(): void {
    this.carregandoMaisProdutos = true;
    this.produtoBuscarService.buscarMaisProdutos().subscribe(
      () => { },
      () => { },
      () => this.carregandoMaisProdutos = false
    );
  }
}
