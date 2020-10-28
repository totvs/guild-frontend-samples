import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { CoreModule } from './../../../../core/core.module';
import { ProdutoAlterarComponent } from './produto-alterar.component';

@NgModule({
  declarations: [
    ProdutoAlterarComponent
  ],
  imports: [
    CoreModule,
    PoPageModule
  ]
})
export class ProdutoAlterarModule { }
