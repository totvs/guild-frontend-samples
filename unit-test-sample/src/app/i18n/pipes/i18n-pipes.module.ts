import { NgModule } from '@angular/core';
import { I18nMenuItemPipe } from './i18n-menu-item.pipe';
import { I18nToolbarActionPipe } from './i18n-toolbar-action.pipe';
import { I18nPipe } from './i18n.pipe';

@NgModule({
  declarations: [
    I18nPipe,
    I18nMenuItemPipe,
    I18nToolbarActionPipe
  ],
  exports: [
    I18nPipe,
    I18nMenuItemPipe,
    I18nToolbarActionPipe
  ],
  providers: [
    I18nPipe
  ]
})
export class I18nPipesModule { }
