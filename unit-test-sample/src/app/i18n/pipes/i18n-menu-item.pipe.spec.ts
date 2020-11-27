import { I18nMenuItemPipe } from './i18n-menu-item.pipe';

describe('i18n-menu-item.pipe.spec | I18nMenuItemPipe', () => {

  it('deve instanciar o pipe', () => {
    const pipe = new I18nMenuItemPipe(jasmine.createSpyObj(['transform']));
    expect(pipe).toBeTruthy();
  });
});
