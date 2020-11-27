import { NgModule } from '@angular/core';
import { InicioRoutingModule } from './inicio-routing.module';
import { InicioDashboardModule } from './pages/inicio-dashboard/inicio.module';

@NgModule({
  imports: [
    InicioRoutingModule,
    InicioDashboardModule
  ]
})
export class InicioModule { }
