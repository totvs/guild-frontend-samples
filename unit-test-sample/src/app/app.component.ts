import { Component } from '@angular/core';
import { PoMenuItem, PoToolbarAction } from '@po-ui/ng-components';
import { I18nService } from './i18n/services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly acoesToolbar: PoToolbarAction[] = [
    {
      label: 'portugues',
      action: this.i18nService.trocarIdioma.bind(this.i18nService, 'pt-BR'),
      visible: this.i18nService.idioma.toLowerCase() !== 'pt-br'
    },
    {
      label: 'ingles',
      action: this.i18nService.trocarIdioma.bind(this.i18nService, 'en-US'),
      visible: this.i18nService.idioma.toLowerCase() !== 'en-us'
    },
    {
      label: 'espanhol',
      action: this.i18nService.trocarIdioma.bind(this.i18nService, 'es'),
      visible: this.i18nService.idioma.toLowerCase() !== 'es'
    }
  ];

  readonly menus: PoMenuItem[] = [
    {
      label: 'inicio',
      icon: 'po-icon-home',
      link: '/inicio',
      shortLabel: 'inicio'
    },
    {
      label: 'produto',
      icon: 'po-icon-basket',
      link: '/produto',
      shortLabel: 'produto'
    }
  ];

  constructor(private readonly i18nService: I18nService) { }

}
