import { Injectable } from '@angular/core';
import { PoI18nService } from '@po-ui/ng-components';
import { ILiterals } from '../literals/literals.interface';

/**
 * Função de factory para ser utilizada pelo provider `APP_INITIALIZER`
 * e irá carregar as literais para uso da aplicação.
 * @author Guilherme Eduardo Bittencourt
 * @param i18nService Serviço de internacionalização da aplicação.
 */
export function inicializarI18n(i18nService: I18nService): () => Promise<boolean> {
  return () => i18nService.inicializar();
}

/**
 * O objetivo deste serviço é ser global e manter os valores de literais
 * carregadas ao inicializar a aplicação. A gestão da internacionalização
 * será de responsabilidade do `PoI18nService`, entretanto, este serviço
 * juntamente com um factory de inicialização, irá garantir que as literais
 * estejam carregadas e disponíveis para uso.
 * @author Guilherme Eduardo Bittencourt
 */
@Injectable({
  providedIn: 'root'
})
export class I18nService {

  /** Literais carregadas com base no idioma do usuário */
  literais: ILiterals;

  /** Idioma do usuário */
  idioma: string;

  constructor(private readonly poI18nService: PoI18nService) { }

  /**
   * Método responsável por buscar as literais gerenciadas pelo serviço
   * `PoI18nService` e armazenar neste serviço para ser utilizada pela
   * aplicação.
   */
  inicializar(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.poI18nService.getLiterals().subscribe(
        (literais: ILiterals) => {
          this.literais = literais;
          this.idioma = this.poI18nService.getLanguage();
          resolve(true);
        },
        (error) => reject(error)
      );
    });
  }

  trocarIdioma(idioma: string): void {
    this.poI18nService.setLanguage(idioma, true);
  }
}
