import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { PoI18nConfig, PoI18nModule, PoMenuModule, PoToolbarModule } from '@po-ui/ng-components';
import { WebBackendApiModule } from 'web-backend-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { generalEnUs } from './i18n/literals/en-us.literals';
import { generalEs } from './i18n/literals/es.literals';
import { generalPtBr } from './i18n/literals/pt-br.literals';
import { I18nPipesModule } from './i18n/pipes/i18n-pipes.module';
import { I18nService, inicializarI18n } from './i18n/services/i18n.service';

const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPtBr,
      'en-US': generalEnUs,
      es: generalEs
    }
  }
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PoMenuModule,
    BrowserModule,
    I18nPipesModule,
    PoToolbarModule,
    HttpClientModule,
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
