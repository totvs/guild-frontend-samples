import { PoI18nConfig } from '@po-ui/ng-components';
import { generalEnUs } from '../literals/en-us.literals';
import { generalEs } from '../literals/es.literals';
import { generalPtBr } from '../literals/pt-br.literals';

export const i18nConfig: PoI18nConfig = {
  default: {
    language: 'pt-BR',
    context: 'general',
    cache: true
  },
  contexts: {
    general: {
      'pt-BR': generalPtBr,
      'en-US': generalEnUs,
      es: generalEs
    }
  }
};
