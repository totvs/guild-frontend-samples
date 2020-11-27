import { Pipe, PipeTransform } from '@angular/core';
import { PoToolbarAction } from '@po-ui/ng-components';
import { I18nPipe } from './i18n.pipe';

@Pipe({
  name: 'i18nToolbarAction'
})
export class I18nToolbarActionPipe implements PipeTransform {

  constructor(private readonly i18nPipe: I18nPipe) { }

  transform(acaoToolbar: PoToolbarAction | PoToolbarAction[]): PoToolbarAction | PoToolbarAction[] {
    return Array.isArray(acaoToolbar) ?
      [...acaoToolbar.map((acao: PoToolbarAction) => this.traduzir(acao))] :
      this.traduzir(acaoToolbar);
  }

  private traduzir(acaoToolbar: PoToolbarAction): PoToolbarAction {
    return Object.assign({}, acaoToolbar, {
      label: this.i18nPipe.transform(acaoToolbar.label as any),
    });
  }
}
