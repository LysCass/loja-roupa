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
    preco: 150,
    imagem: 'assets/vestido1.jpg'
  },
  {
    nome: 'Camisa Social Feminina',
    descricao: 'Camisa elegante de tecido leve para ambiente profissional.',
    preco: 80,
    imagem: 'assets/camisa1.jpg'
  },
  {
    nome: 'Calça Feminina',
    descricao: 'Calça de alfaiataria ideal para ocasiões casuais e formais.',
    preco: 119,
    imagem: 'assets/calca1.jpg'
  },
  {
    nome: 'Jaqueta Jeans',
    descricao: 'Jaqueta moderna, ótima para meia-estação.',
    preco: 159,
    imagem: 'assets/jaqueta1.jpg'
  },
  {
    nome: 'Blusa de Tricô',
    descricao: 'Blusa confortável com toque artesanal.',
    preco: 99.90,
    imagem: 'assets/blusa1.jpg'
  }
];
