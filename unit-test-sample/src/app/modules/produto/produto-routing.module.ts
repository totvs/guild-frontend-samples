import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoAlterarComponent } from './pages/produto-alterar/produto-alterar.component';
import { ProdutoIncluirComponent } from './pages/produto-incluir/produto-incluir.component';
import { ProdutoListarComponent } from './pages/produto-listar/produto-listar.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoListarComponent
  },
  {
    path: 'novo',
    component: ProdutoIncluirComponent
  },
  {
    path: ':id',
    component: ProdutoAlterarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
