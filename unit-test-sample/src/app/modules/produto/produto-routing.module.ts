import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoIncluirComponent } from './pages/produto-incluir/produto-incluir.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'incluir',
    pathMatch: 'full'
  },
  {
    path: 'incluir',
    component: ProdutoIncluirComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
