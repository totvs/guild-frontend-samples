import { NgModule } from '@angular/core';
import { PoContainerModule, PoPageModule, PoTableModule } from '@po-ui/ng-components';
import { CoreModule } from '../../../../core/core.module';
import { ProdutoBuscarService } from '../../../../core/services/produto/produto-buscar.service';
import { ProdutoListarRoutingModule } from './produto-listar-routing.module';
import { ProdutoListarComponent } from './produto-listar.component';

@NgModule({
  declarations: [
    ProdutoListarComponent
  ],
  imports: [
    CoreModule,
    PoPageModule,
    PoTableModule,
    PoContainerModule,
    ProdutoListarRoutingModule
  ],
  providers: [
    ProdutoBuscarService
  ]
})
export class ProdutoListarModule { }
