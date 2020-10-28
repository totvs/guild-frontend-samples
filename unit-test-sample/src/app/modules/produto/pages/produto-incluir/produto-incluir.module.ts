import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PoButtonModule, PoFieldModule, PoPageModule } from '@po-ui/ng-components';
import { CoreModule } from '../../../../core/core.module';
import { ProdutoIncluirComponent } from './produto-incluir.component';

@NgModule({
  declarations: [
    ProdutoIncluirComponent
  ],
  imports: [
    CoreModule,
    FormsModule,
    PoButtonModule,
    PoPageModule,
    PoFieldModule,
    ReactiveFormsModule
  ]
})
export class ProdutoIncluirModule { }
