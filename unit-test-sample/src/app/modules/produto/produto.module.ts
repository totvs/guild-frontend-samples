import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProdutoIncluirModule } from './pages/produto-incluir/produto-incluir.module';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  exports: [
    ProdutoIncluirModule
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
