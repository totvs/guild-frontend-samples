/**
 * Interface que define as literais da aplicação
 * Utilizando uma interface com as chaves de literais, é garantindo
 * que as propriedades que irão conter, de fato, os valores destas chaves
 * baseado nos idiomas configurados, terão todas as literais definidas.
 * Além disso, irá permitir que a utilização nos templates e typescript
 * fique mais concisa, pois serão permitidas apenas as chaves aqui indicadas.
 * @author Guilherme Eduardo Bittencourt
 */
export interface ILiterals {

  tituloAplicacao: string;
  portugues: string;
  ingles: string;
  espanhol: string;
  inicio: string;
  produto: string;
}
