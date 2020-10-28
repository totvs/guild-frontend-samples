import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoListarRoutingModule } from './produto-listar-routing.module';
import { ProdutoListarComponent } from './produto-listar.component';


@NgModule({
  declarations: [ProdutoListarComponent],
  imports: [
    CommonModule,
    ProdutoListarRoutingModule
  ]
})
export class ProdutoListarModule { }
