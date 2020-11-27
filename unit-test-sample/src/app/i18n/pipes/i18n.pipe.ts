import { Pipe, PipeTransform } from '@angular/core';
import { ILiterals } from '../literals/literals.interface';
import { I18nService } from '../services/i18n.service';

/**
 * Pipe responsável por transformar uma literal no valor correspondente
 * conforme idioma do usuário.
 * @author Guilherme Eduardo Bittencourt
 */
@Pipe({
  name: 'i18n'
})
export class I18nPipe implements PipeTransform {

  constructor(private readonly i18nService: I18nService) { }

  /**
   * Transforma uma literal no valor correspondente
   * conforme idioma do usuário.
   * @param literal Uma das literais pré-definidas para a aplicação.
   */
  transform(literal: keyof ILiterals): string {
    if (!this.i18nService.literais || !this.i18nService.literais.hasOwnProperty(literal)) {
      console.warn(`[i18n] ${literal} => Literal não encontrada para o idioma ${this.i18nService.idioma}`);
      return literal;
    } else {
      return this.i18nService.literais[literal];
    }
  }
}
