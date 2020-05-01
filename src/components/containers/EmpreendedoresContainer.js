import {Container} from 'unstated'

class EmpreendedoresContainer extends Container {
  state = {
    categorias: ['cama-mesa-banho', 'alimentos', 'artesanato', 'saude'],
    empreendedores: [
      {
        nome: 'S. Gomes',
        nomeProprietario: 'Clayton Gomes',
        categoria: 'cama-mesa-banho',
        imagem: 'img/empreendedores/clayton-gomes.jpeg',
        descricao: 'Produtos de limpeza em geral',
        contato: '554196774764'
      },
      {
        nome: 'Choripan - Sanduíche Argentino',
        nomeProprietario: 'Daniel Stancik',
        categoria: 'alimentos',
        imagem: 'img/empreendedores/choripan-1.jpeg',
        descricao: 'O Choripan pode ir até você, faça já seu pedido',
        contato: '554191899369'
      },
      {
        nome: 'Rê Que Faz',
        nomeProprietario: 'Rejane Gonçalvez',
        categoria: 'artesanato',
        imagem: 'img/empreendedores/requefaz.jpg',
        descricao: 'Artesanato, chales, crochê e tricô',
        contato: '554198257073'
      },
    ]
  }
}

export default EmpreendedoresContainer