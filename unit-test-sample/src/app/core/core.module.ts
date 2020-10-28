import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { WebBackendApiModule } from 'web-backend-api';

@NgModule({
  imports: [
    HttpClientModule,
    WebBackendApiModule.forFeature()
  ],
  exports: [
    CommonModule
  ]
})
export class CoreModule { }
