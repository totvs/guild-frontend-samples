import { PoI18nBaseService } from '@po-ui/ng-components/lib/services/po-i18n/po-i18n-base.service';
import { of } from 'rxjs';
import { generalPtBr } from '../literals/pt-br.literals';
import { I18nService } from './i18n.service';

describe('i18n.service.spec | I18nService', () => {

  let service: I18nService;
  let poI18nService: PoI18nBaseService;

  beforeEach(() => {
    poI18nService = jasmine.createSpyObj({
      getLiterals: () => of(generalPtBr),
      getLanguage: () => 'pt-BR'
    });
    service = new I18nService(poI18nService);
  });

  it('deve instanciar o serviço', () => {
    expect(service).toBeTruthy();
  });
});
