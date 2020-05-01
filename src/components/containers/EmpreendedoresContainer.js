import {Container} from 'unstated'

class EmpreendedoresContainer extends Container {
  state = {
    mostrarDetalhesModal: false,
    empreendedorSelecionado: {},
    categorias: ['cama-mesa-banho', 'alimentos', 'artesanato', 'saude'],
    empreendedores: [
      {
        nome: 'S. Gomes',
        nomeProprietario: 'Clayton Gomes',
        categoria: 'cama-mesa-banho',
        imagem: 'img/empreendedores/clayton-gomes.jpeg',
        descricao: 'Produtos de limpeza em geral',
        detalhes: 'Vendo produtos de todas as categorias de limpeza',
        contato: '5541996774764'
      },
      {
        nome: 'Choripan - Sanduíche Argentino',
        nomeProprietario: 'Daniel Stancik',
        categoria: 'alimentos',
        imagem: 'img/empreendedores/choripan-1.jpeg',
        descricao: 'O Choripan pode ir até você',
        contato: '5541991899369'
      },
      {
        nome: 'Rê Que Faz',
        nomeProprietario: 'Rejane Gonçalvez',
        categoria: 'artesanato',
        imagem: 'img/empreendedores/requefaz.jpg',
        descricao: 'Artesanato, com crochê e tricô',
        contato: '5541998257073'
      },
    ]
  }

  setMostrarDetalhesModal(bool) {this.setState({mostrarDetalhesModal: bool})}
  setEmpreendedorSelecionado(empreendedorSelecionado) {this.setState({empreendedorSelecionado})}
}

export default EmpreendedoresContainer