import { NgModule } from '@angular/core';
import { CoreModule } from './../../core/core.module';
import { ProdutoAlterarModule } from './pages/produto-alterar/produto-alterar.module';
import { ProdutoIncluirModule } from './pages/produto-incluir/produto-incluir.module';
import { ProdutoListarModule } from './pages/produto-listar/produto-listar.module';
import { ProdutoRoutingModule } from './produto-routing.module';

@NgModule({
  exports: [
    ProdutoListarModule,
    ProdutoIncluirModule,
    ProdutoAlterarModule
  ],
  imports: [
    CoreModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
