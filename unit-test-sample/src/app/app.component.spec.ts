import { APP_INITIALIZER } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { PoI18nModule, PoI18nService, PoMenuModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { AppComponent } from './app.component';
import { i18nConfig } from './i18n/config/i18n.config';
import { I18nPipesModule } from './i18n/pipes/i18n-pipes.module';
import { I18nService, inicializarI18n } from './i18n/services/i18n.service';

/**
 * >> RUIM << Este exemplo possui alto acoplamento com todas as dependências do
 * `AppComponent` que será testado de forma unitária. É ruim, definir um
 * módulo de testes utilizando o `TestBed` e associando estas dependências,
 * pois, você automaticamente estará suscetível ao comportamento destas.
 * O objetivo do teste unitário do `AppComponent` deveria ser
 * validar o comportamente desta classe e não o comportamento das
 * dependências que, já deveriam estar validadas com seus testes unitários.
 * Utilize o `TestBed` com cautela, sempre analisando a composição do módulo
 * de testes, definindo exatamente o que é estritamente necessário para
 * conseguir validar o comportamento esperado, por exemplo, caso você queria
 * validar o template HTML, você pode considerar a utilização dos módulos
 * originais de componentes que serão utilizados (Exemplo: PO UI) ou optar ainda,
 * por realizar o mock destes (Dará mais trabalho, mas você não irá depender do
 * módulo/comportamento original que não é responsabilidade deste teste,
 * indicando o que se espera através do mock).
 */
// describe('app.component.spec | AppComponent', () => {

//   beforeEach(waitForAsync(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         PoMenuModule,
//         PoPageModule,
//         I18nPipesModule,
//         PoToolbarModule,
//         RouterTestingModule,
//         PoI18nModule.config(i18nConfig)
//       ],
//       providers: [
//         {
//           provide: APP_INITIALIZER,
//           useFactory: inicializarI18n,
//           deps: [I18nService],
//           multi: true
//         }
//       ],
//       declarations: [
//         AppComponent
//       ],
//     }).compileComponents();
//   }));

//   it('deve criar o componente', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//     expect(app).toBeTruthy();
//   });

//   it('deve ter dois itens no menu', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app: AppComponent = fixture.debugElement.componentInstance;
//     fixture.detectChanges();
//     expect(app.menus.length).toBe(2);

//     expect(app.menus[0].label).toBe('inicio');
//     expect(app.menus[0].icon).toBe('po-icon-home');
//     expect(app.menus[0].link).toBe('/inicio');
//     expect(app.menus[0].shortLabel).toBe('inicio');

//     expect(app.menus[1].label).toBe('produto');
//     expect(app.menus[1].icon).toBe('po-icon-basket');
//     expect(app.menus[1].link).toBe('/produto');
//     expect(app.menus[1].shortLabel).toBe('produto');
//   });

//   it('deve ter as ações de troca de idioma', () => {
//     const fixture = TestBed.createComponent(AppComponent);
//     const app: AppComponent = fixture.debugElement.componentInstance;
//     const i18nService: I18nService = TestBed.inject(I18nService);
//     const poI18nService: PoI18nService = TestBed.inject(PoI18nService);
//     const spySetLanguage = spyOn(poI18nService, 'setLanguage');
//     fixture.detectChanges();
//     expect(app.acoesToolbar.length).toBe(3);

//     expect(app.acoesToolbar[0].label).toBe('portugues');
//     expect(app.acoesToolbar[0].visible).toBe(i18nService.idioma !== 'pt-br');
//     app.acoesToolbar[0].action();
//     expect(spySetLanguage).toHaveBeenCalledWith('pt-BR', true);
//     spySetLanguage.calls.reset();

//     expect(app.acoesToolbar[1].label).toBe('ingles');
//     expect(app.acoesToolbar[1].visible).toBe(i18nService.idioma !== 'en-us');
//     app.acoesToolbar[1].action();
//     expect(spySetLanguage).toHaveBeenCalledWith('en-US', true);
//     spySetLanguage.calls.reset();

//     expect(app.acoesToolbar[2].label).toBe('espanhol');
//     expect(app.acoesToolbar[2].visible).toBe(i18nService.idioma !== 'es');
//     app.acoesToolbar[2].action();
//     expect(spySetLanguage).toHaveBeenCalledWith('es', true);
//   });
// });

/**
 * >> BOM << O objetivo do teste unitário do exemplo acima pode ser atendido
 * de forma mais simples e objetiva, sem a necessidade da utilização do
 * `TestBed`. Neste exemplo, instanciamos a classe de componente para validar
 * o comportamento da mesma que, neste caso, trata apenas da definição dos
 * itens de menu e ações do toolbar.
 */
describe('app.component.spec | AppComponent', () => {

  let app: AppComponent;
  let i18nService: I18nService;

  beforeEach(() => {
    i18nService = jasmine.createSpyObj(['trocarIdioma'], {
      idioma: 'pt-BR'
    });
    app = new AppComponent(i18nService);
  });

  it('deve criar o componente', () => {
    expect(app).toBeTruthy();
  });

  it('deve ter dois itens no menu', () => {
    expect(app.menus.length).toBe(2);

    expect(app.menus[0].label).toBe('inicio');
    expect(app.menus[0].icon).toBe('po-icon-home');
    expect(app.menus[0].link).toBe('/inicio');
    expect(app.menus[0].shortLabel).toBe('inicio');

    expect(app.menus[1].label).toBe('produto');
    expect(app.menus[1].icon).toBe('po-icon-basket');
    expect(app.menus[1].link).toBe('/produto');
    expect(app.menus[1].shortLabel).toBe('produto');
  });

  it('deve ter as ações de troca de idioma', () => {

    expect(app.acoesToolbar.length).toBe(3);

    expect(app.acoesToolbar[0].label).toBe('portugues');
    expect(app.acoesToolbar[0].visible).toBeFalse();
    app.acoesToolbar[0].action();
    expect(i18nService.trocarIdioma).toHaveBeenCalledWith('pt-BR');

    expect(app.acoesToolbar[1].label).toBe('ingles');
    expect(app.acoesToolbar[1].visible).toBeTrue();
    app.acoesToolbar[1].action();
    expect(i18nService.trocarIdioma).toHaveBeenCalledWith('en-US');

    expect(app.acoesToolbar[2].label).toBe('espanhol');
    expect(app.acoesToolbar[2].visible).toBeTrue();
    app.acoesToolbar[2].action();
    expect(i18nService.trocarIdioma).toHaveBeenCalledWith('es');
  });
});
