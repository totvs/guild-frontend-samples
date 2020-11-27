import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PoI18nModule, PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { WebBackendApiModule } from 'web-backend-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { i18nConfig } from './i18n/config/i18n.config';
import { I18nPipesModule } from './i18n/pipes/i18n-pipes.module';
import { I18nService, inicializarI18n } from './i18n/services/i18n.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PoMenuModule,
    BrowserModule,
    I18nPipesModule,
    PoToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    WebBackendApiModule.forRoot(),
    PoI18nModule.config(i18nConfig)
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: inicializarI18n,
      deps: [I18nService],
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
