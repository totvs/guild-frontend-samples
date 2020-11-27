import { NgModule } from '@angular/core';
import { PoPageModule } from '@po-ui/ng-components';
import { CoreModule } from '../../../../core/core.module';
import { InicioDashboardComponent } from './inicio-dashboard.component';

@NgModule({
  declarations: [
    InicioDashboardComponent
  ],
  imports: [
    CoreModule,
    PoPageModule
  ]
})
export class InicioDashboardModule { }
