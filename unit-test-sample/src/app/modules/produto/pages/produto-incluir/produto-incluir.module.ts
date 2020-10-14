import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { ProdutoIncluirComponent } from './produto-incluir.component';

@NgModule({
  declarations: [
    ProdutoIncluirComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    PoButtonModule,
    PoPageModule,
    PoFieldModule,
    ReactiveFormsModule
  ]
})
export class ProdutoIncluirModule { }
