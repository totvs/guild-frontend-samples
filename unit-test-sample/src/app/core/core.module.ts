import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WebBackendApiModule } from 'web-backend-api';
import { I18nPipesModule } from '../i18n/pipes/i18n-pipes.module';

@NgModule({
  imports: [
    I18nPipesModule,
    WebBackendApiModule.forFeature()
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
