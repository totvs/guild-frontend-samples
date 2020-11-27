import { I18nToolbarActionPipe } from './i18n-toolbar-action.pipe';

describe('i18n-toolbar-action.pipe.spec | I18nToolbarActionPipe', () => {

  it('deve instanciar o pipe', () => {
    const pipe = new I18nToolbarActionPipe(jasmine.createSpyObj(['transform']));
    expect(pipe).toBeTruthy();
  });
});
