export interface Produto {
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}

export const produtos: Produto[] = [
  {
    nome: 'Vestido Floral',
    descricao: 'Vestido leve com estampa floral ideal para o verão.',
    preco: 149,
    imagem: 'assets/vestido1.jpg'
  },
  {
    nome: 'Camisa Social Feminina',
    descricao: 'Camisa elegante de tecido leve para ambiente profissional.',
    preco: 85,
    imagem: 'assets/camisa1.jpg'
  },
  {
    nome: 'Calça Feminina',
    descricao: 'Calça de alfaiataria ideal para ocasiões casuais e formais.',
    preco: 120,
    imagem: 'assets/calca1.jpg'
  }
];