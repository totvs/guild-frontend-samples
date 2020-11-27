import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioDashboardComponent } from './pages/inicio-dashboard/inicio-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: InicioDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
