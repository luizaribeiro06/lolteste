/* eslint-disable eol-last */
export interface IFilme{
  nome: string;
  data: string;
  classificacao: number;
  foto: string;
  extra: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
}
