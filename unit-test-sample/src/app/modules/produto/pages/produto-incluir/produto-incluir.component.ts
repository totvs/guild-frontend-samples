import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PoBreadcrumb, PoPageAction } from '@po-ui/ng-components';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

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

  produtoForm: FormGroup;

  constructor(private readonly formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.produtoForm = this.formBuilder.group({
      codigo: [null],
      nome: [null],
      possuiCodigoExterno: [null],
      codigoExterno: [null]
    });
  }

  validar(): void {
    console.log(this.produtoForm.valid, this.produtoForm.get('codigoExterno').errors);
  }
}
