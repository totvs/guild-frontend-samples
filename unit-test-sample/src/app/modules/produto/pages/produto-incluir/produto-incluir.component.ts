import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-produto-incluir',
  templateUrl: './produto-incluir.component.html',
  styleUrls: ['./produto-incluir.component.css']
})
export class ProdutoIncluirComponent implements OnInit {

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
