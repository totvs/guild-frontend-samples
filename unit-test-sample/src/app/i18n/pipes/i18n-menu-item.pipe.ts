import { Pipe, PipeTransform } from '@angular/core';
import { PoMenuItem } from '@po-ui/ng-components';
import { I18nPipe } from './i18n.pipe';

@Pipe({
  name: 'i18nMenuItem'
})
export class I18nMenuItemPipe implements PipeTransform {

  constructor(private readonly i18nPipe: I18nPipe) { }

  transform(itemMenu: PoMenuItem | PoMenuItem[]): PoMenuItem | PoMenuItem[] {
    return Array.isArray(itemMenu) ?
      [...itemMenu.map((item: PoMenuItem) => this.traduzir(item))] :
      this.traduzir(itemMenu);
  }

  private traduzir(itemMenu: PoMenuItem): PoMenuItem {
    return Object.assign({}, itemMenu, {
      label: this.i18nPipe.transform(itemMenu.label as any),
      shortLabel: this.i18nPipe.transform(itemMenu.shortLabel as any)
    });
  }
}
