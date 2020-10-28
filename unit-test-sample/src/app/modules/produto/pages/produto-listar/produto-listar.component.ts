import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PoBreadcrumb, PoPageAction, PoTableAction, PoTableColumn } from '@po-ui/ng-components';
import { IProduto } from './../../../../core/entities/produto/produto.interface';
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
      action: this.criarProduto.bind(this)
    }
  ];

  acoesTabela: PoTableAction[] = [
    {
      label: 'Alterar',
      icon: 'po-icon-edit',
      action: this.alterarProduto.bind(this)
    },
    {
      label: 'Excluir',
      icon: 'po-icon-delete',
      action: this.excluirProduto.bind(this)
    }
  ];

  colunas: PoTableColumn[] = [
    {
      label: 'Identificador',
      property: 'id',
      width: '270px'
    },
    {
      label: 'Código',
      property: 'codigo',
      width: '100px'
    },
    {
      label: 'Código Externo',
      property: 'codigoExterno',
      width: '150px'
    },
    {
      label: 'Descrição',
      property: 'descricao'
    }
  ];

  constructor(
    public produtoBuscarService: ProdutoBuscarService,
    private readonly router: Router,
    private readonly activatedRoute: ActivatedRoute
  ) { }

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

  criarProduto(): void {
    this.router.navigate(['./novo'], {
      relativeTo: this.activatedRoute
    });
  }

  alterarProduto(produto: IProduto): void {
    this.router.navigate([`./${produto.id}`], {
      relativeTo: this.activatedRoute
    });
  }

  excluirProduto(produto: IProduto): void {
    console.log('Excluir produto =>', produto);
  }
}
