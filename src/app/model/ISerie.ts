/* eslint-disable eol-last */
export interface ISerie{
  nome: string;
  data: string;
  classificacao: number;
  foto: string;
  extra: string[];
  pagina?: string; //** a ? indica que o campo nao é obrigatorio*/
  favorito: boolean;
  }