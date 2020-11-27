import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WebBackendApiModule } from 'web-backend-api';
import { I18nPipesModule } from '../i18n/pipes/i18n-pipes.module';

@NgModule({
  imports: [
    I18nPipesModule,
    HttpClientModule,
    WebBackendApiModule.forFeature()
  ],
  exports: [
    CommonModule,
    I18nPipesModule
  ]
})
export class CoreModule { }
