export interface Palavra {
  portugues: string;
  espanhol: string;
}

export interface Estatisticas {
  totalPerguntas: number;
  acertos: number;
  erros: number;
  percentualAcerto: number;
}

export interface Erro {
  portugues: string;
  espanhol: string;
  data: Date;
}