import { ILiterals } from '../literals/literals.interface';
import { I18nService } from '../services/i18n.service';
import { I18nPipe } from './i18n.pipe';

describe('i18n.pipe.spec | I18nPipe', () => {

  let pipe: I18nPipe;
  let i18nService: I18nService;

  beforeEach(() => {
    const literais: Partial<ILiterals> = {
      inicio: 'Início'
    };
    i18nService = jasmine.createSpyObj([], {
      literais
    });
    pipe = new I18nPipe(i18nService);
  });

  it('deve instanciar o pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('deve retornar o conteúdo da literal', () => {
    expect(pipe.transform('inicio')).toBe('Início');
  });

  it('deve retornar a chave da literal quando literais indefinida', () => {
    i18nService.literais = undefined;
    expect(pipe.transform('inicio')).toBe('inicio');
  });

  it('deve retornar a chave da literal quando não existe literal', () => {
    expect(pipe.transform('naoExiste' as any)).toBe('naoExiste');
  });
});
